
import { configureStore } from '@reduxjs/toolkit'
import WeatherReduce from '../reducers/WeatherReduce';

 

const store = configureStore ({
  reducer: {
     
    weather: WeatherReduce,          
  },
});

export default store;