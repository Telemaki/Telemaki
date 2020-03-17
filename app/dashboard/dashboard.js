Vue.component("navelem", {
	props: ["text", "link"],
	template: `<div @click="handleClick" class="element"><br><span class="text">{{ text }}</span><br><img width="48" :src="link"></div>`,
	methods: {
		handleClick() {
			this.$emit("click");
		}
	}
});

Vue.component("project-card", {
	props: ["name"],
	template: `<div class="card"><div class="top"></div><div class="bottom">{{ name }}<img src="../images/kebab.svg" /></div></div>`
});

let app = new Vue({
	el: "#app",
	data: {
		navElements: [
			{text: "My Projects", link: "../images/projects.svg"},
			{text: "Shared Projects", link: "../images/shared.svg"},
			{text: "Account", link: "../images/person.svg"},
			{text: "Log Out", link: "../images/logout.svg"}
		],
		projects: ["Test", "Test 2"],
		showPrompt: false,
		name: null,
		error: null
	},
	methods: {
		greet() {
			this.projects = []
		},
		openPrompt() {
			this.showPrompt = true
			this.error = null
		},
		closePrompt() {
			this.showPrompt = false
			this.error = null
		},
		createProject() {
			let thisIsUseful = this.projects.find(item => item == this.name);
			if (this.name && !thisIsUseful) { this.projects.push(this.name);
				this.closePrompt();
				window.location.href = ("/editor/index.html?name=" + this.name)
				this.name = "" 
			} else {
				if(!thisIsUseful) {
					this.error = "Please provide a name"
				} else {
					this.error = "You already have a project with that name";
				}
			}
		},
		openClicked(name) {
			window.location.href = ("/editor/index.html?name=" + name)
		}
	}
});
