import 'bootstrap/dist/css/bootstrap.min.css';
import FetchWeather from './components/Fetch';
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {
 

  return (
    <>
    <Provider store={store}>
      <FetchWeather/>
      </Provider>
    </>
  )
}

export default App