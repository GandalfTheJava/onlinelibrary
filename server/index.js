const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on PORT ${PORT}`));

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (error) => {
        if (error) throw error;
        console.log("SUCCESSFULLY CONNECTED TO MONGODB");
    }
);

app.use("/users", require('./Routes/UserRoute'));