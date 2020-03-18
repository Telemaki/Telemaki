const { app, BrowserWindow, ipcMain } 
             = require("electron");
const RPC    = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

let win;

app.allowRendererProcessReuse = true

client.on("ready", () => {
    win.webContents.send('username', client.user.username);
    win.loadFile('app/dashboard/index.html')
})

ipcMain.on("login",     (event)      => client.login({ clientId: "id", clientSecret: "secret" }));
ipcMain.on("changeUrl", (event, url) => win.loadFile(url))

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
    win.loadFile("app/login/index.html");
});