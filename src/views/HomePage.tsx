import React, { useMemo } from "react";
import { MultipleSelect } from "../components/Select";
import ReactDataTable from "../components/table";
import { cities } from "../constants";
import { useWeatherContext } from "../hooks/useWeatherContext";
import { Option, WeatherList } from "../interfaces";
const WEATHER_ICON_URL = process.env.REACT_APP_OPEN_WEATHER_ICON_URL;

function HomePage() {
  const {
    isLoading,
    selectedCities,
    weatherForecasts,
    setSelectedCities,
  } = useWeatherContext();

  const weatherTableColumns = useMemo(
    () => [
      {
        name: "City",
        selector: (row: WeatherList) => row.city,
        grow: 2,
      },
      {
        name: "Temp",
        cell: ({ main }: WeatherList) => <div>{main.temp} &#8451;</div>,
        selector: ({ main }: WeatherList) => main.temp,
        sortable: true,
      },
      {
        name: "Wind Speed",
        sortable: true,
        center: true,
        selector: (row: WeatherList) => row.wind.speed,
      },
      {
        name: "Weather",
        center: true,
        cell: ({ weather }: WeatherList) => (
          <>
            <img
              src={`${WEATHER_ICON_URL}/${weather?.[0]?.icon}.png`}
              alt="icon"
              width={40}
            />{" "}
            {weather.length
              ? `${weather?.[0]?.main} - ${weather?.[0]?.description}`
              : "N/A"}
          </>
        ),
      },
    ],
    []
  );

  const onChange = (options: Option[]) => {
    setSelectedCities(options);
  };

  return (
    <div className="container">
      <h2 className="text-center">Weather Forecase App for Upcoming 5 days</h2>

      <MultipleSelect
        defaultValue={selectedCities}
        isMulti={true}
        options={cities}
        onChange={onChange}
      />
      <ReactDataTable
        title={"Weather forecast daily"}
        pagination
        data={weatherForecasts}
        progressPending={isLoading}
        columns={weatherTableColumns}
      />
    </div>
  );
}

export default HomePage;
