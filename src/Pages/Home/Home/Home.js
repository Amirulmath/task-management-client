import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='my-2'>
            <div><div className='text-center m-2'>
                <h3>Daily Tasks</h3>
            </div></div>
            <div>
                <Banner></Banner>
            </div>
            <div><div className='text-center m-2'>
                <h4>Exercise, Study, Class, Playing, Time Spend with Family</h4>
            </div></div>
        </div>
    );
};

export default Home;