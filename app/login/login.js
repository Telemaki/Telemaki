const { ipcRenderer } = require('electron');

document.getElementById("discord").addEventListener("click", () => {
    ipcRenderer.send('login', "discord")
})