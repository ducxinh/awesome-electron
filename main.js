// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Access Node.js from the renderer with a preload script
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  /*
  If macOS: running without any windows open. When no windows are available, open a new one
  */
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// [Windows and Linux] Quit the app when all windows are closed
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  // Except macOS
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.