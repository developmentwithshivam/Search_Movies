import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Data: '',
  savedData: '',
};

const MovieData = createSlice({
  name: 'MovieData',
  initialState,
  reducers: {
    setData: (state,actions)=>{
        // console.log("This is Data",actions.payload);
        
    state.Data = actions.payload;
   },
   setsavedData: (state,actions)=>{
    state.savedData = actions.payload;
   }
  },
});

export const {setData} = MovieData.actions;
export default MovieData.reducer;
