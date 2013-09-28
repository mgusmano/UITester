rem type noninteractive
rem quick
rem filter none
rem timeout 180
rem sources bin\EMSPortal.wsp

set FILEPATH = %CD%\EPort\src\UI\SharePoint\Layouts\EMSPortal\app\reporting\testStatureWebServices\testStatureWebServices.txt
call phantomjs http://localhost/_layouts/EMSPortal/app/reporting/testStatureWebServices/testIndex.html --local-to-remote-url-access=yes --report-format JSON --report-file %FILEPATH%
/*+- OmniWorks Replacement History - EPort`src`UI`SharePoint`Layouts`EMSPortal`app`reporting`testStatureWebServices:testStatureWebServices.tst;6 */
/*       1*[1710821] 17-DEC-2012 20:47:27 (GMT) MGusmano */
/*         "add stature web test files to Client UI" */
/*       2*[1719090] 17-JAN-2013 20:13:39 (GMT) JShyu */
/*         "Read only" */
/*       3*[1719931] 18-JAN-2013 23:32:05 (GMT) JShyu */
/*         "Fixed testStatureWebServices.tst File" */
/*       4*[1720488] 22-JAN-2013 22:56:26 (GMT) JShyu */
/*         "Changed testStatureWebServices.tst file" */
/*       5*[1738362] 11-MAR-2013 21:31:55 (GMT) MGusmano */
/*         "modify .tst files to include timeout value" */
/*       6*[1790537] 17-SEP-2013 14:26:05 (GMT) JShyu */
/*         "Edit testStatureWebService" */
/*+- OmniWorks Replacement History - EPort`src`UI`SharePoint`Layouts`EMSPortal`app`reporting`testStatureWebServices:testStatureWebServices.tst;6 */
