import './App.css';
import { IoIosMenu, IoMdClose } from "react-icons/io";
import WeatherDisplay from './components/WeatherDisplay';
import MapDisplay from './components/MapDisplay';
import { useMapProvider } from './provider/map-provider';
import LocationForm from './components/LocationForm';

const App: React.FC = () => {
  const { locationDetails, setLocationDetails } = useMapProvider();

  return <div className='app'>
    {!locationDetails ? (
      <div className="field-btn-wrap" onClick={() => setLocationDetails(!locationDetails)}>
        <IoIosMenu className='icon' />
        <span className='text-muted'>Find location....</span>
      </div>
    ) : (
      <div className="field-wrap">
        <div className="field-wrap-heading">
          <h3>Weather map app</h3>
          <IoMdClose className='icon' onClick={() => setLocationDetails(!locationDetails)} />
        </div>
        
        <LocationForm />
        <WeatherDisplay />
      </div>
    )}

    <MapDisplay />
  </div>
}

export default App;
