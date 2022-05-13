import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatMent, date, setTreatment }) => {

    const { _id, slots, name } = treatMent;

    const handleSubmit = event => {
        event.preventDefault()

        const slot = event.target.slot.value;
        console.log(_id, slot, name);

        // close the modal
        setTreatment(null)
    }

    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-xl text-accent">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center gap-6 mt-12'>
                        <input type="text" disabled value={format(date, 'PP')} class=" input input-bordered input-border w-full max-w-md" />
                        <select name='slot' class="select select-bordered w-full max-w-md">
                            {
                                slots && slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" class=" input input-bordered input-border w-full max-w-md" />
                        <input type="text" placeholder="Phone Number" class=" input input-bordered input-border w-full max-w-md" />
                        <input type="text" placeholder="Email" class=" input input-bordered input-border w-full max-w-md" />
                        <input type="submit" value={"submit"} class="btn btn-accent input-accent w-full max-w-md" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;