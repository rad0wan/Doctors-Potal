import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const axios = require('axios').default;

const BookingModal = ({ treatMent, date, setTreatment, refetch }) => {

    const [user, loading, error] = useAuthState(auth);

    const { _id, slots, name } = treatMent;
    const formateDate = format(date, 'PP')

    const handleSubmit = event => {
        event.preventDefault()

        const slot = event.target.slot.value;
        const booking = {
            treatMentId: _id,
            treatMent: name,
            date: formateDate,
            slot,
            patient: user.displayName,
            patientEmail: user.email,
            phone: event.target.phone.value
        }
        console.log(booking);

        axios.post('http://localhost:5000/booking', booking)
            .then(response => {
                console.log(response.data, response.data.success);
                const data = response.data;
                if (data.success) {
                    toast(`Appointment is set, ${formateDate} at ${slot}`)
                } else {
                    toast.error(`Already have an Appointment on, ${data.booking?.date} at ${data.booking?.slot}`)
                }
                // close the modal
                setTreatment(null)
                refetch()
            })

    }

    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-accent">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center gap-6 mt-12'>
                        <input type="text" disabled value={format(date, 'PP')} className=" input input-bordered input-border w-full max-w-md" />
                        <select name='slot' className="select select-bordered w-full max-w-md">
                            {
                                slots && slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled value={user.displayName} className=" input input-bordered input-border w-full max-w-md" />
                        <input type="text" disabled value={user.email} className=" input input-bordered input-border w-full max-w-md" />
                        <input type="text" name='phone' placeholder="Phone Number" className=" input input-bordered input-border w-full max-w-md" />
                        <input type="submit" value={"submit"} className="btn btn-accent input-accent w-full max-w-md" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;