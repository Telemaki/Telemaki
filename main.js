const {app, BrowserWindow} = require("electron");

function createWindow() {
	// Create the browser window.
	let win = new BrowserWindow({
		width: 1200,
		height: 1000,
		webPreferences: {
			nodeIntegration: true
		}
	});

	// and load the index.html of the app.
	win.loadFile("app/dashboard/index.html");
}

app.whenReady().then(createWindow);
