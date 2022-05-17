import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../hooks/Loading';

const MyAppointments = () => {
    const [user, loading, error] = useAuthState(auth);
    const [appointments, setAppointments] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        if (loading) {
            return <Loading></Loading>
        }
        // axios.get(`http://localhost:5000/booking?email=${user.email}`, {
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //     }
        // })
        //     .then(response => {
        //         console.log(response);
        //         console.log(response.status);
        //         if (response.status === 401 || response.status === 403) {
        //             signOut(auth)
        //             localStorage.removeItem('accessToken')
        //             navigate('/')
        //         }
        //         setAppointments(response.data)
        //     })
        fetch(`http://localhost:5000/booking?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                setAppointments(data);
            });
    }, [user])

    return (
        <div>
            <h1 className='text-2xl mb-4'>My Appointments: {appointments?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>SERVICE</th>
                            <th>TIME</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            appointments?.map((appointment, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{appointment.patient}</td>
                                <td>{appointment.treatMent}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;