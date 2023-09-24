const { createStore, applyMiddleware } = require("redux");
const {fetchTodos} = require("./functions");
const thunk = require("redux-thunk");

// initial state
const initialState = {
    todos: [],
};

// reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/todoAdded":
            return {
                ...state,
                todos: [...state.todos, {title: action.payload}],
            };

        case "todos/todoLoaded":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    ...action.payload,
                ],
            };

        default:
            return state;
    }
}

// create store
const store = createStore(reducer, applyMiddleware(thunk.default));

// subscribe to the store
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action
// store.dispatch({
//     type: "todos/todoAdded",
//     payload: "Learn Redux from LWS",
// });

store.dispatch(fetchTodos);
