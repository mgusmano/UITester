cd C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883
rmdir /S /Q C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883\packages\ext-theme-emspeed\
sencha generate theme ext-theme-emspeed
xcopy /S /E /Y C:\workareas\100\EPort\src\UI\SharePoint\Layouts\EMSPortal\theme\ext-all-emspeed.css C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883\resources\css
xcopy /S /E /Y C:\workareas\100\EPort\src\UI\SharePoint\Layouts\EMSPortal\theme\sass\*.* C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883\packages\ext-theme-emspeed\sass
xcopy /S /E /Y C:\workareas\100\EPort\src\UI\SharePoint\Layouts\EMSPortal\theme\sass\package.json C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883\packages\ext-theme-emspeed
xcopy /S /E /Y C:\workareas\100\EPort\src\UI\SharePoint\Layouts\EMSPortal\theme\images\*.* C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883\packages\ext-theme-emspeed\build\resources\images\
cd C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883\packages\ext-theme-emspeed
sencha package build
xcopy /S /E /Y C:\workareas\100\EPort\src\UI\SharePoint\Layouts\EMSPortal\theme\images\*.* C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883\packages\ext-theme-emspeed\build\resources\images\
xcopy /S /E /Y C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883\packages\ext-theme-emspeed\build\resources\*.* C:\inetpub\wwwroot\wss\VirtualDirectories\80\ext-4.2.1.883\resources\ext-theme-emspeed\ 
pause










REM+- OmniWorks Replacement History - EPort`src`UI`SharePoint`Layouts`EMSPortal`theme:theme.bat;1
REM       1*[1785938] 30-AUG-2013 20:45:21 (GMT) MGusmano
REM         "add 2 files"
REM+- OmniWorks Replacement History - EPort`src`UI`SharePoint`Layouts`EMSPortal`theme:theme.bat;1
