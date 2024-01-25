import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import BarraRicerca from "./SearchBar";
import RisultatiMeteo from "./ResultWeather";
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, setDay } from '../reducers/WeatherReduce';



/* funzione che gestiste entramebe le chiamate fetch */
function FetchWeather() {
   // Stati per gestire la città, i dati meteo e i dati dei giorni successivi
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { data: weather, day } = useSelector((state) => state.weather);


  /* prima fetch nel quale richiediamo i dati in base alla citta */
  const fetchSearch = async () => {
    try {
      setError(null);  // Azzera l'errore prima di fare la nuova ricerca
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=472fd5a8a4862dffcd7119a94ee5bc4a&units=metric`
      );
      const data = await response.json();
      
      /* setto uno stato condizionale per farmi arrivare i dati se la response è valida */
      if (response.ok) {
        dispatch(setWeatherData(data));
        fetchForecast(); // Avvia il recupero dei dati di previsione solo se la ricerca corrente ha avuto successo
      } else {
        setError("Città non trovata. Riprova con un altro nome.");
      }

      /* catcho gli errori facendo un console.log de''errore */

    } catch (error) {
      console.error("Errore nel recupero dei dati ", error);
      setError("Errore nel recupero dei dati.");    
    }
  };


/* seconda fetch nel quale richiediamo i dati in base alla citta dei giorni seguenti */
  const fetchForecast = async () => {
    try {

      /* nell'URL della fetch alla fine ho aggiunto "metric" cosi da farmi restituire i dati convertiti*/
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f64327af1492cb6b843fb2420be96e9&lang=en&units=metric`);
      const data = await response.json();
      dispatch(setDay(data));
      console.log(data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };
  // Funzione per gestire la ricerca quando l'utente effetuerà una ricerca + un controllo che la stringa sia maggiore di 2 caratteri
  const handleSearch = () => {
    if (city.length > 2) {
      /* richiamo le 2 funzioni */
      fetchSearch();
    }
  };

  return (
    <>
      <Container fluid>

        {/* richiamo il componente barra ricerca in cui passo i props per la gestione della ricerca delle citta  */}
        <BarraRicerca
          className="justify-content-center d-flex"
          city={city}
          handleSearch={handleSearch}
          setCity={setCity}
        />
      </Container>

      <Container className="d-flex justify-content-center">
        {/* setto un alert nel caso in cui la citta digitata dall'utente non esiste */}
        {error ? (
          <Alert variant="danger">
            {error}
          </Alert>
        ) : (
          <RisultatiMeteo
          /* props da passare al componente */
            city={city}
            setWeatherData={setWeatherData}
            day={day}
          />
        )}
      </Container>
    </>
  );
}

export default FetchWeather;
