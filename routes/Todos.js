const express = require("express");
const router = express.Router();

// import controller so that the route handlers can be called for creating todo
const {createTodo} = require("../controllers/createTodo");

// import controller for fetching all the todos and sending it to the client
const {getTodos,getTodoById} = require("../controllers/getTodos");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodos);   // as this is a get type request
router.get("/getTodos/:id",getTodoById);    // only single todo item by its id
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;