import { createSlice } from '@reduxjs/toolkit';


/*ho definito uno slice WeatherReduce cosi da poter gestire lo stato in modo singolo e definito  */
const WeatherReduce = createSlice({
  name: 'weather',
  initialState: {

    /* ho definito lo stato iniziale con valori null */

    data: null,
    day: null, 
  },
  reducers: {  
    /* setWeather avrà lo stato corrente e avra come data il valore della azione payload */
    setWeatherData: (state, action) => {
      state.data = action.payload;
    },
     /* setDAY avrà come day il valore della azione payload */
    setDay: (state, action) => {  
      state.day = action.payload;
    },
  },
});


/* esporto entrame le azioni perche mi serviranno per gestire gli stati*/
export const { setWeatherData, setDay } = WeatherReduce.actions; 
export default WeatherReduce.reducer;