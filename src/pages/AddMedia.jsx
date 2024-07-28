import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddMedia = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [owner, setOwner] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://iwacu-kera-backend-1.onrender.com/api/media/create', {
        title,
        link,
        description,
        type,
        owner,
      });
      toast.success('Media added successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/Med');
      }, 3000);
    } catch (error) {
      console.error('Error adding media:', error);
      toast.error('Error adding media. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="w-auto p-8 mt-10 ml-20 bg-gray-100 rounded-lg shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">Add Media</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block mb-2 font-semibold text-gray-700">Link</label>
          <textarea
            id="link"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter link"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-semibold text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2 font-semibold text-gray-700">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter type (e.g., video, image, audio)"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="owner" className="block mb-2 font-semibold text-gray-700">Owner</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Enter owner"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add New
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddMedia;