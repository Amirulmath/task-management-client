import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import MyTaskCard from './MyTaskCard';

const MyTask = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/mytasks?email=${user?.email}`;

    const { data: myTasks = [] } = useQuery({
        queryKey: ['myTasks', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <div className='text-center m-4'>
                <h2>My Daily Tasks</h2>
            </div>
            <div className='mt-4'>
                {
                    myTasks.map(myTask => <MyTaskCard
                        key={myTask._id}
                        myTask={myTask}
                    ></MyTaskCard>)
                }
            </div>
        </div>
    );
};

export default MyTask;