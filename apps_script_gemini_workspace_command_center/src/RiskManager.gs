function getCapabilityRisk_(intent){
 const c=getCapability_(intent);if(!c)throw new Error("Capability not found.");return c.risk;
}
function requiresApproval_(intent){
 const r=getCapabilityRisk_(intent);return r==="MEDIUM"||r==="HIGH";
}