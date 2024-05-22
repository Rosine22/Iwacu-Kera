// Importing necessary modules
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./docs/swagger.json");

// Middleware
const cors = require('cors');

// Routes
const {router} = require('./routes/contact.routes.js');
const {eventRoutes} = require('./routes/event.routes.js');
const {adminRoutes} = require('./routes/admin.routes.js');
const {proverbRoutes} = require('./routes/proverbRoutes.js');
const {mediaRoutes} = require('./routes/mediaRoutes.js');

// App initialization
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware usage
app.use(express.json());
app.use(cors());

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route usage
app.use("/api/contacts", router); // Assuming your route files export a router object
app.use('/api/events', eventRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/pro', proverbRoutes);
app.use('/api/media', mediaRoutes);

// Database connection
mongoose.connect( "mongodb+srv://belyseurwidukunda:Urwidukunda0255@cluster0.bhbhd6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/iwacu-keraproject") 
try{
    console.log("DB connected")
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}`);
    })

}catch(err){
    console.log(err)
}
