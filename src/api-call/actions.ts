"use server";

export async function ApiWeatherData(place: string) {
  const getWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.WEATHER_K}&cnt=56`
    );
    const data = await response.json();
    return data;
  };
  return getWeatherData();
}

export async function ApiWeatherHandeChange(value: string) {
  const getCurrentLocation = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${process.env.WEATHER_K}`
    );
    const data = await response.json();
    return data;
  };
  return getCurrentLocation();
}

export async function ApiWeatherCurrentLocation(
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
