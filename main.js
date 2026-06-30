const { app, BrowserWindow, dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400, height: 900, minWidth: 800, minHeight: 600,
    title: 'NC State T2Go Dashboard',
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  // --- AUTO UPDATER LOGIC ---
  // Check for updates when the app starts
  autoUpdater.checkForUpdatesAndNotify();

  // Optional: Show a custom dialog when an update is downloaded
  autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    const dialogOpts = {
      type: 'info',
      buttons: ['Restart', 'Later'],
      title: 'Application Update',
      message: process.platform === 'win32' ? releaseNotes : releaseName,
      detail: 'A new version of the NC State Dashboard has been downloaded. Restart the application to apply the updates.'
    };
    dialog.showMessageBox(dialogOpts).then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall();
    });
  });
  // --------------------------

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});