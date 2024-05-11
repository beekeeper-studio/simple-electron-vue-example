// Importing necessary modules from Electron
import { app, BrowserWindow } from 'electron';
import url from 'url'
import path from 'path'
// Declare a variable to hold the window object to avoid garbage collection
let mainWindow: BrowserWindow | null;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // Load the index.html of the app.
  // mainWindow.loadURL('http://localhost:3000'); // Adjust the port if needed for your setup
  console.log("Changed!")
  // Construct the URL for the index.html file.
  let startUrl = url.format({
      pathname: path.join(__dirname, 'renderer/src/index.html'), // Adjust if your file is in a subdirectory within the asar
      protocol: 'file:',
      slashes: true
  });

  if(process.env.BKS_ENV === 'development') {
    startUrl = 'http://localhost:3000/src/index.html'
  }

  console.log("opening file", startUrl)
  mainWindow.loadURL(startUrl)

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});