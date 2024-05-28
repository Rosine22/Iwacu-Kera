const {v2: cloudinary} = require('cloudinary');
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME ||'dslqmcldc', 
  api_key: process.env.CLOUD_KEY || '457854688731452', 
  api_secret: process.env.CLOUD_SECRET || 'd1C2DU--HHKvUs9H9gD6Vbnki5M' 
});

module.exports = cloudinary;