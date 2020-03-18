const { app, BrowserWindow, ipcMain, ipcRenderer }
                  = require("electron");
const RPC         = require('discord-rpc');
const client      = new RPC.Client({ transport: 'ipc' });
const path        = require('path')

let win,
    production = false;

app.allowRendererProcessReuse = true

client.on("ready", () => {
    win.webContents.send('username', client.user.username);
    production ? win.loadFile(path.join("app", "/dashboard")) : win.loadURL(path.join("http://localhost:4200", "dashboard"))
})

ipcMain.on("login",     (event)      => client.login({ clientId: "id", clientSecret: "secret" }));
ipcMain.on("changeUrl", (event, url) => production ? win.loadFile(path.join("app", url)) : win.loadURL(path.join("http://localhost:4200", url)))

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 1600,
        height: 900,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.once('ready-to-show', () => win.show())
    production ? win.loadFile("app/login/index.html") : win.loadURL("http://localhost:4200/login");
});