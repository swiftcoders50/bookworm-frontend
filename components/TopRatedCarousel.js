// samiha

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopRatedCarousel = () => {

  // Next carousel button
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          right: "3%",
          borderRadius: "100%",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }
  // Previous carousel button
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          left: "3%",
          borderRadius: "100%",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

	return (
		<Slider {...settings}>
			<div>
				<div className='grid grid-cols-1 md:grid-cols-2 my-8 md:mx-12 px-12 gap-x-9'>
					<div className='flex justify-center items-center'>
						<div>
							<p className='text-5xl leading-tight font-bold hidden md:inline-block'>
								{' '}
								Design Theory:{' '}
							</p>
							<p className='text-2xl sm:text-5xl leading-tight text-red-600 font-semibold'>
								The Psychology of{' '}
							</p>
							<p className='text-2xl sm:text-5xl leading-tight text-red-600 font-semibold'>
								Graphic Design Pricing{' '}
							</p>
							<p className='leading-loose my-6 text-lg sm:text-xl font-semibold'>
								A BOOK BY MICHAEL JANDA
							</p>
							<p className='my-6 text-xl md:inline-block hidden'>
								After 15 years running my own studio, completing thousands of
								projects for high profile clients . Now, I am sharing my
								golden strategies for pricing creative work.
							</p>
							<button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded'>
								Button
							</button>{' '}
							&nbsp; &nbsp; &nbsp;
							<button className='bg-transparent hover:bg-red-700 text-red-600 font-bold hover:text-white py-2 px-9 border border-red-600 hover:border-transparent rounded'>
								Button
							</button>
						</div>
					</div>
					<div className='flex justify-center items-center my-8 md:my-0'>
						<Image
							src='/assets/javascript.jpg'
							alt='The Psychology of graphic gesign'
							width={380}
							height={496}
						/>
					</div>
				</div>
			</div>
			<div>
				<div className='grid grid-cols-1 md:grid-cols-2 my-8 md:mx-12 px-12 gap-x-9'>
					<div className='flex justify-center items-center'>
						<div>
							<p className='text-5xl leading-tight font-bold hidden md:inline-block'>
								{' '}
							  Art & Design{' '}
							</p>
							<p className='text-2xl sm:text-5xl leading-tight text-red-600 font-semibold'>
							The World of Abstract Art{' '}
							</p>
							<p className='leading-loose my-6 text-lg sm:text-xl font-semibold'>
								A BOOK BY JOHN DOE
							</p>
							<p className='my-6 text-xl md:inline-block hidden'>
								After 15 years running my own studio, completing thousands of
								projects for high profile clients . Now, I am sharing my
								golden strategies for pricing creative work.
							</p>
							<button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded'>
								Button
							</button>{' '}
							&nbsp; &nbsp; &nbsp;
							<button className='bg-transparent hover:bg-red-700 text-red-600 font-bold hover:text-white py-2 px-9 border border-red-600 hover:border-transparent rounded'>
								Button
							</button>
						</div>
					</div>
					<div className='flex justify-center items-center my-8 md:my-0'>
						<Image
							src='/assets/book-1.png'
							alt='The Psychology of graphic gesign'
							width={380}
							height={496}
						/>
					</div>
				</div>
			</div>
			<div>
				<div className='grid grid-cols-1 md:grid-cols-2 my-8 md:mx-12 px-12 gap-x-9'>
					<div className='flex justify-center items-center'>
						<div>
							<p className='text-5xl leading-tight font-bold hidden md:inline-block'>
								{' '}
								Sprint : {' '}
							</p>
							<p className='text-2xl sm:text-5xl leading-tight text-red-600 font-semibold'>
								Solve, Test in 5 Days{' '}
							</p>
							<p className='leading-loose my-6 text-lg sm:text-xl font-semibold'>
								A BOOK BY PRICILA MANE
							</p>
							<p className='my-6 text-xl md:inline-block hidden'>
								After 15 years running my own studio, completing thousands of
								projects for high profile clients . Now, I am sharing my
								golden strategies for pricing creative work.
							</p>
							<button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded'>
								Button
							</button>{' '}
							&nbsp; &nbsp; &nbsp;
							<button className='bg-transparent hover:bg-red-700 text-red-600 font-bold hover:text-white py-2 px-9 border border-red-600 hover:border-transparent rounded'>
								Button
							</button>
						</div>
					</div>
					<div className='flex justify-center items-center my-8 md:my-0'>
						<Image
							src='/assets/book-2.png'
							alt='The Psychology of graphic gesign'
							width={380}
							height={496}
						/>
					</div>
				</div>
			</div>
		</Slider>
	);
};

export default TopRatedCarousel;

// samiha
