import { useState, useEffect } from "react";
import { fetchWeatherData } from "../api/weatherApi";

const useLocation = () => {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("Loading...");
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeatherData();
        setTemperature(data.main.temp);
        setLocation(data.name);
        setDescription(
          data.weather[0].description.charAt(0).toUpperCase() +
            data.weather[0].description.slice(1)
        );
      } catch (err) {
        setError(err.message);
        setTemperature(null);
        setDescription("Error!");
      }
    };

    getWeather();
  }, []);

  return { temperature, description, location, error };
};

export default useLocation;
