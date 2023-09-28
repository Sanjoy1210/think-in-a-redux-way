const { counterActions} = require("./features/counter/counterSlice");
const { dynamicCounterActions } = require("./features/dynamicCounter/dynamicCounterSlice");
const store = require("./app/store");
const { fetchPosts } = require("./features/posts/postsSlice");

// initial state
// console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to the store
store.subscribe(() => {
  // console.log(store.getState());
});

// dispatch actions
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());

// store.dispatch(dynamicCounterActions.increment(3));
// store.dispatch(dynamicCounterActions.increment(4));
// store.dispatch(dynamicCounterActions.decrement(2));

// store.dispatch(counterActions.increment());

store.dispatch(fetchPosts());
