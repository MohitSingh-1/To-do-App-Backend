const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return res.status(404).json({
                success: false,   
                message: "Unable to get any todo with this ID"
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Successfully deleted"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Unable to fetch the data from the database...gadbad",
            message: err.message
        });
    }
};
