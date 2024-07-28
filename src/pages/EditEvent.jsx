import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const { id: updateId } = useParams(); // Using updateId from useParams

  useEffect(() => {
    console.log("updateId:", updateId); // Add this line to check the value of updateId
    fetchEvent();
  }, [updateId]);

  const fetchEvent = async () => {
    try {
      console.log(`Fetching event with ID: ${updateId}`);
      const response = await axios.get(`https://iwacu-kera-backend-1.onrender.com/api/events/${updateId}`);
      const event = response.data;
      console.log('Fetched event data:', event);
      setTitle(event.title);
      setDescription(event.description);
      setDate(event.date.split('T')[0]); // Format date for input field
    } catch (error) {
      console.error('Error fetching event:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Updating event with data:', { title, description, date });
      await axios.put(`https://iwacu-kera-backend-1.onrender.com/api/events/update/${updateId}`, {
        title,
        description,
        date
      });
      toast.success('Event updated successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/activity');
      }, 3000);
    } catch (error) {
      console.error('Error updating event:', error);
      toast.error('Error updating event. Please try again.', {
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
    <div>
      <div className="flex justify-center items-center  h-screen">
        <div className="bg-blue-100 p-8 rounded-lg w-[60%] shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Edit Event</h1>
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
            <label htmlFor="date" className="block mb-2 font-semibold text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Update Event
          </button>
        </form>
        <ToastContainer />
      </div>
      </div>
    </div>
  );
};

export default EditEvent;
