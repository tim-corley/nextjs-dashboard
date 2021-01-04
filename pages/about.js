import React from 'react';

const About = () => {
  return (
    <div className='mt-8 max-w-xl mx-auto px-8'>
      <h1 className='text-center'>
        <span className='block text-5xl text-gray-900 dark:text-green-200 font-bold leading-none'>
          About
        </span>
      </h1>
      <div className='mt-12 text-center text-gray-900 dark:text-gray-200'>
        <p>
          This is a frontend web development project that leverages the NextJS
          platform. The site's primary purpose is to fetch & display some data
          from 3rd party APIs. Have a look around & enjoy!
        </p>
      </div>
    </div>
  );
};

export default About;
