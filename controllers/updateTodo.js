const express = require("express");
const app = express();

// fetch the schema of the todo
const Todo = require("../models/Todo");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// define the route handler jaha click karne pr hm update kar paye apna todo
exports.updateTodo = async(req,res)=>{
    console.log("hello");
    try{
        // get id
        const id = req.params.id;
        console.log(id);
        const {title,description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},   // kis data me update karna hai so we pass id ki iss id wale data ko update karo
            {
                "title":title, 
                "description":description,
                updatedAt:Date.now()
            }
        );

        // send a JSON response with a success flag
        res.status(200).json(   // set the ststus code as (200 -> success)
            {
                success:true,
                data:todo,
                message:"Updated successfully..!"
            }
        )
    }catch(err){
        console.error(err);
        res.status(500).json(       // setting the status code 500 -> server side problem
            {
                success:false,
                data:"Internal server error in updateTodo",
                message : err.message
            }
        )
    }
}