import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://iwacu-kera-backend-1.onrender.com/api/contacts/create', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        toast.success('Kohereza Ubutumwa byagenze neza!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({ name: '', subject: '', message: '' });
      } else {
        toast.error('Kohereza ubutumwa ntago byagenze.Mwongere mugerageze', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error('Error sending message:', error);
    }
  };

  return (

    <div className='px-4 py-[10%] bg-gray-50 min-h-screen'>
      <ToastContainer />
      <h1 className='text-4xl font-extrabold text-center mb-10'>Twandikire Udusangize ibitekerezo</h1>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-20'>
        <img src='/imigongo1.jpg' alt='Imigongo' className='w-full lg:w-1/2 rounded-lg shadow-md' />
        <div className='w-full lg:w-1/2'>
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label htmlFor='name' className='block text-gray-700 text-lg mb-1'>Amazina yombi</label>
              <input 
                type='text' 
                id='name' 
                name='name' 
                value={formData.name} 
                onChange={handleChange} 
                className='form-input rounded-lg h-12 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3' 
                placeholder='Andika amazina yombi' 
                required 
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='subject' className='block text-gray-700 text-lg mb-1 '>Umutwe</label>
              <input 
                type='text' 
                id='subject' 
                name='subject' 
                value={formData.subject} 
                onChange={handleChange} 
                className='form-input rounded-lg h-12 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3' 
                placeholder='Andika icyo ugiye kuvugaho' 
                required 
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='message' className='block text-gray-700 text-lg mb-1'>Ubutumwa</label>
              <textarea 
                id='message' 
                name='message' 
                value={formData.message} 
                onChange={handleChange} 
                className='form-textarea rounded-lg h-40 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3' 
                placeholder='Andika ubutumwa burambuye' 
                required 
              ></textarea>
            </div>
            <button 
              type='submit' 
              className='bg-blue-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
             Ohereza Ubutumwa
            </button>

    
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
