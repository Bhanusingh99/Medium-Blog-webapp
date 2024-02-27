import Link from 'next/link';
import React from 'react';
import { DropDownMenu } from '../DropDown';

const Navbar = () => {
  return (
    <div className='fixed justify-around top-0 w-full bg-gray-800 h-32 z-10 px-4'>
      <div className='flex items-center justify-between navbar'>
        <Link href={'/'}>
            <h1 className='text-4 font-semibold text-white'>Medium</h1>
        </Link>

        <div className='flex sm:hidden'>
        <Link href={'/'}>
            <p className='text-white navbarItems text-[.8rem]'>Home</p>
        </Link>

        <Link href={'/blogs'}>
            <p className=' text-white navbarItems text-[.8rem]'>Blogs</p>
        </Link>

        <Link href={'/Contact-up'}>
            <p className='text-[1.75rem] text-white navbarItems'>Contact-us</p>
        </Link>
        </div>

        <div className='flex items-center'>
        <DropDownMenu/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
