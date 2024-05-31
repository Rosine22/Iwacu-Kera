// Importing necessary modules
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import swaggerDocument from "./docs/documentation.js" ;
import swaggerUi from "swagger-ui-express"
import  errorHandler  from './Middlewares/ErrorHandler.js';
// Middleware
import cors from 'cors';

// Routes
import  router  from './routes/contact.routes.js';
import  eventRoutes  from './routes/event.routes.js';
import  adminRoutes  from './routes/admin.routes.js';
import  proverbRoutes  from './routes/proverbRoutes.js';
import  mediaRoutes  from './routes/mediaRoutes.js';

// App initialization
const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port

// Middleware usage
app.use(express.json());
app.use(cors());

// Swagger UI setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Route usage
app.use("/api/contacts", router);
app.use("/api/events", eventRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/pro", proverbRoutes);
app.use("/api/media", mediaRoutes);

// Database connection
mongoose.connect("mongodb+srv://belyseurwidukunda:Urwidukunda0255@cluster0.bhbhd6z.mongodb.net/iwacu-keraproject");

app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`);
});

console.log("DB connected");

// Error handling middleware
app.use(errorHandler);
