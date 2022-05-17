import React from 'react';
import PrimaryBtn from '../../share/PrimaryBtn';
import Service from '../Home/Service';

const Booking = ({ booking, setTreatment }) => {

    const { slots, name } = booking;

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary text-xl">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className=' text-red-600 text-xm'>Try Another Day</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE </p>
                    <div className="card-actions mt-3">
                        {/* <button onClick={() => setTreatment(booking)} disabled={slots.length === 0} className='btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase'>Book Appointment</button> */}
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white uppercase"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(booking)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;