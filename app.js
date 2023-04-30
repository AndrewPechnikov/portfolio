window.addEventListener("load", async () => {
	if ("serviceWorker" in navigator) {
		try {
			const reg = await navigator.serviceWorker.register("./sw.js");
			console.log("ok", reg);
		} catch {
			console.log("fail");
		}
	}
});
