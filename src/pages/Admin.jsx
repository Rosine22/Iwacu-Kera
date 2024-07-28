import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaCalendarAlt, FaPhotoVideo, FaEdit, FaTrash } from 'react-icons/fa';


const Dashboard = () => 
    <div>
    <div className='flex gap-8 h-72 w-full'>
    <div className='bg-blue-400 h-40 w-60 shadow-lg rounded-lg flex justify-center '>
      <h1 className='font-medium text-white mt-4'>IMIGANI</h1>
    </div>
    <div className='bg-cyan-200 h-40 w-60 shadow-lg rounded-lg flex justify-center '>
      <h1 className='font-medium text-gray-900 mt-4'>EVENTS</h1>
    </div>
    <div className='bg-red-900 h-40 w-60 shadow-lg rounded-lg flex justify-center '>
      <h1 className='font-medium text-white mt-4'>MEDIA</h1>
    </div>
  </div>
  </div>
  
;
const Imigani = () => <div>
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24  sm:pr-12 sm:pl-12 md:pr-24 md:pl-24  '>
                    <div className="container mx-auto">
                    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-500 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 text-blue-400 p-2">Title</th>
            <th className="border border-gray-500 p-2 text-blue-400">Content</th>
            <th className="border border-gray-500 p-2 text-blue-400">Origin</th>
            <th className="border border-gray-500 p-2 text-blue-400">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black p-2">Title</td>
            <td className="border border-black p-2">Content</td>
            <td className="border border-black p-2">Origin</td>
            <td className="border border-black p-2 flex justify-around">
              <button className="mr-2"><FaEdit /></button>
              <button><FaTrash /></button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
                    </div>
                    </div>
</div>;
const Events = () => <div>
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24  sm:pr-12 sm:pl-12 md:pr-24 md:pl-24  '>
                    <div className="container mx-auto">
                    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-500 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 text-blue-400 p-2">Date</th>
            <th className="border border-gray-500 p-2 text-blue-400">Title</th>
            <th className="border border-gray-500 p-2 text-blue-400">Image</th>
            <th className="border border-gray-500 p-2 text-blue-400">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <th className="border border-gray-500 text-blue-400 p-2">Date</th>
            <td className="border border-black p-2">Title</td>
            <td className="border border-black p-2">Image</td>
            
            <td className="border border-black p-2 flex justify-around">
              <button className="mr-2"><FaEdit /></button>
              <button><FaTrash /></button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
                    </div>
                    </div>

     <div className='flex flex-col bg-slate-50 shadow-md round-lg justify-center px-9 pb-6 mb-4 gap-7'>
        <img src="/gorillar.jpg" alt="" className='h-96 mt-10' />

        <div>
          <h1 className='font-bold  mb-4 mt-7  text-4xl text-center '>KWITA IZINA</h1>
          <p>U Rwanda ryohambere itumanaho ryakorwaga n’abitwa impayamaguru hamwe n’abantu bafite amajwi aranguruye.Impamvu yo gukoresha ’impayamaguru’ ni uko zabaga zitwaye ubutumwa bw’ibanga ibwami badashaka ko bujya ku karubanda, ariko iyo byabaga ari amakuru asanzwe hifashishwaga abantu bafite amajwi aranguruye.</p>
          <p className='mt-4'>Ari nk’umuntu wapfuye bashakaga umuntu uhagarara ku gasozi ahirengeye akabwira abandi bari ku tundi dusozi, nabo bagahagarara ahirengeye bakabwira abandi bo ku dusozi two hirya yaho, gutyo gutyo".

            Ibitabo by’amateka y’u Rwanda bikomeza bigaragaza ko hari n’aho bakoreshaga ingoma, zikagira imurishyo itandukanye bitewe n’icyo i bwami bashaka kubwira abaturage.

            Nk’urugero, umurishyo w’ingoma y’impuruza ihururiza abaturage kwitabira urugamba wabaga utandukanye n’umurishyo w’ingoma ibika itanga ry’umwami(yapfuye), cyangwa uwo kuvuga amacumu y’ingabo zatabarutse ku rugamba.</p>
        </div>
      </div>
</div>;
const Media = () => <div>Media Content</div>;

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-300">
      <div className="fixed top-0 left-0 h-full w-64  bg-gray-200  flex flex-col py-8 px-4 shadow-lg z-10 rounded-md  text-gray-800 font-semibold">
        <div className="flex items-center justify-center mb-8">
          <img src="../public/logo.jpeg" alt="Logo" className="h-12  rounded-full" />
        </div>
        <nav className="flex flex-col space-y-4 justify-center items-center   rounded-md  ">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-black bg-blue-500 px-3 py-2 rounded-md'
                : 'flex items-center text-black hover:bg-blue-500 px-3 py-2 rounded-md'
                
            }
            
          >
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/imigani"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center  text-black bg-blue-500 px-3 py-2 rounded-md'
                : 'flex items-center  text-black hover:bg-blue-500 px-3 py-2 rounded-md'
            }
          >
            <FaBook className="mr-2" />
            Imigani
          </NavLink>
          <NavLink
            to="/admin/events"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center  text-black bg-blue-500 px-3 py-2 rounded-md'
                : 'flex items-center  text-black hover:bg-blue-500 px-3 py-2 rounded-md'
            }
          >
            <FaCalendarAlt className="mr-2" />
            Events
          </NavLink>
          <NavLink
            to="/admin/media"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center  text-black bg-blue-500 px-3 py-2 rounded-md'
                : 'flex items-center  text-black hover:bg-blue-500 px-3 py-2 rounded-md'
            }
          >
            <FaPhotoVideo className="mr-2" />
            Media
          </NavLink>
        </nav>
      </div>
      <div className="ml-64 p-8 w-full">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="imigani" element={<Imigani />} />
          <Route path="events" element={<Events />} />
          <Route path="media" element={<Media />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
