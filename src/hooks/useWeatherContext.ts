import Service from "../services";
import { OpenWeatherResponseType, Option, WeatherList } from "../interfaces";
import { useEffect, useState } from "react";

const defaultSelectedCity: Option = {
  value: 2759794,
  label: "Amsterdam",
};

export const useWeatherContext = () => {
  const [isLoading, setLoading] = useState(false);
  const [selectedCities, setSelectedCities] = useState<Option[]>([
    defaultSelectedCity,
  ]);
  const [weatherForecasts, setWeatherForecasts] = useState<
    OpenWeatherResponseType[]
  >([]);

  const fetchWeatherForecast = async () => {
    setLoading(true);
    setWeatherForecasts([]);
    try {
      for (const selectedCity of selectedCities) {
        const { data } = await Service.openWeatherForecast(selectedCity.value);
        const forecasts =
          data?.list?.map((forecast: WeatherList) => ({
            ...forecast,
            city: selectedCity.label,
          })) || [];

        setWeatherForecasts((prev) => [...prev, ...forecasts]);
      }
    } catch (error) {
      console.log("ERROR:: error while fetching forecasts");
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeatherForecast();
  }, [selectedCities]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isLoading,
    selectedCities,
    weatherForecasts,
    setSelectedCities,
    setWeatherForecasts,
    fetchWeatherForecast,
  };
};
