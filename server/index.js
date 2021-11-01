require('dotenv').config();

require('./config/configPG');

const express = require('express');
const cors = require('cors');

const router = require('./Router');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Movies API'
    });
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
