export default function ApiWeatherHandeChange(value: string) {
  const getCurrentLocation = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${process.env.WEATHER_K}`
    );
    const data = await response.json();
    return data;
  };
  return getCurrentLocation();
}
