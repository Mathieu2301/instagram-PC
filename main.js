const { app, BrowserWindow } = require('electron');
let window = null;

function createWindow(){
  window = new BrowserWindow({
    title: 'Instagram for PC (By Mathieu Colmon => usp-3.fr/cv)',
    width: 400,
    height: 700,
    minWidth: 400,
    minHeight: 700,
    icon:__dirname + '\\logo.' + ((process.platform == 'win32') ? 'ico' : 'icns'),
  });

  window.setMenu(null);
  window.loadURL('https://instagram.com/', {
    userAgent: 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36'
  });
  window.on('closed', () => window = null);
}

app.on('ready', createWindow);
app.on('window-all-closed', () => (process.platform !== 'darwin') ? app.quit() : false);
app.on('activate', () => (window === null) ? createWindow() : null);
