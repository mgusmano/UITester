var Harness = Siesta.Harness.Browser.ExtJS;
Harness.configure({
    title: 'SOAP User Interface',
    preload: [
        'http://localhost/_layouts/EMSPortal/app/reporting/testCommon/testHelper.js',
        'http://localhost:1111/extjs-4.1.3/ext-all-debug.js',
        'http://localhost:1111/extjs-4.1.3/src/data/soap/Proxy.js',
        'http://localhost:1111/extjs-4.1.3/src/data/soap/Reader.js'
    ]
});

Harness.start(
//    'QA-499 Compute Value Score icon in Requirements Requirements ( Metrics) tab.js',
//    'QA-513 Create Requirement.js',
//    'QA-514 Flagging Dirty Requirement.js',
//    '0000_GetJamesBondActors.t.js',
//    '0100_addTeamMemberRoleToProject.t.js',
//    '0200_cloneProject.t.js',
//    '0300_createPMTClone.t.js', 
//    '0400_createProject.t.js',
//    '0500_createProjectSnapshot.t.js', 
    '0600_getActions.t.js',
    '0700_getCdpIndex.t.js', 
    '0800_getChangedProjectIds.t.js',
    '0900_getCurrentCdp.t.js',
    '1000_getDevices.t.js', 
    '1100_getDFMEAActions.t.js',
    '1200_getDfxIndexes.t.js', 
    '1300_getFMEAs.t.js',
    '1400_getMetricsSnapshot.t.js',
    '1500_getOpportunityAnalysis.t.js',
    '1600_getPFMEAActions.t.js',
    '1700_getPhysicalArchitectureRiskMappings.t.js', 
    '1800_getPhysicalArchitectures.t.js',
    '1900_getPMTClones.t.js', 
    '2000_getProject.t.js',
    '2100_getProjectSnapshots.t.js',
    '2200_getRequirements.t.js',
//  '2201_getRequirements.t.js',
    '2300_getRequirementOpportunityAnalysisMappings.t.js',
	'2400_getRequirementValidationTestMappings.t.js',
    '2500_getRisks.t.js',
	'2600_getRiskCorrectiveActionMappings.t.js',
    '2700_getRiskExperimentalTestMappings.t.js',
    '2800_getSpecifications.t.js',
    '2900_getSpecificationVerificationTestMappings.t.js',
    '3000_getTests.t.js',
    '3100_getTestDeviceMappings.t.js'
//    '3200_removeTeamMemberRoleFromProject.t.js',
//    '3300_renameProject.t.js', 
//    '3400_updateTeamMemberRolesInProject.t.js' 
);
