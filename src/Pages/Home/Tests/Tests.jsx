import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Tests.css'
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Tests = () => {
    return (
        <div className='space-y-10'>
            <section className='text-center space-y-5'>
                <h4 className='italic text-xl font-medium text-gray-500'>Cleaning Plans That Meets Your Needs</h4>
                <h1 className='text-5xl font-bold font-[inter]'>Experienced in multiple medical
                    <h1 className='text-indigo-700 mt-2 '>Tests</h1></h1>
            </section>
            <section>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // Small devices (phones)
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        // Medium devices (tablets)
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        // Large devices (desktops)
                        1200: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide className='min-h-[70vh]'>
                        <div class="card">
                            <img src="https://html.tonatheme.com/2023/Medica/images/gallery/project-img-eight.png" />
                            <div class="info">
                                <p className='italic text-white font-semibold text-xl text-left'>Dentealcare</p>
                                <h1 className='text-4xl font-bold text-teal-500  italic text-left'>X-ray Testing</h1>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='min-h-[70vh]'>
                        <div class="card">
                            <img src="https://html.tonatheme.com/2023/Medica/images/gallery/project-img-five.png" />
                            <div class="info">
                                <p className='italic text-white font-semibold text-xl text-left'>Medical</p>
                                <h1 className='text-4xl font-bold text-teal-500   text-left italic'>Lab Testing</h1>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='min-h-[70vh]'>
                        <div class="card">
                            <img src="https://html.tonatheme.com/2023/Medica/images/gallery/project-img-six.png" />
                            <div class="info">
                                <p className='italic text-white font-semibold text-xl text-left'>Cardiologist</p>
                                <h1 className='text-4xl font-bold text-teal-500 text-left'>Pathology Testing</h1>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='min-h-[70vh]'>
                        <div class="card">
                            <img src="https://html.tonatheme.com/2023/Medica/images/gallery/project-img-seven.png" />
                            <div class="info">
                                <p className='italic text-white font-semibold text-xl text-left'>Urine Infection</p>
                                <h1 className='text-4xl font-bold text-teal-500 text-left'>ECG Testing</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </section>
        </div>
    );
};

export default Tests;