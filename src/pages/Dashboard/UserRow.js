import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {

    const makeAdmin = () => {
        fetch(`https://blooming-crag-68873.herokuapp.com/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('failed to make admin')
            }
            return res.json()
        })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Admin successfully added')
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.role !== 'admin' ?
                <button onClick={makeAdmin} class="btn btn-success text-white btn-sm">Make Admin</button> :
                <span className='text-primary font-bold'>Already Admin</span>}</td>
            <td><button class="btn btn-error text-white btn-sm">Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;