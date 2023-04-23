const { data } = require("autoprefixer");

let countVisit = localStorage.getItem("count_visit") ? localStorage.getItem("count_visit") : 0;
countVisit++;
localStorage.setItem("count_visit", countVisit);
console.log(`Ви були на сайті ${countVisit} разів.`);

let countTimeOnSite = Number(localStorage.getItem("countTimeOnSite") ? localStorage.getItem("countTimeOnSite") : 0);

console.log(
	`Ви перебували на сайті ${Math.floor(countTimeOnSite / (1000 * 60 * 60))} годин ${
		Math.floor(countTimeOnSite / (1000 * 60)) % 60
	} хвилин ${Math.floor(countTimeOnSite / 1000) % 60} секунд}`
);
let time1 = new Date().getTime();
let time2 = new Date().getTime();

setInterval(() => {
	time2 = new Date().getTime();
	diffTime = time2 - time1;
}, 1000);

window.addEventListener("unload", () => {
	if (localStorage.getItem("countTimeOnSite")) {
		localStorage.setItem("countTimeOnSite", countTimeOnSite + diffTime);
	} else {
		localStorage.setItem("countTimeOnSite", 0);
	}
});
