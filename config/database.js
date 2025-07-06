const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database connected.");
    }).catch((err)=>{
        console.log(`Error -> `);
        console.error(err.message);
        // used to stop the entire node.js application when the databasse connection fails
        process.exit(1);
    })
} 

module.exports = dbConnect;