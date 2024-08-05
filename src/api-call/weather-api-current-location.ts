export default function ApiWeatherCurrentLocation(
  latitude: number,
  longitude: number
) {
  const getCurrentLocation = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_K}`
    );
    const data = await response.json();
    return data;
  };
  return getCurrentLocation();
}
