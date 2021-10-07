import { useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

// Import css files for react-slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UnreleasedBookCarousel = ({ unreleasedBooks }) => {
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

  // carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="text-center">
      <Slider {...settings}>
        {unreleasedBooks.map((book) => (
          <div key={book._id} className="mx-2 inline-block">
            <img
              data-aos="fade-up"
              className="h-60 w-48 object-cover"
              src={book.bookImg}
              alt={book.bookName}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UnreleasedBookCarousel;
