import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import CompletedTaskCard from './CompletedTaskCard';

const CompletedTask = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/mytasks?email=${user?.email}`;

    const { data: myTasks = [], isLoading } = useQuery({
        queryKey: ['myTasks', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center m-4'>
                <h2>Completed Tasks</h2>
            </div>
            <div className='mt-4'>
                {
                    myTasks.map(myTask => <CompletedTaskCard
                        key={myTask._id}
                        myTask={myTask}
                    ></CompletedTaskCard>)
                }
            </div>
        </div>
    );
};

export default CompletedTask;