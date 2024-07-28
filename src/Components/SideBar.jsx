import  {useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../../public/logo.png";
import { FaTachometerAlt, FaBook, FaCalendarAlt, FaPhotoVideo, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@headlessui/react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
const token = localStorage.getItem("token")
console.log(token);

const handleDelete = ()=>{
  localStorage.removeItem("token");
  navigate('/')

}

  return (
    <div className="flex h-screen bg-green-100">
      <div className="fixed top-0 left-0 z-10 hidden w-64 h-full px-4 py-8 font-semibold text-gray-800 bg-blue-200 rounded-md shadow-lg lg:flex lg:flex-col">
        <div className="flex items-center justify-center mb-8">
          <img src= { Logo}alt="Logo" className='h-20 w-30' />
        </div>
        <nav className="flex flex-col items-center justify-center mt-10 space-y-4">
          <NavLink
            to="/dashboard"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                : 'flex items-center text-black hover:bg-blue-300 w-full border-b border-stone-100 shadow-lg rounded-lg text-2xl px-3 py-2'
            }
          >
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </NavLink>
          <NavLink
            to="/proverb"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
            }
          >
            <FaBook className="mr-2" />
            Proverb
          </NavLink>
          <NavLink
            to="/activity"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
            }
          >
            <FaCalendarAlt className="mr-2" />
            Events
          </NavLink>
          <NavLink
            to="/med"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
            }
          >
            <FaPhotoVideo className="mr-2" />
            Media
          </NavLink>
          <NavLink
            to="/feedback"
            exact="true"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
            }
          >
            <FaBook className="mr-2" />
           Comments
          </NavLink>
        </nav>
        <div className="mt-auto">
          <NavLink
            to="/"
            exact="true"
            className="flex items-center px-3 py-2 text-2xl text-black border-b rounded-lg shadow-lg hover:bg-blue-300 border-stone-100"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </NavLink>
        </div>
      </div>

      <div className="flex items-center justify-between w-full p-4 bg-white shadow-lg lg:hidden">
        <img src="../public/logo.png" alt="Logo" className='w-20 h-10' />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-800 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 z-20 flex flex-col w-64 h-full px-4 py-8 bg-white shadow-lg lg:hidden">
          <div className="flex items-center justify-center mb-8">
            <img src="../public/logo.png" alt="Logo" className='h-20 w-30' />
          </div>
          <nav className="flex flex-col items-center justify-center mt-10 space-y-4">
            <NavLink
              to="/dashboard"
              exact="true"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                  : 'flex items-center text-black hover:bg-blue-300 w-full border-b border-stone-100 shadow-lg rounded-lg text-2xl px-3 py-2'
              }
            >
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </NavLink>
            <NavLink
              to="/proverb"
              exact="true"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                  : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
              }
            >
              <FaBook className="mr-2" />
              Proverb
            </NavLink>
            <NavLink
              to="/activity"
              exact="true"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                  : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
              }
            >
              <FaCalendarAlt className="mr-2" />
              Events
            </NavLink>
            <NavLink
              to="/med"
              exact="true"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-white bg-blue-300 rounded-lg px-3 py-2'
                  : 'flex items-center text-black hover:bg-blue-300 w-full text-1xl border-b border-stone-100 shadow-lg rounded-lg px-3 py-2'
              }
            >
              <FaPhotoVideo className="mr-2" />
              Media
            </NavLink>
          </nav>
          <div className="mt-auto">
            <Button
              to=""
              onClick={handleDelete}
              exact="true"
              className="flex items-center px-3 py-2 text-2xl text-black border-b rounded-lg shadow-lg hover:bg-blue-300 border-stone-100"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            /</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
