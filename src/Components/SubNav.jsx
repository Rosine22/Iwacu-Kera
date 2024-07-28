import React from 'react'
import { NavLink } from 'react-router-dom'
const SubNav = () => {
  return (
    <div className='mt-10'>
         <h1 className='float-left ml-40 font-bold capitalize'>IWACU KERA</h1>

        <div className="fixed z-10 flex flex-col items-center justify-center w-full  bg-slate-100  rounded-lg gap-10 py-4 mt-[60px] lg:pr-40 lg:pl-40 lg:flex-row">

     
     <NavLink to={'/history/museum'} exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md font-bold'}>MUSEUM</NavLink>
     <NavLink to={'/history/abami'} exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md font-bold'} >King</NavLink>
     <NavLink to={'/history/imikino'} exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md font-bold'} >Activity</NavLink>
     <NavLink to={'/history/imigani'} exact="true" className={({ isActive }) => isActive ? 'text-white bg-blue-300 px-3 py-2 rounded-md' : 'text-black px-3 py-2 rounded-md font-bold'} >Proverb</NavLink>
   </div>
    </div>
  )
}

export default SubNav