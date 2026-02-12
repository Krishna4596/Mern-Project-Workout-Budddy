// Importing express package
 const express = require('express');
 const dotenv = require('dotenv');
 const mongoose = require('mongoose');
 const cors = require('cors');

 // Routes
const workoutRoutes = require('./routes/workout');
const userRoutes = require('./routes/User');

dotenv.config();

// PORT run
 const PORT = process.env.PORT || 4000;
 
// Express APP
 const app = express();

 // middleware
 app.use(cors());
 app.use(express.json());
 
 app.use((req, res, next) => {
   console.log(req.path, req.method);
   next();
 });

 //Routes (http://localhost:4000/)
 app.get('/', (req, res) => {
   res.json({mesg: 'Welcome to our application'});
 });

 app.use('/api/workouts',workoutRoutes)
 app.use('/api/User',userRoutes)

 // Connect to db
 mongoose.connect(process.env.MONGO_URI)
 .then(()=> {
  // listen for requests
 app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT} & connected to DB`);
 });
 }).
 catch((error)=>{console.log(error)})

 
