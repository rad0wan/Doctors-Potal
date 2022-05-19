import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, email, img } = doctor;

    const handleDelete = email => {
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
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>
                <div class="avatar">
                    <div class="w-16 mask mask-squircle">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </th>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;