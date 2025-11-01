@echo off
echo ==========================
echo   Limpiando Archivos Basura
echo ==========================
echo.

:: Limpiar Temp del usuario
echo Borrando %TEMP% ...
rd /s /q "%TEMP%"
mkdir "%TEMP%"

:: Limpiar Temp de Windows
echo Borrando C:\Windows\Temp ...
rd /s /q "C:\Windows\Temp"
mkdir "C:\Windows\Temp"

:: Limpiar cache de navegador Edge/Internet Explorer
echo Borrando cache IE/Edge...
RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 255

:: Limpiar cache de Miniaturas
echo Borrando cache de miniaturas...
del /s /q /f "%LocalAppData%\Microsoft\Windows\Explorer\thumbcache_*"

:: Limpiar logs de Windows
echo Borrando archivos de log de Windows...
del /s /q /f "C:\Windows\Logs\*.*"

:: Limpiar Prefetch
echo Borrando Prefetch...
rd /s /q "C:\Windows\Prefetch"
mkdir "C:\Windows\Prefetch"

:: Limpiar cache de actualizaciones
echo Borrando cache de Windows Update...
net stop wuauserv >nul 2>&1
rd /s /q "C:\Windows\SoftwareDistribution\Download"
net start wuauserv >nul 2>&1

:: Liberar espacio de papelera
echo Vaciando Papelera de Reciclaje...
rd /s /q %systemdrive%\$Recycle.Bin

echo.
echo ==========================
echo   Limpieza Completada!
echo ==========================
pause
