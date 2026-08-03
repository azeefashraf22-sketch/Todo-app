const todos = [];

export const addTodo = (data) => {
    todos.push(data)
};

export const getTodos = () => {
    return todos;
};