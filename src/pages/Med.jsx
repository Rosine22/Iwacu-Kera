import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Med() {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMediaList();
  }, []);

  const fetchMediaList = async () => {
    try {
      console.log('Fetching media list');
      const response = await axios.get('https://iwacu-kera-backend-1.onrender.com/api/media/list');
      console.log('API Response:', response.data);
      setMediaList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch media data');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://iwacu-kera-backend-1.onrender.com/api/media/delete/${id}`);
      setMediaList(mediaList.filter(media => media._id !== id));
    } catch (error) {
      console.error('Error deleting media:', error);
      setError('Failed to delete media');
    }
  };

  return (
    <div>
      <div className="mt-20 justify-center items-center ml-[80%]">
        <Link
          to='/AddMedia'
          className="items-end px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add Media
        </Link>
      </div>
      <div className='flex flex-col gap-2 pt-20 mt-10 ml-20 bg-gray-100 rounded-lg sm:flex-row sm:gap-12 h-96 md:gap-16 lg:gap-20 xl:gap-24 sm:pr-12 sm:pl-12 md:pr-24 md:pl-24'>
        <div className="container mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full pb-20 border border-collapse border-gray-500 table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-blue-400 border border-gray-500">Title</th>
                  <th className="p-2 text-blue-400 border border-gray-500">Link</th>
                  <th className="p-2 text-blue-400 border border-gray-500">Description</th>
                  <th className="p-2 text-blue-400 border border-gray-500">Type</th>
                  <th className="p-2 text-blue-400 border border-gray-500">Owner</th>
                  <th className="p-2 text-blue-400 border border-gray-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {mediaList.map((media, index) => (
                  <tr key={index}>
                    <td className="p-2 border border-black">{media.title}</td>
                    <td className="p-2 border border-black"><a href={media.link} target="_blank" rel="noopener noreferrer">{media.link}</a></td>
                    <td className="p-2 border border-black">{media.description}</td>
                    <td className="p-2 border border-black">{media.type}</td>
                    <td className="p-2 border border-black">{media.owner}</td>
                    <td className="justify-between p-2 border border-black">
                      <Link to={`/EditMedia/${media._id}`}><button className="mr-2"> <FaEdit /></button> </Link>
                      <button onClick={() => handleDelete(media._id)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Med;
