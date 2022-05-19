import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../hooks/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0jzBA6HnPsVcydHRnAz4pxjt6bCFV1KgT99ycS2m1Q1mPHNtW15eFFCNQYXwodvUZ6FVLp8mOTAVk5M4ihlCoM00s97ZHAb3');

const Payment = () => {

    const { id } = useParams()
    const url = `https://blooming-crag-68873.herokuapp.com/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const { treatMent, date, price, slot, patient } = appointment;

    return (
        <div className=' mx-5'>
            <div class="card w-50 max-w-lg bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-green-600 font-bold'>Hello, {patient}</p>
                    <h2 class="card-title text-gray-700 ">PLease Pay for <span className='text-amber-700'>{treatMent}</span></h2>
                    <p>Your Appointment <span className='text-orange-700'>{date}</span> at <span className='text-orange-700'>{slot}</span></p>
                    <p>Please pay: $<span className='text-lime-700 font-bold'>{price}</span></p>
                </div>
            </div>
            <div class="card w-50 max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} ></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;