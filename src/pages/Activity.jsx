import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Activity() {
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEventList();
  }, []);

  const fetchEventList = async () => {
    try {
      const response = await axios.get('https://iwacu-kera-backend-1.onrender.com/api/events/listevents');
      setEventList(response.data.task);
    } catch (error) {
      setError('Failed to fetch event data');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://iwacu-kera-backend-1.onrender.com/api/events/delete/${id}`);
      // Remove the deleted event from the event list
      setEventList(eventList.filter(event => event._id !== id));
      toast.success('Event deleted successfully');
    } catch (error) {
      setError('Failed to delete event');
      toast.error('Failed to delete event');
    }
  };

  return (
    <div>
      <div className="mt-10 justify-center items-center ml-[80%]">
        <Link
          to='/addevent'
          className="items-end px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add Event
        </Link>
      </div>
      <div className='flex flex-col gap-2 pt-20 mt-5 ml-20   sm:flex-row sm:gap-12 h-96 md:gap-16 lg:gap-20 xl:gap-24 sm:pr-12 sm:pl-12 md:pr-24 md:pl-24'>
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            {loading ? (
              <p className="text-center text-gray-700">Loading...</p>
            ) : error ? (
              <p className="text-center text-red-700">{error}</p>
            ) : eventList.length > 0 ? (
              <table className="w-full pb-20 border border-collapse border-gray-500 table-auto">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="p-2 text-black border border-gray-500">Title</th>
                    <th className="p-2 text-black border border-gray-500">Description</th>
                    <th className="p-2 text-black border border-gray-500">Date</th>
                    <th className="p-2 text-black border border-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {eventList.map(event => (
                    <tr key={event._id}>
                      <td className="p-2 border border-black">{event.title}</td>
                      <td className="p-2 border border-black">{event.description}</td>
                      <td className="p-2 border border-black">{new Date(event.date).toLocaleDateString()}</td>
                      <td className="justify-between p-2 border border-black">
                        <Link to={`/EditEvent/${event._id}`}>
                          <button className="mr-2 text-blue-500 hover:text-blue-700"><FaEdit /></button>
                        </Link>
                        <button onClick={() => handleDelete(event._id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-700">No events found</p>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Activity;
