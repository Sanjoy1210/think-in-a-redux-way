// catch the dom elements
const allMatchesContainer = document.querySelector(".all-matches");
const addMatchBtn = document.querySelector(".lws-addMatch");
const resetBtn = document.querySelector(".lws-reset");

// action identifiers
const ADD_MATCH = "add_match";
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const DELETE_MATCH = "delete_match";

// action creators
const addMatch = () => {
    return {
        type: ADD_MATCH,
    };
}

const deleteMatch = (id) => {
    return {
        type: DELETE_MATCH,
        payload: {
            id
        }
    };
}

const resetScore = () => {
    return {
        type: RESET
    };
}

const increment = (id, score) => {
    return {
        type: INCREMENT,
        payload: {
            id,
            score
        }
    };
}

const decrement = (id, score) => {
    return {
        type: DECREMENT,
        payload: {
            id,
            score
        }
    };
}

// initial state
const initialState = {
    matches: [
        {
            id: 1,
            score: 0,
        }
    ]
}

// reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MATCH:
            const newMatch = {
                id: state.matches.length + 1,
                score: 0,
            };

            return {
                ...state,
                matches: [
                    ...state.matches,
                    newMatch
                ]
            };

        case DELETE_MATCH:
            const filteredMatches = state.matches.filter(match => match.id !== action.payload.id);
            return {
                ...state,
                matches: filteredMatches,
            };

        case RESET:
            const resetScore = state.matches.map(match => ({...match, score: 0}));
            return {
                ...state,
                matches: resetScore,
            };

        case INCREMENT:
            const incrementScore = state.matches.map(match => {
                if (match.id === action.payload.id) {
                    return {
                        ...match,
                        score: match.score + action.payload.score,
                    };
                }
                return { ...match };
            });

            return {
                ...state,
                matches: incrementScore,
            };

        case DECREMENT:
            const decrementScore = state.matches.map(match => {
                if (match.id === action.payload.id) {
                    return {
                        ...match,
                        score: Math.max(match.score - action.payload.score, 0),
                    };
                }
                return { ...match };
            });

            return {
                ...state,
                matches: decrementScore,
            };

        default:
            return state;

    };
}

// create store
const store = Redux.createStore(reducer);

// display match function
const displayMatch = ({ id, score }) => {
    return `
        <div class="match">
            <div class="wrapper">
                <button class="lws-delete" data-match-id="${id}">
                    <img src="./image/delete.svg" alt="" />
                </button>
                <h3 class="lws-matchName">Match ${id}</h3>
            </div>
            <div class="inc-dec">
                <form class="incrementForm" data-match-id="${id}">
                    <h4>Increment</h4>
                    <input
                        type="number"
                        name="increment"
                        class="lws-increment"
                    />
                </form>
                <form class="decrementForm" data-match-id="${id}">
                    <h4>Decrement</h4>
                    <input
                        type="number"
                        name="decrement"
                        class="lws-decrement"
                    />
                </form>
            </div>
            <div class="numbers">
                <h2 class="lws-singleResult">${score}</h2>
            </div>
        </div>
    `;
}

// increment, decrement and delete handler function
const incrementDecrementAndDelete = () => {
    const incrementForms = document.querySelectorAll(".incrementForm");
    const decrementForms = document.querySelectorAll(".decrementForm");
    const deleteBtns = document.querySelectorAll(".lws-delete");

    incrementForms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const matchId = parseInt(this.dataset.matchId);
            const value = this.elements.increment.valueAsNumber;

            store.dispatch(increment(matchId, value));
        });
    });

    decrementForms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const matchId = parseInt(this.dataset.matchId);
            const value = this.elements.decrement.valueAsNumber;

            store.dispatch(decrement(matchId, value));
        });
    });

    deleteBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            const matchId = parseInt(this.dataset.matchId);
            store.dispatch(deleteMatch(matchId));
        });
    });
}

const render = () => {
    const { matches } = store.getState();
    allMatchesContainer.innerHTML = matches.map(match => displayMatch(match)).join("");
    incrementDecrementAndDelete();
}

// update ui initially
render();

// subscribe to the store
store.subscribe(render);

// evnet listeners
addMatchBtn.addEventListener("click", () => {
    store.dispatch(addMatch());
});

resetBtn.addEventListener("click", () => {
    store.dispatch(resetScore());
});
