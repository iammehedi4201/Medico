import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Category.css'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

const Category = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='space-y-10 '>
            <section className='text-center space-y-5'>
                <h4 className='italic text-xl font-medium text-gray-500'>Cleaning Plans That Meets Your Needs</h4>
                <h1 className='text-5xl font-bold font-[inter]'>Experienced in multiple medical <hr />
                    <span className='text-indigo-700 '>specialities</span></h1>
                <p className='font-medium text-center sm:px-40'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the oment.Lorem ipsum dolor sit amet, conse sadipscing elitr.</p>
            </section>
            <section className='sm:px-48 '>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, EffectFade, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide className=''>
                        <div class="flex flex-col justify-center min-h-[40vh] ">
                            <div
                                class="relative  flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl shadow-orange-400 p-3 max-w-xs md:max-w-3xl mx-auto border border-white ">
                                <div class="w-28 h-28 bg-[#edf1fa] grid place-items-center p-5 rounded-md">
                                    <img className='flex items-center' src="https://html.tonatheme.com/2023/Medica/images/gallery/stomach-img.png" alt="tailwind logo" class="rounded-xl" />
                                </div>
                                <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 ">
                                    <h3 class="font-black text-gray-800 md:text-3xl text-xl text-start">Gastroenterology</h3>
                                    <p class="md:text-lg text-gray-500 text-base text-start">The best kept secret of The Bahamas is the country’s sheer
                                        size and diversity. With 16 major islands, The Bahamas is an unmatched destination
                                    </p>
                                    <div>
                                        <button className='btn btn-outline flex justify-start'>Read More </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="flex flex-col justify-center min-h-[40vh] ">
                            <div
                                class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl shadow-orange-400 p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                                <div class="w-28 h-28 bg-[#edf1fa] grid place-items-center p-5 rounded-md">
                                    <img className='flex items-center' src="https://html.tonatheme.com/2023/Medica/images/gallery/heart-img.png" alt="tailwind logo" class="rounded-xl" />
                                </div>
                                <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 ">
                                    <h3 class="font-black text-gray-800 md:text-3xl text-xl text-start">Cardiology</h3>
                                    <p class="md:text-lg text-gray-500 text-base text-start">The best kept secret of The Bahamas is the country’s sheer
                                        size and diversity. With 16 major islands, The Bahamas is an unmatched destination
                                    </p>
                                    <div>
                                        <button className='btn btn-outline flex justify-start'>Read More </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="flex flex-col justify-center min-h-[40vh] ">
                            <div
                                class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-xl shadow-orange-400 p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                                <div class="w-28 h-28 bg-[#edf1fa] grid place-items-center p-5 rounded-md">
                                    <img className='flex items-center' src="https://html.tonatheme.com/2023/Medica/images/gallery/fracture-img.png" alt="tailwind logo" class="rounded-xl" />
                                </div>
                                <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 ">
                                    <h3 class="font-black text-gray-800 md:text-3xl text-xl text-start">Orthopedics</h3>
                                    <p class="md:text-lg text-gray-500 text-base text-start">The best kept secret of The Bahamas is the country’s sheer
                                        size and diversity. With 16 major islands, The Bahamas is an unmatched destination
                                    </p>
                                    <div>
                                        <button className='btn btn-outline flex justify-start'>Read More </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>




                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </section>
        </div>
    );
};

export default Category;