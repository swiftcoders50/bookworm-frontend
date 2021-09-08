import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

// Import css files for react-slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AuthorsCarousel = ({ authors }) => {
  // carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center">
      <Slider {...settings}>
        {authors.map((author) => (
          <Link key={author.id} href="/">
            <a className="mx-2 border-2 border-indigo-400 rounded-full inline-block h-32 w-32 md:h-48 md:w-48 overflow-hidden">
              <Image
                src={author.img}
                alt="author name"
                height={100}
                width={100}
                layout="responsive"
                objectFit="cover"
              />
            </a>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default AuthorsCarousel;
