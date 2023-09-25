import {toggled} from "../actions";

const updateStatus = (todoId, completed) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !completed,
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        const todo = await res.json();
        dispatch(toggled(todo.id));
    }
}

export default updateStatus;