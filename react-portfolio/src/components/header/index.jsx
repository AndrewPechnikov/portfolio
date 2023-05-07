import photo from "./../../image/my_photo.jpg";

function headerComponent() {
	return (
		<header className="hero-header">
			<div className="container hero-header__container">
				<div className="hero-header__text-content">
					<h1 className="hero-header__title">
						I’m Andew Pechnikov <span className="hero-header__title--yellow">Front-end</span> Developer
					</h1>
					<p className="hero-header__discription">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis.
						Natoque rutrum semper sed suspendisse nunc lectus.
					</p>
					<button className="button hero-header__button">
						HIRE ME <span></span>
					</button>
				</div>
				<img src={photo} alt="" className="hero-header__avatar" width={500} height={429} />
			</div>
		</header>
	);
}

export default headerComponent;
