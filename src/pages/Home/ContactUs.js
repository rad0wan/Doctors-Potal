import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../../share/PrimaryBtn';

const ContactUs = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='py-16 lg:px-0 px-9'>
            <div className='text-center mb-10'>
                <h3 className='text-secondary text-xl font-bold'>Contact Us</h3>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input type="text" placeholder="Email Address" class="input w-full max-w-md" />
                <input type="text" placeholder="Subject" class="input w-full max-w-md" />
                <textarea class="textarea w-full max-w-md mb-4" placeholder="Your message" rows={6}></textarea>
                <PrimaryBtn className=''>Submit</PrimaryBtn>
            </div>
        </section>
    );
};

export default ContactUs;