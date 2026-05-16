@echo off
REM Bega River Monitoring System - Quick Start Script for Windows

cls
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║  Bega River Monitoring System - Local Demo                     ║
echo ║  Self-Hosted Water Quality Monitoring Dashboard               ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✓ Python detected. Starting HTTP server on port 8000...
    echo.
    echo   🌐 Open your browser: http://localhost:8000
    echo   📊 Monitor 5 stations along the Bega River
    echo   🔄 Auto-refreshes every 30 seconds
    echo   ⏸  Press CTRL+C to stop the server
    echo.
    python -m http.server 8000
    goto end
)

REM Check if Node.js is installed
where node >nul 2>&1
if %errorlevel% == 0 (
    echo ✓ Node.js detected. Starting HTTP server on port 8000...
    echo.
    echo   🌐 Open your browser: http://localhost:8000
    echo   📊 Monitor 5 stations along the Bega River
    echo   🔄 Auto-refreshes every 30 seconds
    echo   ⏸  Press CTRL+C to stop the server
    echo.
    npx http-server -p 8000 --cors
    goto end
)

REM Check if PHP is installed
where php >nul 2>&1
if %errorlevel% == 0 (
    echo ✓ PHP detected. Starting local server on port 8000...
    echo.
    echo   🌐 Open your browser: http://localhost:8000
    echo   📊 Monitor 5 stations along the Bega River
    echo   🔄 Auto-refreshes every 30 seconds
    echo   ⏸  Press CTRL+C to stop the server
    echo.
    php -S localhost:8000
    goto end
)

REM No server found
echo ✗ No HTTP server detected!
echo.
echo Please install one of the following:
echo   1. Python: https://www.python.org/downloads/
echo   2. Node.js: https://nodejs.org/
echo   3. PHP: https://www.php.net/downloads
echo.
echo Or manually open index.html in your browser
echo.

:end
pause
