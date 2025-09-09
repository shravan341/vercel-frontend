import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const MobileNav = () => {
  const role = useSelector((state) => state.auth.role);
  return (
    <>
    {role === "user" && (
      <div className='w-full flex md:hidden lg:hidden items-start justify-between mt-2'>
      <Link to="/profile" className='text-zinc-100 font-semibold w-full   text-center hover:bg-zinc-900 rounded transition-all'>Favourites</Link>
                 <Link to="/profile/orderHistory" className='text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all'>Order History</Link>
                 <Link to="/profile/settings" className='text-zinc-100 font-semibold w-full   text-center hover:bg-zinc-900 rounded transition-all'>Settings</Link>
 </div>
    )}
    {role === "admin" && (
      <div className='w-full flex md:hidden lg:hidden items-start justify-between mt-2'>
      <Link to="/profile" className='text-zinc-100 font-semibold w-full   text-center hover:bg-zinc-900 rounded transition-all'>All Orders</Link>
                 <Link to="/profile/add-book" className='text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all'>Add Book</Link>
                 {/* <Link to="/profile/settings" className='text-zinc-100 font-semibold w-full   text-center hover:bg-zinc-900 rounded transition-all'>Se</Link> */}
 </div>
    )}
    </>
  )
}

export default MobileNav