import Link from 'next/link';
import React from 'react';
// import { DropDownMenu } from '../DropDown';

const Navbar = () => {
  return (
    <div className='fixed justify-around top-0 w-full bg-gray-800  z-10 px-4'>
      <div className='flex items-center justify-between navbar'>
        <Link href={'/'}>
            <h1 className='text-4 font-semibold text-white'>Medium</h1>
        </Link>

        <div className='flex max-sm'>
        <Link href={'/create-blog'}>
            <p className='text-white navbarItems text-[.8rem]'>Create-Blog</p>
        </Link>

        <Link href={'/blogs'}>
            <p className=' text-white navbarItems text-[.8rem]'>Blogs</p>
        </Link>

        <Link href={'/Contact-up'}>
            <p className='text-[1.75rem] text-white navbarItems'>Contact-us</p>
        </Link>
        </div>

        <div className='flex items-center'>
          <Link href={'/profile'}>
              <p className='text-[1.75rem] text-white navbarItems'>Profile</p>
          </Link>

          <Link href={'/log-out'}>
              <p className='text-[1.75rem] text-white navbarItems'>Log-out</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
