import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import food from '../../Assets/Unknown.jpeg'
import achatz from '../../Assets/Grant_Achatz.jpeg'


interface CarouselProps {
    img1: string;
    text1: string;
    img2: string;
    text2: string;
    img3: string;
    text3: string;
    img4: string;
    text4: string;
    img5: string;
    text5: string;
    img6: string;
    text6: string;
}








const HomeCarousel: React.FC<CarouselProps> = ({img1, img2, img3, img4, img5, img6, text1, text2, text3, text4, text5, text6}) => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper header"
            >
                <SwiperSlide>
                    <div className="mt-4 mb-6">
                        <h1 className="text-5xl font-semibold font-lobster text-center mb-10">Recipes</h1>
                        <div className="flex justify-center gap-8 md:gap-20 xl:gap-40">
                            <div>
                                <img src={img1} className="carouselHeader object-cover rounded-lg"/>
                                <p className="w-64 mt-2">{text1}</p>
                            </div>
                            <div className="hidden lg:block">
                                <img src={img2} className="carouselHeader object-cover rounded-lg"/>
                                <p className="w-64 mt-2">{text2}</p>
                            </div>
                            <div className="hidden sm:block">
                                <img src={img3} className="carouselHeader object-cover rounded-lg"/>
                                <p className="w-64 mt-2">{text3}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className="mt-4 mb-6">
                        <h1 className="text-5xl font-semibold font-lobster text-center mb-10">News</h1>
                        <div className="flex justify-center gap-8 md:gap-20 xl:gap-40">
                            <div>
                                <img src={img4} className="carouselHeader object-cover rounded-lg"/>
                                <p className="w-64 mt-2">{text4}</p>
                            </div>
                            <div className="hidden lg:block">
                                <img src={img5} className="carouselHeader object-cover rounded-lg"/>
                                <p className="w-64 mt-2">{text5}</p>
                            </div>
                            <div className="hidden sm:block">
                                <img src={img6} className="carouselHeader object-cover rounded-lg"/>
                                <p className="w-64 mt-2">{text6}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default HomeCarousel;