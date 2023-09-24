import rootReducer from "../rootReducer.js";

const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

    // pass action
    next(action);
}

export default myLogger;