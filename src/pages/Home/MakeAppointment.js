import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryBtn from '../../share/PrimaryBtn';

const MakeAppointment = () => {
    return (
        <section className='mb-20' style={{ background: `url(${appointment})` }}>
            <div class="flex justify-center items-center">
                <img className='flex-1 mt-[-100px]  lg:block hidden' src={doctor} alt='' />
                <div className='flex-1 lg:pr-32 py-5 px-3 text-white'>
                    <h1 class="text-xl font-bold text-secondary py-6">Appointment</h1>
                    <h2 className='font-semibold text-4xl'>Make an appointment Today</h2>
                    <p class="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;