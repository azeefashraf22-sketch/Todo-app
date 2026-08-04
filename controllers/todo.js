const todos = [];

export const addTodo = (data) => {
    if (data && data.trim() !== "") {
        todos.push({
            id: Date.now(),
            text: data.trim(),
            completed: false,
        });
        return true;
    };
    return false;
};

export const toggleStatus = (id) => {
    const todo = todos.find(todo => todo.id === Number(id));
    if (todo) {
        todo.completed = !todo.completed;
        return true;
    }
    return false;
};

export const getTodos = () => {
    return todos;
};