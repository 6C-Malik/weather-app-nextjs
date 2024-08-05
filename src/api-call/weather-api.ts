

export default function ApiWeatherData(place: string) {
    const getWeatherData = async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.WEATHER_K}&cnt=56`
        );
        const data = await response.json();
        return data;
    };
    return getWeatherData();
}   