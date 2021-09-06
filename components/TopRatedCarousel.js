// samiha 

import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TopRatedCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true
    };


    return (
        <Slider {...settings}>
            <div>
                <div className="grid grid-cols-2 my-8 mx-12 px-12 gap-x-9">
                    <div className="flex justify-center items-center">
                        <div>
                            <p className="text-5xl leading-tight font-bold"> Design Theory: </p>
                            <p className="text-5xl leading-tight text-red-600 font-semibold">The Psychology of </p>
                            <p className="text-5xl leading-tight text-red-600 font-semibold">Graphic Design Pricing </p>
                            <p className="leading-loose my-6 text-xl font-semibold">A BOOK BY MICHAEL JANDA</p>
                            <p className="my-6 text-xl">After 15 years running my own studio, completing thousands of projects for high profile clients . Now, I am sharing my golden strategies for pricing creative work.</p>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded">
                                Button
                            </button> &nbsp; &nbsp; &nbsp;
                            <button className="bg-transparent hover:bg-red-700 text-red-600 font-bold hover:text-white py-2 px-9 border border-red-600 hover:border-transparent rounded">
                                Button
                            </button>
                        </div>
                    </div>
                    <Image className="max-h-2"
                        src='/assets/book-1.png'
                        alt='The Psychology of graphic gesign'
                        width={480}
                        height={596}
                    />
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 my-8 mx-12 px-12 gap-x-9">
                    <div className="flex justify-center items-center">
                        <div>
                            <p className="text-5xl leading-tight font-bold"> Design Theory: </p>
                            <p className="text-5xl leading-tight text-red-600 font-semibold">The Psychology of </p>
                            <p className="text-5xl leading-tight text-red-600 font-semibold">Graphic Design Pricing </p>
                            <p className="leading-loose my-6 text-xl font-semibold">A BOOK BY MICHAEL JANDA</p>
                            <p className="my-6 text-xl">After 15 years running my own studio, completing thousands of projects for high profile clients . Now, I am sharing my golden strategies for pricing creative work.</p>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded">
                                Button
                            </button> &nbsp; &nbsp; &nbsp;
                            <button className="bg-transparent hover:bg-red-700 text-red-600 font-bold hover:text-white py-2 px-9 border border-red-600 hover:border-transparent rounded">
                                Button
                            </button>
                        </div>
                    </div>
                    <Image className="max-h-2"
                        src='/assets/book-1.png'
                        alt='The Psychology of graphic gesign'
                        width={480}
                        height={596}
                    />
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 my-8 mx-12 px-12 gap-x-9">
                    <div className="flex justify-center items-center">
                        <div>
                            <p className="text-5xl leading-tight font-bold"> Design Theory: </p>
                            <p className="text-5xl leading-tight text-red-600 font-semibold">The Psychology of </p>
                            <p className="text-5xl leading-tight text-red-600 font-semibold">Graphic Design Pricing </p>
                            <p className="leading-loose my-6 text-xl font-semibold">A BOOK BY MICHAEL JANDA</p>
                            <p className="my-6 text-xl">After 15 years running my own studio, completing thousands of projects for high profile clients . Now, I am sharing my golden strategies for pricing creative work.</p>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded">
                                Button
                            </button> &nbsp; &nbsp; &nbsp;
                            <button className="bg-transparent hover:bg-red-700 text-red-600 font-bold hover:text-white py-2 px-9 border border-red-600 hover:border-transparent rounded">
                                Button
                            </button>
                        </div>
                    </div>
                    <Image className="max-h-2"
                        src='/assets/book-1.png'
                        alt='The Psychology of graphic gesign'
                        width={480}
                        height={596}
                    />
                </div>
            </div>
        </Slider>
    );
};

export default TopRatedCarousel;

// samiha