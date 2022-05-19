import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;

    const handleDelete = () => {
        axios.delete(`https://blooming-crag-68873.herokuapp.com/doctor/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    toast.success('Successfully delete')
                    setDeletingDoctor(null)
                }
            })
    }

    return (
        <div>
            {/* <!-- The button to open modal --> */}
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want delete doctor {name}!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;