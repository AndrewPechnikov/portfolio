import Leftbar from "./left-bar";
import Rightbar from "./right-bar";
import Portfolio from "./portfolio";

function mainComponent() {
	return (
		<main>
			<Leftbar></Leftbar>
			<Rightbar></Rightbar>
			<Portfolio></Portfolio>
		</main>
	);
}

export default mainComponent;
