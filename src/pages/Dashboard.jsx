import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [imiganiLength, setImiganiLength] = useState(0);
  const [eventsLength, setEventsLength] = useState(0);
  const [mediaLength, setMediaLength] = useState(0);
  const [feedbackLength, setFeedbackLength] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const [imiganiResponse, eventsResponse, mediaResponse] = await Promise.all([
        axios.get('https://iwacu-kera-backend-1.onrender.com/api/pro/list'),
        axios.get('https://iwacu-kera-backend-1.onrender.com/api/events/listevents'),
        axios.get('https://iwacu-kera-backend-1.onrender.com/api/media/list'),
         axios.get('https://iwacu-kera-backend-1.onrender.com/api/contacts/lists')
      ]);

      setImiganiLength(imiganiResponse.data.length);
      setEventsLength(eventsResponse.data.task.length); 
      setMediaLength(mediaResponse.data.length);
      setFeedbackLength(feedbackResponse.data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-6">
     
      <div className="flex gap-8 ml-28  mt-20 ">
        
        <div className="bg-blue-400 h-40 w-72 shadow-sm rounded-lg flex flex-col justify-center items-center">
          <Link to='/proverb' className="text-center">
            <h1 className="font-bold text-white text-4xl">+{imiganiLength}</h1>
            <span className="text-white text-xl">Imigani</span>
          </Link>
        </div>
        <div className="bg-cyan-200 h-40 w-72 shadow-sm rounded-lg flex flex-col justify-center items-center">
          <Link to='/activity' className="text-center">
            <h1 className="font-bold text-gray-900 text-4xl">+{eventsLength}</h1>
            <span className="text-gray-900 text-xl">Events</span>
          </Link>
        </div>
        <div className="bg-red-900 h-40 w-72 shadow-sm rounded-lg flex flex-col justify-center items-center">
          <Link to='/Med' className="text-center">
            <h1 className="font-bold text-white text-4xl">+{mediaLength}</h1>
            <span className="text-white text-xl">Media</span>
          </Link>
        </div>
        <div className="bg-blue-900 h-40 w-64 shadow-sm rounded-lg flex flex-col justify-center items-center">
          <Link to='/feedback' className="text-center">
            <h1 className="font-bold text-white text-4xl">+2{feedbackLength}</h1>
            <span className="text-white text-xl">FeedBack</span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-20 lg:grid-cols-3 ml-28 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>User John commented on 'Inganzo' event.</li>
            <li>New proverb 'Aka niko kajya' added.</li>
            <li>New media content uploaded in 'Culture' section.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">User Feedback</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Tina Uwase: "I like the events you post."</li>
            <li>Kanyange: "I like the events you app."</li>
            <li>Louise: "Nukuri mwakoze neza cyane."</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>June 15: Inganzo ngari kwita Izina</li>
          <li>July 10: Urukerereza cultural festival</li>
          <li>August 5: Traditional dance workshop</li>
        </ul>
      </div>
      </div>
     
      </div>
    
  );
}

export default Dashboard;
