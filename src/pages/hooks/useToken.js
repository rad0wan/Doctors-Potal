import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = user => {

    const [token, setToken] = useState()

    useEffect(() => {
        console.log('inside the token', user);
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            axios.put(`http://localhost:5000/user/${email}`, currentUser)
                .then(res => {
                    const accessToken = res.data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                    console.log(res.data)
                })
        }
    }, [user])

    return [token]
};

export default useToken;