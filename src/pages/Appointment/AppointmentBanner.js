import React from 'react';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse gap-32">
                    <img src={chair} class="lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div className='card shadow-lg'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;