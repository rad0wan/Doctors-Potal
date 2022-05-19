import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../hooks/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('https://blooming-crag-68873.herokuapp.com/service').then(res => res.json()))

    const ApiKey = '2f698655bc0b68ac81ac5d3127edd234'

    const onSubmit = async data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${ApiKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('img', result);
                const img = result.data.url;
                if (result.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to  database
                    axios.post('https://blooming-crag-68873.herokuapp.com/doctor', doctor, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    }).then(res => {
                        console.log(res.data);
                        const inserted = res.data;
                        if (inserted.insertedId) {
                            toast.success('Successfully added')
                            reset();
                        } else {
                            toast.error('Failed to add')
                            reset();
                        }
                    })
                }
            })

    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl'>Add a new Doctor</h1>
                {/* Name Felid */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                            pattern: {
                                value: 3,
                                message: 'Provide Valid Name'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.name.message}</span>}
                    </label>
                </div>
                {/* Email Felid */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide Valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.email.message}</span>}
                    </label>
                </div>
                {/* specialty felid */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        class="select select-bordered w-full max-w-xs"
                        {...register("specialty")}
                    >
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                    <label className="label">
                        {errors.specialty?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.specialty.message}</span>}
                        {errors.specialty?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.specialty.message}</span>}
                    </label>
                </div>
                {/* image field */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.image.message}</span>}
                        {errors.image?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.image.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;