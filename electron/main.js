const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true,
    frame:true,
  });

  // En desarrollo, carga la URL de desarrollo de Vite
  // En producción, carga el archivo HTML construido
  if (isDev) {
    win.loadURL('http://localhost:3000');
    // Abre las herramientas de desarrollo en modo desarrollo
    win.webContents.openDevTools();
  } else {
    // En producción, asegúrate de que la ruta al archivo index.html sea correcta
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});