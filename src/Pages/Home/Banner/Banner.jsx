import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-white bg-img'>
            <AwesomeSlider className='aws-btn' animation='openAnimation'>
                <div className='w-full flex flex-col-reverse sm:flex-row gap-10 justify-center items-center'>
                    <section className='sm:w-1/2 h-auto px-10 space-y-5 sm:space-y-8'>
                        <h3 className='text-2xl font-bold italic font-[Caveat]'>Your Health  is our Priorit</h3>
                        <h1 className='text-6xl font-bold  '>More Than <hr /> Medicaine  it's <hr />Personal</h1>
                        <p className='bg-white p-5 shadow-lg text-md font-semibold border-l-4 border-l-indigo-700 rounded-md '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ex eum incidunt unde vero consectetur, sint at dolorem quidem repellendus odit fugiat officiis quia dignissimos perferendis quo, in natus inventore.</p>
                        <button className='btn btn-outline btn-wide'>View More</button>
                    </section>
                    <section className='sm:w-1/2 w-full'>
                        <img className='rounded-md' src="https://html.tonatheme.com/2023/Medica/images/background/slide-three-img-2.png" alt="" />
                    </section>

                </div>
                <div className='w-full flex flex-col-reverse sm:flex-row gap-10 justify-center items-center'>
                    <section className='sm:w-1/2 px-10 space-y-5 sm:space-y-12'>
                        <h3 className='text-2xl font-bold italic'>Your Health  is our Priorit</h3>
                        <h1 className='text-6xl font-bold '>More Than <hr /> Medicaine  it's <hr />Personal</h1>
                        <p className='bg-white p-5 shadow-lg text-md font-semibold border-l-4 border-l-indigo-700 rounded-md '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ex eum incidunt unde vero consectetur, sint at dolorem quidem repellendus odit fugiat officiis quia dignissimos perferendis quo, in natus inventore.</p>
                        <button className='btn btn-outline btn-wide'>View More</button>
                    </section>
                    <section className='sm:w-1/2 w-full'>
                        <img className='rounded-md' src="https://html.tonatheme.com/2023/Medica/images/background/slide-three-img.png" alt="" />
                    </section>

                </div>
                <div className='w-full flex flex-col-reverse sm:flex-row gap-10 justify-center items-center'>
                    <section className='sm:w-1/2 px-10  space-y-5 sm:space-y-12'>
                        <h3 className='text-2xl font-bold italic'>Your Health  is our Priorit</h3>
                        <h1 className='text-6xl font-bold '>More Than <hr /> Medicaine  it's <hr />Personal</h1>
                        <p className='bg-white p-5 shadow-lg text-md font-semibold border-l-4 border-l-indigo-700 rounded-md '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ex eum incidunt unde vero consectetur, sint at dolorem quidem repellendus odit fugiat officiis quia dignissimos perferendis quo, in natus inventore.</p>
                        <button className='btn btn-outline btn-wide'>View More</button>
                    </section>
                    <section className='sm:w-1/2 w-full'>
                        <img className='rounded-md' src="https://html.tonatheme.com/2023/Medica/images/background/slide-three-img-3.png" alt="" />
                    </section>

                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;