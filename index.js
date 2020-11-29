console.clear();

// Setting up environment variables (local pc user variables, secure)
// eviroments: local, deploy(test), production
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());




// Connecting Mongo and setting up Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.catch(error => console.error(`MONGO ERROR: ${error}`));

// register the routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

// error handling
const { handle404s, errorHandler } = require('./errorHandling');
app.use(handle404s);
app.use(errorHandler);

app.listen(4000, () => console.log('Always watching... on port 4000!'));