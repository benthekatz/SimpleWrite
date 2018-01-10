const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path');
const url = require('url');

let win;

var APP_DIR = '/app/'

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    minWidth: 800,
    height: 800,
    minHeight: 200,
    frame: false,
    icon: path.join(__dirname, 'img/icons/png/64x64.png')
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, APP_DIR, 'index.html'),
    protocol: 'file',
    slashes: true
  }));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
