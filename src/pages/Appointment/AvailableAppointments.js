import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {

    const [booking, setBooking] = useState([]);
    const [treatMent, setTreatment] = useState(null)

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    return (
        <div>
            <h1 className='text-xl text-secondary text-center pt-4'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 my-10 mx-12'>
                {
                    booking.map(booking => <Booking
                        key={booking._id}
                        booking={booking}
                        setTreatment={setTreatment}
                    ></Booking>)
                }
            </div>
            {
                treatMent && <BookingModal
                    date={date}
                    treatMent={treatMent}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;