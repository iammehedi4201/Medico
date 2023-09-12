import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Choose.css'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectFade } from 'swiper/modules';

const ChooseUs = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='w-full flex flex-col-reverse sm:flex-row justify-center items-center gap-10 p-5'>
            <section className='sm:w-1/2 sm:space-y-8 space-y-5'>
                <div className="hidden lg:block section-heading parallax-scene parallax-scene-2 parallax-icon">
                    <span data-depth="0.40" className="parallax-layer icon icon-1">
                        Medica
                    </span>
                </div>
                <div className='image-box'>
                    <img src="https://html.tonatheme.com/2023/Medica/images/resource/lowodspeker-img-.png" alt="" />
                </div>
                <h1 className='text-7xl font-bold text-[#0e3672]'>Why choose</h1>
                <h2 className='text-6xl font-bold text-indigo-700'>Madica?</h2>
                <p className='font-semibold text-md leading-7 bg-white shadow-lg p-5 rounded-md border-l-4 border-indigo-700'>On the other hand, we denounce with righteous indignation and
                    dislike men who are so beguiled and demoralized by the charms
                    of pleasure of the oment.Lorem ipsum dolor sit amet, conse
                    sadipscing elitr.
                </p>
                <button className='btn btn-outline btn-wide'>View More</button>
            </section>
            <section className='sm:w-1/2 w-full my-auto'>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFade]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://html.tonatheme.com/2023/Medica/images/resource/pasent-text-img.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://html.tonatheme.com/2023/Medica/images/resource/bannar-choose-img.png" alt="" />
                    </SwiperSlide><SwiperSlide>
                        <img src="https://html.tonatheme.com/2023/Medica/images/resource/pasent-img.png" alt="" />
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

export default ChooseUs;