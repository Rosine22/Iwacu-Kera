import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Proverb = () => {
  const [proverbs, setProverbs] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProverbs();
  }, []);

  const fetchProverbs = async () => {
    try {
      const response = await axios.get('https://iwacu-kera-backend-1.onrender.com/api/pro/list');
      setProverbs(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editproverb/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://iwacu-kera-backend-1.onrender.com/api/pro/delete/${id}`);
      setProverbs(proverbs.filter(proverb => proverb._id !== id)); // Remove the deleted proverb from the state
      setDeleteMessage('Proverb deleted successfully');
      
      setTimeout(() => {
        setDeleteMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error deleting proverb:', error);
    }
  };

  return (
    <>
      <div>
        {deleteMessage && (
          <div className="bg-green-200 text-green-800 rounded-md p-2 m-4 text-right absolute top-0 right-0">
            {deleteMessage}
          </div>
        )}

        <div className="mt-10 justify-center items-center ml-[80%] ">
          <Link to='/addproverb'
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          >
            Add Proverb
          </Link>
        </div>

        <div className='flex flex-col bg-gray-100 mt-10 mx-auto shadow-lg rounded-lg pt-10 max-w-screen-lg'>
          <div className="container mx-auto">
            <div>
              <table className="table-auto border-collapse border pb-20 border-gray-500 w-full">
                <thead>
                  <tr className="bg-blue-200">
                    <th className="border border-gray-500 text-blue-400 p-2">Title</th>
                    <th className="border border-gray-500 p-2 text-blue-400">Content</th>
                    <th className="border border-gray-500 p-2 text-blue-400">Origin</th>
                    <th className="border border-gray-500 p-2 text-blue-400">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(proverbs) && proverbs.map(proverb => (
                    <tr key={proverb._id} className="bg-white">
                      <td className="border border-gray-500 p-2">{proverb.title}</td>
                      <td className="border border-gray-500 p-2">{proverb.content}</td>
                      <td className="border border-gray-500 p-2">{proverb.origin}</td>
                      <td className="border border-gray-500 p-2 flex justify-between">
                        <button onClick={() => handleEdit(proverb._id)} className="mr-2 text-blue-500 hover:text-blue-700"><FaEdit /></button>
                        <button onClick={() => handleDelete(proverb._id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proverb;
