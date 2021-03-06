import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../hooks/Loading';
import useToken from '../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, fError] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || gUser)
    const emailRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    let signInErrorMessage;

    if (token) {
        console.log(gUser, user);
        navigate(from, { replace: true });
    }

    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    if (error || gError || fError) {
        signInErrorMessage = <p className='text-red-600'>{error?.message || gError?.message || fError?.message}</p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    const forgetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email);
        await sendPasswordResetEmail(email);
        // alert('Sent email');
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body  text-center">
                    <h1 className='text-xl font-bold'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Felid */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                ref={emailRef}
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
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                        {signInErrorMessage}
                    </form>
                    {/* forget password */}
                    <button onClick={forgetPassword} className='text-xs'>Forget password</button >
                    {/* create new account */}
                    <p className='text-xs'>New to Doctors Portal?<Link className='text-secondary' to='/signup'> Create new account</Link></p>
                    {/* google signIn */}
                    <div className='divider'>OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;