import React from 'react'

import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar';
const LayoutAdmin = () => {
  return (
    <>
       <div className="flex">
      <SideBar />
      <div className="bg-gray-100 ml-40 w-full"
     >
        
        <Outlet />
      </div>
    </div>
    </>
  );
}


export default  LayoutAdmin
