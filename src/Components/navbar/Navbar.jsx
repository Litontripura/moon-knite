import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ActiveLink from '../Router/ActiveLink/ActiveLink';

const Navbar = () => {
    const [open, setOpen]=useState(false)
    const toggoleMenu = ()=>{
        setOpen(!open)
    }
    return (
        <nav className='px-5'>
            <div className='flex items-center justify-between h-16'>
                <div>
                <svg className='text-orange-600' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M168.5 72L256 165l87.5-93h-175zM383.9 99.1L311.5 176h129L383.9 99.1zm50 124.9H256 78.1L256 420.3 433.9 224zM71.5 176h129L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z"/></svg>
                </div>
                
                {/* <div className=''>
                    <span
                    className=''
                    onClick={toggoleMenu}
                    >
                        
                        {
                            open ? <FontAwesomeIcon icon="fa-solid fa-bars" />:<FontAwesomeIcon icon="fa-solid fa-x" />
                        }
                    </span>
                </div> */}

              <div className='md:flex gap-3'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/alljewelary'>All jewelry</ActiveLink>
                <ActiveLink to='/myjewelary'>My Jewelry</ActiveLink>
                <ActiveLink to='/addjewelary'>Add jewelry</ActiveLink>
                <ActiveLink to='/blogs'>Blogs</ActiveLink>
                <ActiveLink to="/login">Login</ActiveLink>
              </div>
            </div>
        </nav>
    );
};

export default Navbar;