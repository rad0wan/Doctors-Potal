import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transitionId, setTransitionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const { _id, price, patientEmail, patient } = appointment

    useEffect(() => {
        axios.post('https://blooming-crag-68873.herokuapp.com/create-payment-intent', { price: price }, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            console.log(res.data);
            const dataClientSecret = res?.data?.clientSecret;
            if (dataClientSecret) {
                setClientSecret(dataClientSecret)
            }
        })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        // confirm card payment
        setCardSuccess('')
        setProcessing(true)
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            `${clientSecret}`,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: patientEmail
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
        } else {
            setCardError('')
            setTransitionId(paymentIntent.id)
            console.log(paymentIntent);
            setCardSuccess('Congrats,Your payment is compiled')

            // store payment to database
            const payment = {
                appointment: _id,
                transitionId: paymentIntent.id
            }
            axios.patch(`https://blooming-crag-68873.herokuapp.com/booking/${_id}`, payment, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    setProcessing(false)
                    console.log(res.data);
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                cardSuccess && <div>
                    <p className='text-green-600'>{cardSuccess}</p>
                    <p className='text-lime-600'>Your transition id: <span className='text-orange-600'>{transitionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;