const mongoose= require("mongoose");
const initData= require("./data");
const Listing= require("../models/listing.js");

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

const initDB= async()=>{
    await Listing.deleteMany({});   //initial data delete ho jayega
    await Listing.insertMany(initData.data); //data.js file ka data insert hoga
    console.log("data was initialized");
};

initDB();  //uppar initDB func banaya usko call kar diya 