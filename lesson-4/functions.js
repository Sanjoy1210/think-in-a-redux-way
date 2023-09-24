const fetch = require("node-fetch");
const fetchTodos = async (dispatch, getState) => {
    const res = await fetch("https://dummyjson.com/todos?limit=5");
    const data = await res.json();

    dispatch({
        type: "todos/todoLoaded",
        payload: data.todos,
    });

    console.log(`Number of updated todos: ${getState().todos.length}`);
}

module.exports = {
    fetchTodos,
}
