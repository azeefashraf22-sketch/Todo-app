import express from 'express';
import { addTodo, getTodos } from '../controllers/todo.js';
const router = express.Router();

router.post("/add", (req, res) => {
    addTodo(req.body.data)
    res.send("todo added!");
});

router.get("/", (req,res) => {
    res.render("todo",{todo:getTodos()});
})

export default router;