import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import todo from './routes/todo.js';
import form from './routes/form.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd())));
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/todo", todo);
app.use("/form", form);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});