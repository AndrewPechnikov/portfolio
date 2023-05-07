import photo from "./../../../image/avatar.jpg";
import SVG from "../../blocks/svg-icon";

function leftBar() {
	return (
		<section className="fixed-info">
			<div className="fixed-info__container">
				<img src={photo} className="fixed-info__avatar" alt="I am" />
				<h2 className="fixed-info__name">Andew Pechnikov</h2>
				<p className="fixed-info__description">Font-end Developer</p>
				<ul className="fixed-info__link-list link-list">
					<SVG iconName="facebook" className="link-list__item" width="14" height="14"></SVG>
					<SVG iconName="Youtube" className="link-list__item" width="14" height="14"></SVG>
					<SVG iconName="instagram" className="link-list__item" width="14" height="14"></SVG>
					<SVG iconName="dribbble" className="link-list__item" width="14" height="14"></SVG>
					<SVG iconName="linkedin" className="link-list__item" width="14" height="14"></SVG>
				</ul>
				<div className="fixed-info__horizontal-line"></div>
				<ul className="fixed-info__data-list">
					<li className="fixed-info__data-item">
						<span className="fixed-info__data-characteristic">Age: </span>
						<span className="fixed-info__data">26</span>
					</li>
					<li className="fixed-info__data-item">
						<span className="fixed-info__data-characteristic">Residence: </span>
						<span className="fixed-info__data">UA</span>
					</li>
					<li className="fixed-info__data-item">
						<span className="fixed-info__data-characteristic">Freelance: </span>
						<span className="fixed-info__data fixed-info__data--green">Available</span>
					</li>
					<li className="fixed-info__data-item">
						<span className="fixed-info__data-characteristic">Address: </span>
						<span className="fixed-info__data">Kiyv, Ukraine</span>
					</li>
				</ul>
				<div className="fixed-info__horizontal-line"></div>
				<h4 className="fixed-info__subtitle">Languages</h4>
				<ul className="fixed-info__languages-list list-with-progress-bar">
					<li className="list-with-progress-bar__languages-item">
						<span className="list-with-progress-bar__characteristic">English</span>
						<span className="list-with-progress-bar__procent">60%</span>
						<div className="list-with-progress-bar__progress-bar"></div>
					</li>
					<li className="list-with-progress-bar__languages-item">
						<span className="list-with-progress-bar__characteristic">Ukrainian</span>
						<span className="list-with-progress-bar__procent">100%</span>
						<div className="list-with-progress-bar__progress-bar"></div>
					</li>
				</ul>
				<div className="fixed-info__horizontal-line"></div>
				<h4 className="fixed-info__subtitle">Skills</h4>
				<ul className="fixed-info__languages-list list-with-progress-bar">
					<li className="list-with-progress-bar__languages-item">
						<span className="list-with-progress-bar__characteristic">HTML</span>
						<span className="list-with-progress-bar__procent">90%</span>
						<div className="list-with-progress-bar__progress-bar"></div>
					</li>
					<li className="list-with-progress-bar__languages-item">
						<span className="list-with-progress-bar__characteristic">CSS</span>
						<span className="list-with-progress-bar__procent">85%</span>
						<div className="list-with-progress-bar__progress-bar"></div>
					</li>
					<li className="list-with-progress-bar__languages-item">
						<span className="list-with-progress-bar__characteristic">JS</span>
						<span className="list-with-progress-bar__procent">80%</span>
						<div className="list-with-progress-bar__progress-bar"></div>
					</li>
					<li className="list-with-progress-bar__languages-item">
						<span className="list-with-progress-bar__characteristic">React</span>
						<span className="list-with-progress-bar__procent">75%</span>
						<div className="list-with-progress-bar__progress-bar"></div>
					</li>
					<li className="list-with-progress-bar__languages-item">
						<span className="list-with-progress-bar__characteristic">Angular</span>
						<span className="list-with-progress-bar__procent">70%</span>
						<div className="list-with-progress-bar__progress-bar"></div>
					</li>
				</ul>
				<div className="fixed-info__horizontal-line"></div>
				<button className="fixed-info__download-cv button">DOWNLOAD CV</button>
			</div>
		</section>
	);
}

export default leftBar;
