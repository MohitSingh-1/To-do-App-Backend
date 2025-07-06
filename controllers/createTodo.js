const express = require("express");
const app = express();

// fetch the schema of the todo
const Todo = require("../models/Todo");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// define the route handler jaha click karne pr yaha aaye hai to create a todo
exports.createTodo = async(req,res)=>{
    try{
        // extract the title and description from the request body 
        const {title,description} = req.body;
        // create an object of todo and insert it into DB
        const response = await Todo.create({title,description});

        // send a JSON response with a success flag
        res.status(200).json(   // set the ststus code as (200 -> success)
            {
                success:true,
                data:response,
                message:"Entry created successfully..!"
            }
        )
    }catch(err){
        console.error(err);
        res.status(500).json(       // setting the status code 500 -> server side problem
            {
                success:false,
                data:"Internal server error",
                message : err.message
            }
        )
    }
}