import Link from 'next/link';

const Index = () => (
  <div className='mt-8 max-w-xl mx-auto px-8'>
    <h1 className='text-center'>
      <span className='block text-xl text-gray-500 dark:text-green-200 leading-tight'>
        Welcome!
      </span>
      <span className='block text-5xl text-gray-900 dark:text-green-200 font-bold leading-none'>
        My Dashboard
      </span>
    </h1>
    <div className='mt-12 text-center'>
      <Link href='/about'>
        <a className='uppercase inline-block nav-btn'>Learn More</a>
      </Link>
    </div>
  </div>
);

export default Index;
