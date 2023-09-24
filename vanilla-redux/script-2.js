// catch the dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const increment = (value = 1) => {
    return {
        type: INCREMENT,
        payload: value,
    };
}

const decrement = (value = 1) => {
    return {
        type: DECREMENT,
        payload: value,
    };
}

// initial state
const initialState = {
    value: 0,
};

// reducer function
const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        // default condition
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}

// initial ui
render();

// subscribe to the store for u
store.subscribe(render);

// button event handler
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2));
});
