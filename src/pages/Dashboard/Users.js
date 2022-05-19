import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../hooks/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [users, setUsers] = useState([])
    const { data, isLoading, refetch } = useQuery('users', () =>
        fetch('https://blooming-crag-68873.herokuapp.com/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    useEffect(() => {
        setUsers(data)
        console.log(data);
    }, [data])
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1>Users {users?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Remove Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={index}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;