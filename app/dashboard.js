/* global Vue */
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
	template: `<div class="card"><div class="top"></div><div class="bottom">{{ name }}<img src="/images/kebab.svg" /></div></div>`
});

let app = new Vue({
	el: "#app",
	data: {
		navElements: [
			{text: "My Projects", link: "/images/projects.svg"},
			{text: "Shared Projects", link: "/images/shared.svg"},
			{text: "Account", link: "/images/person.svg"},
			{text: "Log Out", link: "/images/logout.svg"}
		],
		projects: ["this-name", "that-name"]
	},
	methods: {
		greet: function() {
			alert("Hello");
		}
	}
});
