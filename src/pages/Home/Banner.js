import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryBtn from '../../share/PrimaryBtn';

const Banner = () => {
    return (
        <section className='mx-3 lg:mx-5 '>
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='lg:max-w-lg' src={chair} alt='chair' />
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;