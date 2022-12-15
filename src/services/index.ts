import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_OPEN_API_URL + "/2.5/forecast";

class Service {
  static async openWeatherForecast(id: number) {
    return axios({
      url: BASE_API_URL,
      params: {
        id,
        units: 'metric',
        appid: process.env.REACT_APP_OPEN_WEATHER_TOKEN
      },
      method: 'GET'
    })
  }
}

export default Service;