import React, { Component } from "react";
import Slider from "react-slick";
import firstSite from "./../image/firstSite.png";
import secondSite from "./../image/secondSite.png";
import thirdSite from "./../image/thirdSite.png";
import fourthSite from "./../image/fourthSite.png";

export default class MultipleItems extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 350,
			slidesToShow: 2,
			slidesToScroll: 1,
		};
		return (
			<section className="portfolio container">
				<h1 className="portfolio__title"> Portfolio </h1>
				<Slider {...settings}>
					<a href="https://andrewpechnikov.github.io/course-work/">
						<img src={firstSite} alt="" width="600" height="350" />
					</a>
					<a href="https://kateshepel.github.io/ice-cream/">
						<img src={secondSite} alt="" width="600" height="350" />
					</a>
					<a href="https://andrewpechnikov.github.io/markDownHw/">
						<img src={thirdSite} alt="" width="600" height="350" />
					</a>
					<a href="https://andrewpechnikov.github.io/dashboard-activity/">
						<img src={fourthSite} alt="" width="600" height="350" />
					</a>
				</Slider>
			</section>
		);
	}
}
