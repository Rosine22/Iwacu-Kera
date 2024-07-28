import React from 'react'
import NavBar from '../Components/Navbar';
import Footer from './Footer';

import { Outlet } from 'react-router-dom'
const AllPages = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}


export default AllPages
