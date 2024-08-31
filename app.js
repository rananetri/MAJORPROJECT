const express = require("express");
const app= express();
const mongoose= require("mongoose");
const Listing= require("../MAJORPROJECT/models/listing") 

const MONGO_URL= "mongodb://127.0.0.1:27017/airbnb";

main() //function ko call karane ke liye
 .then(()=>{                           
    console.log("connected to db");
 })
  .catch((err)=>{
    console.log(err);
  });

async function main() {
    await mongoose.connect(MONGO_URL);
}

//basic api
app.get("/", (req,res)=>{
    res.send("Hi,I am root");
});

//get method for listing.js file
app.get("/testListing", async(req, res)=>{
  let sampleListing= new Listing({
    title: "My New Villa",
    description: "In the hills",
    price: 100000,
    location: "Pune",
    country: "India",
  });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});
 
app.listen(8080, ()=>{
    console.log("server is listening to port 8080");
});