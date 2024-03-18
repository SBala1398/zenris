const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/zenris")

  .then(() => console.log("Connected to MongoDB"))

  .catch((error) => console.log("Error connecting to MongoDB:", error));


// User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);


  //product model 
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number
  },
  old_price: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});

app.get("/", (req, res) => {
  res.send("Root");
});

// all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products");
  res.send(products);
});

//add ton cats db

// Register user


// Login user

// Google login

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
