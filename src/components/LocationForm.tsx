import { useMapProvider } from '../provider/map-provider';
import { UnitType } from '../types';

export default function LocationForm() {
  const { locationFields, setLocationFields } = useMapProvider();
  const { latitude, longitude, unit } = locationFields;

  return (
    <>
      <div className='form-control'>
        <label htmlFor="lat">Latitude:</label>
        <input
          type="number"
          name="lat"
          step="0.01"
          required
          value={latitude}
          onChange={(e) => setLocationFields({ ...locationFields, latitude: Number(e.target.value) })}
        />
      </div>
      <div className='form-control'>
        <label htmlFor="lat">Longitude:</label>
        <input
          type="number"
          name="lng"
          step="0.01"
          required
          value={longitude}
          onChange={(e) => setLocationFields({ ...locationFields, longitude: Number(e.target.value) })}
        />
      </div>

      <div className="form-control">
        <label htmlFor="unit">Unit: </label>
        <select
          id="unit" name="unit"
          value={unit}
          onChange={(e) => setLocationFields({ ...locationFields, unit: e.target.value as UnitType })}
        >
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </select>
      </div>
    </>
  )
}
