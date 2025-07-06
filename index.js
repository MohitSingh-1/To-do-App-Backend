
// instantiated a server using express and named it 'app'
const express = require('express');
const app = express();

// load all config from env file to process object and fetching the required data from process object
require("dotenv").config();
const PORT = process.env.PORT || 4000 

//connect to the DB
const dbConnect = require("./config/database");
dbConnect();
// Middlewares to parse JSON reqest body
app.use(express.json());




// import routes for todo API
const todoRoutes = require("./routes/Todos");
// mount the API routes
app.use("/api/v1",todoRoutes);


// default Route
app.get("/",(req,res)=>{
    res.send(`<h1>This is a home page </h1>`);
}) 

// starting the server 
app.listen(PORT,()=>{
    console.log(`✅ Server is running at port number : ${PORT}`);
})

