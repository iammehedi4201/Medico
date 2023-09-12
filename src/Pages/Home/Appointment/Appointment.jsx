import React from 'react';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className=''>
            <div className='w-full flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-0 '>
                <section className='sm:space-y-6 sm:w-1/2 w-full bg-img-style'>
                    <h4 className='text-2xl  font-semibold italic text-orange-500 'style={{fontFamily:"fantasy",letterSpacing:"0.5em"}}>0  1  7  7  5  7  7  7  0  3  8</h4>
                    <h1 className='text-5xl font-bold font-[inter] relative z-10'> Need an Emergency
                        <h1 className='text-indigo-700 relative z-10 '>Help? Call Us!</h1></h1>
                    <p className='font-medium leading-7 relative z-10'>On the other hand, we denounce with righteous indignation and
                        dislike men who are so beguiled and demoralized by the charms
                        of pleasure of the oment.Lorem ipsum dolor sit amet. conse
                        sadipscing elitr.
                    </p>
                    <button className='btn btn-primary relative z-10'>View More</button>
                </section>
                <section className='sm:w-1/2 w-full'>
                    <div class="appointment-block bg-img-style-2 ">
                        <h3 class="block-heading">Make an Appointment Today</h3>
                        <div class="contact-form">
                            <form id="contact-form">
                                <div class="form-group relative z-10">
                                    <div class="name">
                                        <span class="flaticon-user-1"></span>
                                        <input type="text" name="form_name"  placeholder="Name" required="" />
                                    </div>
                                </div>
                                <div class="form-group relative z-10">
                                    <div class="email-text">
                                        <span class="flaticon-envelope"></span>
                                        <input type="text" name="email"  placeholder="email" required="" />
                                    </div>
                                </div>
                                <div class="form-group relative z-10">
                                    <div class="message-text">
                                        <textarea name="form_message" placeholder="Massage" spellcheck="false"></textarea><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style={{
                                            position: 'absolute',
                                            top: '0px',
                                            left: '0px',
                                            pointerEvents: 'none',
                                            zIndex: 1,
                                        }}></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" class="dnXmp" style={{
                                            position: 'absolute',
                                            top: '0px',
                                            left: '0px',
                                            pointerEvents: 'none',
                                            zIndex: 1,
                                        }}></grammarly-extension>
                                    </div>
                                </div>
                                <div class="form-group relative z-10">
                                    <input id="form_botcheck" name="form_botcheck" class="form-control relative z-10" type="hidden" value="" />
                                    <button className="btn btn-primary text-white">Send Your Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Appointment;