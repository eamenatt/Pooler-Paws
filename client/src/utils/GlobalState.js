import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_CAT,
  REMOVE_CAT,
  UPDATE_CATS,
  ADD_CAT,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING,
  SET_CURRENT_USER
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
        loading: false
      };

    case SET_CURRENT_CAT:
      return {
        ...state,
        currentCat: action.currentCat,
        loading: false
      };

    case UPDATE_CATS:
      return {
        ...state,
        cats: action.cats,
        loading: false
      };

    case ADD_CAT:
      return {
        ...state,
        cats: [action.cat, ...state.cats],
        loading: false
      };

    case REMOVE_CAT:
      return {
        ...state,
        cats: state.cats.filter((cat) => {
          return cat._id !== action._id;
        })
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.cat, ...state.favorites],
        loading: false
      };

    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        loading: false
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((cat) => {
          return cat._id !== action._id;
        })
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentUser: {
      _id: 0,
      username: "",
      email: "",
      cats: []
    },
    cats: [],
    currentCat: {
      _id: 0,
      name: "",
      age: "",
      details: "",
      picture: "",
      availability: true
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
