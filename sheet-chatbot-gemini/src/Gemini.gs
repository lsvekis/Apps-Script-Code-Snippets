function generateGeminiText_(prompt, config) {
  const apiKey = getGeminiApiKey_();

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(config.model)}:generateContent`;

  const payload = {
    contents: [
      {
        parts: [
          { text: prompt }
        ]
      }
    ],
    generationConfig: {
      temperature: config.temperature,
      maxOutputTokens: 700
    }
  };

  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'x-goog-api-key': apiKey
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const status = response.getResponseCode();
  const body = response.getContentText();

  if (status < 200 || status >= 300) {
    throw new Error(`Gemini API error (${status}): ${body}`);
  }

  const json = JSON.parse(body);

  const text =
    json?.candidates?.[0]?.content?.parts
      ?.map(part => part.text || '')
      .join('')
      .trim();

  if (!text) {
    return 'That information is not available in the sheet.';
  }

  return text;
}
