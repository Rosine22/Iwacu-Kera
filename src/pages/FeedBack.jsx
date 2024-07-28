import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedBack = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  const fetchFeedbackList = async () => {
    try {
      const response = await axios.get('https://iwacu-kera-backend-1.onrender.com/api/contacts/lists');
      setFeedbackList(response.data.tasks); // Corrected to response.data.tasks
    } catch (error) {
      setError('Failed to fetch feedback data');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://iwacu-kera-backend-1.onrender.com/api/contacts/delete/${id}`);
      toast.success('Feedback deleted successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFeedbackList(feedbackList.filter(feedback => feedback._id !== id));
    } catch (error) {
      toast.error('Failed to delete feedback. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <div className='px-40 py-16 bg-gray-50 min-h-screen '>
      <ToastContainer />
      <h1 className='text-4xl font-extrabold text-center mb-10'>User Feedback</h1>
      {loading ? (
        <p className='text-center text-gray-700'>Loading...</p>
      ) : error ? (
        <p className='text-center text-red-700'>{error}</p>
      ) : feedbackList.length > 0 ? (
        <div className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {feedbackList.map(feedback => (
              <div key={feedback._id} className='p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200'>
                <h2 className='mb-2 text-xl font-semibold text-gray-900'>{feedback.name}</h2>
                <p className='text-gray-700'>{feedback.subject}</p>
                <p className='mt-2 text-gray-500'>{feedback.message}</p>
                <p className='mt-2 text-gray-400 text-sm'>{new Date(feedback.createdAt).toLocaleDateString()}</p>
                <button
                  onClick={() => handleDelete(feedback._id)}
                  className='mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-700'>No feedback found</p>
      )}
    </div>
  );
};

export default FeedBack;
