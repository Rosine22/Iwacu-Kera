  import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditProverb() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [origin, setOrigin] = useState('');
  const navigate = useNavigate();
  const { id: proId } = useParams();

  useEffect(() => {
    fetchProverb();
  }, []);

  const fetchProverb = async () => {
    try {
      const response = await axios.get(`https://iwacu-kera-backend-1.onrender.com/api/pro/${proId}`);
      const proverb = response.data;
      setTitle(proverb.title);
      setContent(proverb.content);
      setOrigin(proverb.origin);
    } catch (error) {
      console.error('Error fetching proverb:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://iwacu-kera-backend-1.onrender.com/api/pro/update/${proId}`, {
        title,
        content,
        origin
      });
      toast.success('Proverb updated successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/proverb');
      }, 3000);
    } catch (error) {
      console.error('Error updating proverb:', error);
      toast.error('Error updating proverb. Please try again.', {
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
    <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-100 p-8 rounded-lg w-[60%] shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold">Edit Proverb</h1>
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
            <label htmlFor="content" className="block mb-2 font-semibold text-gray-700">Content</label>
            <textarea
              id="content"
              name="content"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              placeholder="Enter origin"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Update
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EditProverb;
