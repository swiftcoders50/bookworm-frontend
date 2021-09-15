import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import CarouselRotateImage from "./CarouselRotateImage";
// react-slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// carousel custom style
const customStyle = {
	display: "block",
	background: "#C4C0C0",
	borderRadius: "100%",
};
// carousel next arrow icon on the right position
const SampleNextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				...customStyle,
			}}
			onClick={onClick}
		/>
	);
};
// carousel previous arrow icon on the left position
const SamplePrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				...customStyle,
			}}
			onClick={onClick}
		/>
	);
};

const HeaderCarousel = ({ isVisible }) => {
	// carousel settings
	const settings = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 6000,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	// carousel body information
	const carouselInfo = [
		{
			id: new Date(),
			title1: "Programing Books",
			title2: "Best seller Collection",
			title3: "Learn Easy for programmer",
			subTitle: "Tamim shariyar and Zonayed Ahmed",
			details1:
				"Computer programming by Tamim Shariyar Subeen and Hate kolome Javascript",
			details2:
				"by Zonayed Ahmed.These books are best seller collection of 2021",
			img: "/assets/carousel-images/programming.png",
			price: 23,
		},
		{
			id: new Date(),
			title1: "Islamic Books",
			title2: "Best seller Collection",
			title3: "Read Easy for Muslim",
			subTitle: "Arif Azad and Mizanur Rahman Azhari",
			details1:
				"Pradaxikal Sazid by Arif Azad and Message by Mizanur Rahman Azhari",
			details2: "These books are best seller      collection of 2021",
			img: "/assets/carousel-images/islamic.png",
			price: 15,
		},
		{
			id: new Date(),
			title1: "Motivation Books",
			title2: "Best seller Collection",
			title3: "Read Easy for Anyone",
			subTitle: "Jhankar Mahbub and Ayman Sadik",
			details1:
				"Recharge you down battery by Jhankar Mahbub and Students hacks by Ayman",
			details2:
				"Sadik and Sadman Sadik.These books are best seller collection of 2020",
			img: "/assets/carousel-images/motivational.png",
			price: 20,
		},
	];

	return (
		<div className="bg-gradient-to-r from-gray-200 via-indigo-100 to-white w-screen overflow-hidden px-8 sm:px-16 pt-28 lg:pt-16 pb-12">
			<Slider className="h-full" {...settings}>
				{carouselInfo.map((info) => (
					<div key={info.id}>
						<div className="md:h-full flex flex-col items-center justify-evenly md:flex-row md:justify-between md:items-center">
							<div>
								<h2 className="text-lg text-gray-900 uppercase font-semibold">
									{info.subTitle}
								</h2>
								<div className="my-5 md:mt-5">
									<h1 className="sm:my-1 text-2xl sm:text-3xl lg:text-5xl font-bold  text-indigo-900">
										{info.title1}
									</h1>
									<h1 className="sm:my-1 text-2xl sm:text-3xl lg:text-5xl font-bold text-indigo-900">
										{info.title2}
									</h1>
									<h1 className="sm:my-1 text-2xl sm:text-3xl lg:text-5xl font-bold text-indigo-900">
										{info.title3}
									</h1>
								</div>
								<p className="my-5 hidden sm:block text-gray-900 text-md">
									{info.details1} <br /> {info.details2}
								</p>
								<button className="bg-indigo-900 hover:bg-indigo-800 text-white text-md sm:text-lg uppercase font-bold p-2 rounded-lg">
									Buy now for ${info.price}
								</button>
							</div>
							<div className="mt-8">
								<CarouselRotateImage image={info.img} />
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default HeaderCarousel;
