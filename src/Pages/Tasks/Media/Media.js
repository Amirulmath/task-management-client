import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import MediaCard from './MediaCard';

const Media = () => {
    const { user } = useContext(AuthContext);

    const url = `https://task-management-server-pi.vercel.app/mymedia?email=${user?.email}`;

    const { data: mediaTask = [], isLoading } = useQuery({
        queryKey: ['mediaTask', user?.email],
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
                <h2>My Daily Tasks</h2>
            </div>
            <div className='mt-4'>
                {
                    mediaTask.map(media => <MediaCard
                        key={media._id}
                        media={media}
                    ></MediaCard>)
                }
            </div>
        </div>
    );
};

export default Media;