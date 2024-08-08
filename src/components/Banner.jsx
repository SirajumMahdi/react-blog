import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavBtns } from './SwiperNavBtns';
import slider_img_1 from '../assets/images/slider-bg-1.jpg';
import slider_img_2 from '../assets/images/slider-bg-2.jpg';
import slider_img_3 from '../assets/images/slider-bg-3.jpg';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Banner() {
    return (
        <>
            <section className="w-full m-auto">
                <div className="container mt-8 px-3 m-auto">
                    <Swiper autoplay={{ delay: 3000 }} loop={true} pagination={true} modules={[Autoplay, Navigation, Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <div className="slider-box rounded-xl" style={{ backgroundImage: `url(${slider_img_1})` }}>
                                <div className="slider-overlay rounded-xl z-0"></div>
                                <div className="slider-content h-full text-white flex flex-col justify-center p-12 relative z-20">
                                    <div className="tag-box relative mx-auto pb-6">
                                        <span className="tag inline-block px-5 py-2 mr-4 bg-green-600 rounded-full text-sm">AI</span>
                                        <span className="tag inline-block px-5 py-2 mr-4 bg-green-600 rounded-full text-sm">Industry 4.0</span>
                                        <span className="tag inline-block px-5 py-2 bg-green-600 rounded-full text-sm">ML</span>
                                    </div>
                                    <div className="slider-ttile mx-auto">
                                        <h2 className="text-4xl font-bold">How Machine Learning is Revolutionizing Industries</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-box rounded-xl" style={{ backgroundImage: `url(${slider_img_2})` }}>
                                <div className="slider-overlay rounded-xl z-0"></div>
                                <div className="slider-content h-full text-white flex flex-col justify-center p-12 relative z-20">
                                    <div className="tag-box relative mx-auto pb-6">
                                        <span className="tag inline-block px-5 py-2 mr-4 bg-green-600 rounded-full text-sm">Cybersecurity</span>
                                        <span className="tag inline-block px-5 py-2 mr-4 bg-green-600 rounded-full text-sm">Privacy</span>
                                        <span className="tag inline-block px-5 py-2 bg-green-600 rounded-full text-sm">Data</span>
                                    </div>
                                    <div className="slider-ttile mx-auto">
                                        <h2 className="text-4xl font-bold">10 Essential Tips for Securing Your Online Presence</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-box rounded-xl" style={{ backgroundImage: `url(${slider_img_3})` }}>
                                <div className="slider-overlay rounded-xl z-0"></div>
                                <div className="slider-content h-full text-white flex flex-col justify-center p-12 relative z-20">
                                    <div className="tag-box relative mx-auto pb-6">
                                        <span className="tag inline-block px-5 py-2 mr-4 bg-green-600 rounded-full text-sm">Quantum</span>
                                        <span className="tag inline-block px-5 py-2 mr-4 bg-green-600 rounded-full text-sm">Tech Trends</span>
                                        <span className="tag inline-block px-5 py-2 bg-green-600 rounded-full text-sm"> Computing</span>
                                    </div>
                                    <div className="slider-ttile mx-auto">
                                        <h2 className="text-4xl font-bold">The Rise of Quantum Computing</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperNavBtns />
                    </Swiper>
                </div>
            </section >
        </>
    );
}

export default Banner
