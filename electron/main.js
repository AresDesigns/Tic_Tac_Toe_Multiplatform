const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true,
    frame:true,    
    icon: path.join(__dirname, '..', 'assets', 'icon.png')

  });

  // En desarrollo, carga la URL de desarrollo de Vite
  // En producción, carga el archivo HTML construido
  if (isDev) {
    win.loadURL('http://localhost:3002');
    // Abre las herramientas de desarrollo en modo desarrollo
    win.webContents.openDevTools();
  } else {
    // En producción, asegúrate de que la ruta al archivo index.html sea correcta
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }

  // Asegurarse de que la aplicación se cierre completamente
  win.on('closed', () => {
    app.quit();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Forzar el cierre de la aplicación
app.on('window-all-closed', () => {
  app.quit();
});