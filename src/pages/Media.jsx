import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import 'tailwindcss/tailwind.css';

const Media = () => {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMediaList();
  }, []);

  const fetchMediaList = async () => {
    try {
      const response = await axios.get('https://iwacu-kera-backend-1.onrender.com/api/media/list');
      setMediaList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch media data');
    } finally {
      setLoading(false);
    }
  };

  const renderVideo = (link) => {
    // Check if the link is a YouTube link and extract the video ID
    const youtubeMatch = link.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    const youtubeId = youtubeMatch ? youtubeMatch[1] : null;

    return youtubeId ? (
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <video controls className="w-full" volume={1} onError={(e) => console.log('Video error:', e)}>
        <source src={link} type="video/mp4" />
       
      </video>
    );
  };

  return (
    <div className="p-10 bg-gray-50">
      <h1 className="mb-4 text-4xl text-center font-extrabold py-20 text-gray-900">Ibiganiro by'umuco Nyarwanda</h1>
      
      <div className='max-w-7xl mx-auto'>
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <ClipLoader size={50} color="#3498db" />
          </div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {mediaList.map(media => (
              <div key={media._id} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                <h2 className="mb-2 text-xl font-semibold text-gray-800">{media.title}</h2>
                
                {renderVideo(media.link)}

                <p className="mt-2 text-gray-500">Ubusobanuro: {media.description}</p>
            
               
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
