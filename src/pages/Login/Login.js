import React from 'react';

const Login = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h1 className='text-xl font-bold'>Login</h1>

                    <div className='divider'></div>
                    <button className='btn btn-wide btn-outline'>Continue With Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;