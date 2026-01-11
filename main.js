const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    //the app size 
    width: 214,
    height: 228,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");

  /* To open the console for debugging
  win.webContents.openDevTools()*/
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});