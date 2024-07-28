import React from 'react';
import Practice from '../pages/Practice';
import './Home.css'; // Import the CSS file for custom styles

const Home = () => {
  return (
    <div className='py-20'>
      <div className='relative mt-10 mb-0'>
        <video src="./Ancient.mp4" autoPlay loop muted className='w-full h-30' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-4xl font-extrabold animate-title'>IWACU KERA</h1>
          <p className='text-xl mt-2 animate-subtitle'>Dusigasire Umuco Nyawanda Twiga amateka y'uRwanda rwo hambere</p>
        </div>
      </div>
      <Practice />
    </div>
  );
};

export default Home;
