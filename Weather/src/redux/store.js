import { configureStore } from '@reduxjs/toolkit'
import WeatherReduce from '../reducers/WeatherReduce';

 
/* definizione della root che contiene il reducer asseganto a weather(la chiave) */
const store = configureStore ({
  reducer: {
     
    weather: WeatherReduce,          
  },
});


/* esporto lo store cosi da averlo visibile per tutta l'App */
export default store;