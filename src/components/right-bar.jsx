import SVG from "./svg-icon";

function rightBar() {
	return (
		<section className="fixed-navigation">
			<div className="fixed-navigation__container">
				<use className="fixed-navigation__theme">
					<svg></svg>
				</use>
				<ul className="fixed-navigation__list">
					<SVG iconName="facebook" className="fixed-navigation__item" width="18" height="18"></SVG>
					<SVG iconName="facebook" className="fixed-navigation__item" width="18" height="18"></SVG>
					<SVG iconName="facebook" className="fixed-navigation__item" width="18" height="18"></SVG>
					<SVG iconName="facebook" className="fixed-navigation__item" width="18" height="18"></SVG>
					<SVG iconName="facebook" className="fixed-navigation__item" width="18" height="18"></SVG>
					<SVG iconName="facebook" className="fixed-navigation__item" width="18" height="18"></SVG>
				</ul>
			</div>
		</section>
	);
}

export default rightBar;
