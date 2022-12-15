export type Option = {
  value: number;
  label: string;
};

export type OpenWeatherResponseType = {
  list: WeatherList[];
  message: number;
  cnd: string;
  cnt: number;
};

export type WeatherList = {
  city?: string;
  clouds: {
    all: number;
  };
  main: {
    temp: number;
  };
  weather: Weather[];
  wind: {
    speed: number;
  };
};

type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};
