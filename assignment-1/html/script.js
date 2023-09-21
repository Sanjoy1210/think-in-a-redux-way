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
const addMatch = (payload) => {
    return {
        type: ADD_MATCH,
        payload
    };
}

const deleteMatch = (payload) => {
    return {
        type: DELETE_MATCH,
        payload
    };
}

const resetScore = () => {
    return {
        type: RESET
    };
}

const increment = (payload) => {
    return {
        type: INCREMENT,
        payload
    };
}

const decrement = (payload) => {
    return {
        type: DECREMENT,
        payload
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
            return {
                ...state,
                matches: [
                    ...state.matches,
                    action.payload
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

    }
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

            store.dispatch(increment({id: matchId, score: value}));
        });
    });

    decrementForms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const matchId = parseInt(this.dataset.matchId);
            const value = this.elements.decrement.valueAsNumber;

            store.dispatch(decrement({ id: matchId, score: value }));
        });
    });

    deleteBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const matchId = parseInt(this.dataset.matchId);
            store.dispatch(deleteMatch({ id: matchId }));
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

// event listeners
addMatchBtn.addEventListener("click", () => {
    const state = store.getState();
    const id = Math.max(state.matches.length, state.matches[state.matches.length - 1].id + 1);
    store.dispatch(addMatch({ id, score: 0 }));
});

resetBtn.addEventListener("click", () => {
    store.dispatch(resetScore());
});
