const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const booksRoute = require('./routes/booksRoute');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/books', booksRoute);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('App connected to database');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
