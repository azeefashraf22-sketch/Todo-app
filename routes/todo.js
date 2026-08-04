import express from 'express';
import { addTodo, getTodos } from '../controllers/todo.js';
const router = express.Router();

router.post("/add", (req, res) => {
    addTodo(req.body.data);
    res.redirect("/todo");
});

router.get("/", (req, res) => {
    res.render("todo", { todos: getTodos() });
});

export default router;