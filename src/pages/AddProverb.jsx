import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function AddProverb() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [origin, setOrigin] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://iwacu-kera-backend-1.onrender.com/api/pro/create', {
        title,
        content,
        origin
      });
      console.log('Proverb added successfully:', response.data);
      // Clear the form
      setTitle('');
      setContent('');
      setOrigin('');
      // Set success alert message
      setAlertMessage('Proverb added successfully');
      // toast.success('successfully added')
      toast.success('successfully added')
      alert('kdkfdkf')
      // Navigate to proverb page
      navigate('/proverb');
    } catch (error) {
      console.error('Error adding proverb:', error);
      // toast.error('error ')
      toast.error('error');
      // Set error alert message
      setAlertMessage('Error adding proverb. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center  h-screen ">
      <div className="bg-blue-100 p-8 rounded-lg w-[60%] shadow-lg">
      <ToastContainer/>
      <h1 className="text-2xl font-semibold mb-4">Add Proverb</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2 font-semibold text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
            placeholder="Enter content"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="origin" className="block mb-2 font-semibold text-gray-700">Origin</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
            placeholder="Enter origin"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
        >
          Add New
        </button>
        {alertMessage && (
          <div className={`mt-4 p-2 rounded-lg ${alertMessage.includes('successfully') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {alertMessage}
          </div>
        )}
      </form>
      </div>
    </div>
  );
}

export default AddProverb;
