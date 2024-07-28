import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Events = () => {
    const [eventList, setEventList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEventList();
    }, []);

    const fetchEventList = async () => {
        try {
            console.log('Fetching event list');
            const response = await axios.get('https://iwacu-kera-backend-1.onrender.com/api/events/listevents');
            console.log('API Response:', response.data);
            setEventList(response.data.task); // Accessing 'task' array from response
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch event data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">

           <div className='relative mt-10 mb-0'>
        <img src="/events.png" alt="Event Banner" className='h-[10%] w-full object-cover' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-black bg-opacity-50'>
          <h1 className='text-4xl font-extrabold animate-title'>Muratumiwe</h1>
          <p className='text-xl mt-2 animate-subtitle'>Mubitaramo bigiye kuzaba bijyanye n'umuco nyarwanda</p>
          <p className='text-lg mt-2 animate-subtitle'>Harimo Inganzo ngari, kwita Izina, Urukerereza hamwe n'ibindi</p>
        </div>
      </div>
            <div className="container px-4 py-8 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Ibitaramo bigiye kuzaba</h1>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <ClipLoader size={50} color="#3498db" />
                    </div>
                ) : error ? (
                    <p className="text-center text-red-700">{error}</p>
                ) : eventList.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {eventList.map(event => (
                            <div key={event._id} className="p-6 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg">
                                <h2 className="mb-2 text-xl font-semibold text-gray-900">{event.title}</h2>
                                <p className="text-gray-700">{event.description}</p>
                                <p className="mt-2 text-gray-500 font-medium mb-2">{new Date(event.date).toLocaleDateString()}</p>
                                <img src={event.image} alt='' className="text-gray-700" />
                                <p className="text-gray-700 mt-4"> Aho biribubere: <span className='font-medium'>{event.location}</span></p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-700">No events found</p>
                )}
            </div>
        </div>
        
    );
};

export default Events;
