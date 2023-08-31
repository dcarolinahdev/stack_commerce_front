import Display from './Display';
import logo from '/assets/logo.ico';
import { useState, useEffect } from "react";
// import axios from 'axios';
// import apiUrl from '../apiUrl.js';
// simport header from '../header.js';

export default function Navbar() {

  const [options, setOptions] = useState([]);

  // let user = JSON.parse(localStorage.getItem("user"));
  useEffect(
      () => {
        setOptions([
            { to: '/', title: "Home" },
            { to: '/register', title: "Register" },
            { to: '/login', title: "Login" },
        ])
      }, [])

  const [show, setShow] = useState(false)
    return (
        <>
            {show && <Display options={options} show={show} setShow={setShow} />}
            <nav className="flex items-center justify-between w-full h-14 px-4 bg-t_background text-t_secondary">
                <svg onClick={() => setShow(!show)}
                    className="cursor-pointer w-8 h-8 p-1.5 text-t_main"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className='flex items-center gap-2'>
                    <span className='hidden md:block'>login</span>
                    <span className='hidden md:block'>register</span>
                    <img className="w-10 h-10" src={logo} alt='logo'></img>
                </div>
            </nav>
        </>
    )
}
