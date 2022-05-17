import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../hooks/Loading';
import useToken from '../hooks/useToken';

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || gUser)
    const navigate = useNavigate()

    let signInErrorMessage;

    if (token) {
        navigate('/appointment')
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || uError) {
        signInErrorMessage = <p className='text-red-600'>{error?.message || gError?.message}</p>
    }

    const onSubmit = async data => {
        console.log(data)
        const displayName = data.name;
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName })
        // navigate('/appointment')
    };


    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body  text-center">
                    <h1 className='text-xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        {/* Password felid */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
                                        message: 'Provide Valid password'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='text-red-600 label-text-alt'>{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600 label-text-alt'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs' type="submit" value="Sign Up" />
                        {signInErrorMessage}
                    </form>
                    <p className='text-xs'>Already have an account?<Link className='text-secondary' to='/login'> Please login</Link></p>
                    {/* google signIn */}
                    <div className='divider'>OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;