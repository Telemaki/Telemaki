const {app, BrowserWindow} = require("electron");

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

app.whenReady().then(createWindow);
