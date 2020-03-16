const {app, BrowserWindow} = require("electron");
const RPC = require('discord-rpc');

const clientId = '606983186760728606';
const clientSecret = process.env.SECRET;
const scopes = ['rpc'];
 
const client = new RPC.Client({ transport: 'ipc' });
 
client.on('ready', () => {
  console.log('Logged in as', client.user.username);
});
 
client.login({ clientId, clientSecret });

function createWindow() {
	// Create the browser window.
	let win = new BrowserWindow({
		width: 1600,
		height: 1600 / 16 * 9,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// and load the index.html of the app.
	win.loadFile("app/login/index.html");
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(createWindow);
