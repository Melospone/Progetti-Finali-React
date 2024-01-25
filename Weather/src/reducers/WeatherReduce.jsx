import { createSlice } from '@reduxjs/toolkit';

const WeatherReduce = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    day: null, 
  },
  reducers: {  
    setWeatherData: (state, action) => {
      state.data = action.payload;
    },
    setDay: (state, action) => {  
      state.day = action.payload;
    },
  },
});

export const { setWeatherData, setDay } = WeatherReduce.actions; 
export default WeatherReduce.reducer;