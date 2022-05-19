import { useEffect, useState } from 'react';

const useAdmin = user => {

    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://blooming-crag-68873.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.admin);
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }
        console.log(email, admin);
    }, [user, admin])

    return [admin, adminLoading]
};

export default useAdmin;