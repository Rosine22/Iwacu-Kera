import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditMedia() {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [owner, setOwner] = useState('');
  const navigate = useNavigate();
  const { id: mediaId } = useParams();

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await axios.get(`https://iwacu-kera-backend-1.onrender.com/api/media/${mediaId}`);
      const media = response.data;
      setTitle(media.title);
      setLink(media.link);
      setDescription(media.description);
      setType(media.type);
      setOwner(media.owner);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`https://iwacu-kera-backend-1.onrender.com/api/media/update/${mediaId}`, {
        title,
        link,
        description,
        type,
        owner
      });
      toast.success('Media updated successfully!', {
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
      console.error('Error updating media:', error);
      toast.error('Error updating media. Please try again.', {
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
      <div className="bg-gray-50 p-8 rounded-lg w-[60%] shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold">Edit Media</h1>
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
            <input
              type="text"
              id="link"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              placeholder="Enter link"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 font-semibold text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              placeholder="Enter description"
            ></textarea>
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
              placeholder="Enter type"
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
            className="w-full py-2 text-white bg-green-600 rounded-l hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Update
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EditMedia;
