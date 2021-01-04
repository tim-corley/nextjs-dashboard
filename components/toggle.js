import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Toggle({ switchTheme, theme }) {
  return (
    <div className='flex items-center justify-end w-full mb-4 pt-4'>
      <label
        htmlFor='toogleA'
        className='flex items-center mr-8 cursor-pointer'
      >
        <div className='relative'>
          <input
            onClick={switchTheme}
            id='toogleA'
            type='checkbox'
            className='hidden'
          />
          <div className='toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
          <div className='toggle__dot absolute w-6 h-6 p-1 bg-dark-primary dark:bg-green-200 rounded-full shadow inset-y-0 left-0'>
            {theme === 'light' || !theme ? (
              <span className='toggle__icon text-gray-200'>
                <FontAwesomeIcon icon={faMoon} />
              </span>
            ) : (
              <span className='toggle__icon'>
                <FontAwesomeIcon icon={faSun} />
              </span>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}
