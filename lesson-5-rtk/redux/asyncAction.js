const { createStore, applyMiddleware } = require("redux");
const fetch = require("node-fetch");
const thunkMiddleware = require("redux-thunk");

// initial State
const initialState = {
  loading: false,
  posts: [],
  error: '',
};

// action creators
const fetchPostsRequested = () => {
  return {
    type: "posts/requested",
  };
}

const fetchPostsSucceeded = (posts) => {
  return {
    type: "posts/succeeded",
    payload: posts,
  };
}

const fetchPostsFailed = (err) => {
  return {
    type: "posts/failed",
    payload: err,
  };
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        posts: [],
        error: ''
      };
    
    case "posts/succeeded":
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ''
      };
    
    case "posts/failed":
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload.message
      };
  
    default:
      return state;
  }
}

// fetch posts
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequested());

    try {
      const res = await fetch("https://jsonplaceholder.typicodes.com/posts?_limit=5");
      const posts = await res.json();
      dispatch(fetchPostsSucceeded(posts));
    } catch (error) {
      dispatch(fetchPostsFailed(error));
    }
  }
}

// create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(fetchPosts());
