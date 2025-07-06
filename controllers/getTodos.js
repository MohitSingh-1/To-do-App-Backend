// fetch the schema of the todo
const Todo = require("../models/Todo");

// here we are sending data to the client so here we don't need for parsing the data as there is no data coming from the client side


exports.getTodos = async(req,res)=>{
    try{
        // fetch all the data from the database
        const todos = await Todo.find({});  // one of the function provided by the mongoose and as we require mongoose in models/Todo that's why we just require that and mongoose will be automatocally be required

        // sending the response to the client
        res.send(todos);

        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"successfully fetch the data and send back."
            }
        )
    }catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:"Unable to fetch the data from the database...gadbad",
                message:err.message
            }
        )
    }
}


// fetching todo based on id
exports.getTodoById = async(req,res)=>{
    try{
        const id = req.params.id;
        //fetch todo by id 
        const singleTodo = await Todo.findById({_id:id});

        // todo for given id not found
        if(!singleTodo){
            return res.status(404).json(
                {
                    success:false,
                    data:"Data not found",     
                    message:"nahi mila"
                }
            )
        }
        // data found
        res.status(200).json(
            {
                success:true,
                data:singleTodo,
                message:`Data ${id} fetch successfully` 
            }
        )
        


    }catch(err){
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message
            }
        )
    }
}