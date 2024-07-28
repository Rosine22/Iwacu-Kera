import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

export default mongoose.model('Contact', ContactSchema);
