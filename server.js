import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/proverbs', async (req, res) => {
    try {
        const response = await axios.get('https://iwacu-kera-backend-2.onrender.com/api-docs/#/Proverbs/get_api_proverbs__id_');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
