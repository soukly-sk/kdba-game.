const { app, BrowserWindow } = require('electron');
const path = require('path');
let win;
app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1280, height: 780, minWidth: 850, minHeight: 530,
    backgroundColor: '#100d27', autoHideMenuBar: true,
    title: 'KDBA! 3D — First Person', show: false,
    webPreferences: { nodeIntegration: false, contextIsolation: true, sandbox: true,
      webSecurity: true, backgroundThrottling: false }
  });
  win.loadFile(path.join(__dirname, 'web/index.html'));
  win.once('ready-to-show', () => win.show());
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') win.setFullScreen(!win.isFullScreen());
  });
});
app.on('window-all-closed', () => { app.quit(); });
