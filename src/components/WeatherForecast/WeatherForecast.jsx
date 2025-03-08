import "./WeatherForecast.css";
import WeatherData from "../WeatherData/WeatherData";  // Import WeatherData
import WeatherIcon from "../WeatherIcon/WeatherIcon";  // Import WeatherIcon

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
    return (
        <div className="weather">
            {/* Weather Data (day, conditions, time) */}
            <WeatherData day={day} conditions={conditions} time={time} /> 

            {/* Weather Icon */}
            <WeatherIcon src={img} alt={imgAlt} />
        </div>

    );
};

export default WeatherForecast;

