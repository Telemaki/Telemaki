const { app, BrowserWindow, ipcMain } = require("electron");
const RPC = require('discord-rpc');

const scopes = ['rpc', 'rpc.api'];

const client = new RPC.Client({ transport: 'ipc' });

let win;

app.allowRendererProcessReuse = true

client.on("ready", () => {
    console.log(client.user.username)
    win.webContents.send('username', client.user.username);
    win.loadFile('app/dashboard/index.html')
})

ipcMain.on("login", event => client.login({ clientId: "id", clientSecret: "secret" }));
ipcMain.on("changeUrl", (event, url) => win.loadFile(url))

function createWindow() {
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
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(createWindow);