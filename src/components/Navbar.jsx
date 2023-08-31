import React from 'react'

const Navbar = () => {
  return (
    <nav className='absolute top-0 w-full flex justify-between items-center p-4 bg-t_background text-t_main'>

      <div className='flex items-center gap-2'>
        <img
          className='mr-1'
          src="/assets/logo.ico" alt="Logo" />
        <span>
          Home
        </span>
        <span>
          Category
        </span>
      </div>

      <div className='flex items-center gap-2'>
        <span>
          Login
        </span>
        <span>
          Register
        </span>
        <svg
          className="w-6 h-6" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="1.5" stroke="currentColor">
          <path
            strokeLinecap="round" strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </div>

    </nav>
  )
}

export default Navbar