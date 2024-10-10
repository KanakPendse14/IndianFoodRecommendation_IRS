// const express = require('express');
// const { MongoClient } = require('mongodb');
// const cors = require('cors'); // Optional: for handling CORS
// const foodItemsRouter = require('./routes/foodItems'); // Adjust the path if necessary

// const app = express();
// const port = 5000;

// // Replace with your actual MongoDB connection string
// const uri = 'mongodb+srv://kanakpendse14:juikanak12345@indianfoodcluster1.w38x8.mongodb.net/IndianFoodDB?retryWrites=true&w=majority';

// const client = new MongoClient(uri, {
//   useNewUrlParser: true, // Can be removed (deprecated)
//   useUnifiedTopology: true // Can be removed (deprecated)
// });

// async function run() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');
//     const db = client.db('IndianFoodDB');
//     console.log('Database selected:', db.databaseName);

//     // Middleware
//     app.use(cors()); // Optional: Enable CORS
//     app.use(express.json()); // To parse JSON bodies

//     // Use the food items routes
//     app.use('/api/foodItems', foodItemsRouter); // Add this line

//     // You can set up your other routes here
//     app.get('/', (req, res) => {
//       res.send('Hello World!');
//     });

//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   } catch (err) {
//     console.error('Connection failed:', err);
//   }
// }

// run().catch(console.dir);


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const foodItemsRoute = require('./routes/foodItems');

// const app = express();
// const port = 5000;

// // Replace with your actual MongoDB connection string
// const uri = 'mongodb+srv://kanakpendse14:juikanak12345@indianfoodcluster1.w38x8.mongodb.net/IndianFoodDB?retryWrites=true&w=majority';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Connection failed:', err));

// app.use(express.json()); // Middleware to parse JSON
// app.use('/api/foodItems', foodItemsRoute); // Use food items routes

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const foodItemsRoute = require('./routes/foodItems');

const app = express();
const port = 5000;

// Replace with your actual MongoDB connection string
const uri = 'mongodb+srv://kanakpendse14:juikanak12345@indianfoodcluster1.w38x8.mongodb.net/IndianFoodDB?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection failed:', err));

// Middleware to enable CORS
app.use(cors()); // <-- Add this line

app.use(express.json()); // Middleware to parse JSON
app.use('/api/foodItems', foodItemsRoute); // Use food items routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
