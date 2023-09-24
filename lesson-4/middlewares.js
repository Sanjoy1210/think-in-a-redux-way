const fetch = require("node-fetch");
const delayActionMiddleware = (store) => (next) => (action) => {
    if (action.type === "todos/todoAdded") {
        console.log("I am delaying you");

        setTimeout(() => {
            next(action);
        }, 2000);

        return;
    }

    return next(action);
}

// thunk function
// thunk is a middleware function, যেটা asynchronous task করে থাকে, thunk function যেটা action এ পাঠানো হয়,
// সেখানে dispatch এবং getState টা pass করা হয়।
const fetchAsyncMiddleware = (store) => (next) => async (action) => {
    if (typeof action === "function") {
        return action(store.dispatch, store.getState);
    }
    return next(action);
}

module.exports = {
    delayActionMiddleware,
    fetchAsyncMiddleware
}