var Harness = Siesta.Harness.Browser.ExtJS;
Harness.configure({
    title: 'SOAP User Interface',
    preload: [
        '../testCommon/testHelper.js',
        'http://localhost:1111/extjs-4.1.3/ext-all-debug.js',
        'http://localhost:1111/extjs-4.1.3/src/data/soap/Proxy.js',
        'http://localhost:1111/extjs-4.1.3/src/data/soap/Reader.js'
    ]
});

Harness.start(
'1. QA-466 Create Requirement.js',
'2. QA-514 Flagging Dirty Requirement.js',
'3. QA-230 Revise Requirement With PM Credentials.js',
'4. QA-537 Add New Requirement Sub Type.js',
'5. QA-539 Associating Opportunity Analysis Item to Requirement.js',
'6. QA-225 Requirement ID Management.js',
'7. QA-431 Verify Requirement Maturity Index Calculation.js',
'8. QA-361 Delete a Requirement.js',
'9. QA-226 Requirement ID Management After Deleting an Existing Requirement.js',
'10. QA-227 Requirement ID Management after copying a requirement from other project.js'
// 'QA-234 Trace Requirement Change.js', Cannot create a viable test case that checks the version history tab for the revised requirement. 
// 'QA-461 Filter by Requirement Sub Type.js', Cannot create a viable test case that checks if only filtered requirement types are displayed. 
// 'QA-499 Compute Value Score icon in Requirements Requirements ( Metrics) tab.js',
// 'QA-538 Delete a Sub Requirement Sub Type.js', Cannot create a viable test case that ensures the requirement sub type is deleted from the list of requirement types. 
);
