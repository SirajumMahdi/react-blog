import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavBtns } from './SwiperNavBtns';
import sliderData from '../data/sliderData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Banner() {
    return (
        <section className="w-full m-auto">
            <div className="container mt-8 px-3 m-auto">
                <Swiper
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper"
                >
                    {sliderData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slider-box rounded-xl" style={{ backgroundImage: `url(${slide.image})` }}>
                                <div className="slider-overlay rounded-xl z-0"></div>
                                <div className="slider-content h-full text-white flex flex-col justify-center p-12 relative z-20">
                                    <div className="tag-box relative mx-auto pb-6">
                                        {slide.tags.map((tag, idx) => (
                                            <span key={idx} className="tag inline-block px-5 py-2 mr-4 mb-4 md:mb-0 bg-green-600 rounded-full text-sm">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="slider-title mx-auto">
                                        <h2 className="text-4xl font-bold">{slide.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <SwiperNavBtns />
                </Swiper>
            </div>
        </section>
    );
}

export default Banner;
