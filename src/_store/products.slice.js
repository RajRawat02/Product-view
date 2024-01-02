import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create slice

const name = 'product';
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports

export const productActions = { ...slice.actions, ...extraActions };
export const productsReducer = slice.reducer;

// implementation

function createInitialState() {
  return {
    products: {},
  };
}

function createExtraActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL}/products`;

  return {
    getAll: getAll(),
  };

  function getAll() {
    return createAsyncThunk(
      `${name}/getAll`,
      async () => await axios.get(baseUrl)
    );
  }
}

function createExtraReducers() {
  return (builder) => {
    getAll();

    function getAll() {
      var { pending, fulfilled, rejected } = extraActions.getAll;
      builder
        .addCase(pending, (state) => {
          state.products = { loading: true };
        })
        .addCase(fulfilled, (state, action) => {
          state.products = action.payload;
        })
        .addCase(rejected, (state, action) => {
          state.products = { error: action.error };
        });
    }
  };
}
