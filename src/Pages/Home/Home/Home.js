import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='my-4'>
            <div><div className='text-center m-4'>
                <h3>Daily Tasks</h3>
            </div></div>
            <div>
                <Banner></Banner>
            </div>
            <div><div className='text-center m-4'>
                <h4>Exercise, Study, Playing, Time Spend with Family</h4>
            </div></div>
        </div>
    );
};

export default Home;