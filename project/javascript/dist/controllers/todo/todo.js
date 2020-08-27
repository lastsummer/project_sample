"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../../models/todo/todo");
const TODOS = [];
exports.createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.json({ message: 'finish the doto', todo: newTodo });
};
