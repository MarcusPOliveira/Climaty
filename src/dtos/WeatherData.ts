export default interface WeatherData {
  weather: [
    {
      main: string
      description: string
      icon: string
    },
  ]
  main: {
    temp: number
    temp_min: number
    temp_max: number,
    humidity: number
  }
  wind: {
    speed: number
  }
  sys: {
    country: string,
    sunrise: number,
    sunset: number,
  }
  name: string
};
