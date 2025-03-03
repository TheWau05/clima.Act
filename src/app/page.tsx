"use client";
import React, { useState } from "react";

export default function Home() {
  const WeatherApp = () => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const API_KEY = "3a619f3cabba489789a224417252602"; // Guarda esto en variables de entorno en producción
    const API_URL = "http://api.weatherapi.com/v1/current.json";

    const fetchWeather = async () => {
      if (!query) return;

      try {
        const response = await fetch(`${API_URL}?key=${API_KEY}&q=${query}&aqi=no`);
        const data = await response.json();

        if (response.ok) {
          setWeather(data);
          setError(null);
        } else {
          setError(data.error.message);
          setWeather(null);
        }
      } catch (err) {
        setError("Error al obtener los datos.");
        setWeather(null);
      }
    };

    return (
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold mb-4">App de Clima</h1>
        <input
          type="text"
          placeholder="Buscar ciudad..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded-lg w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchWeather}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Buscar
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {weather && (
          <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-500">
            <h2 className="text-lg font-bold">{weather.location.name}, {weather.location.country}</h2>
            <p className="text-gray-700">Temperatura: {weather.current.temp_c}°C</p>
            <p className="text-gray-700">Condición: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="Weather icon" />
          </div>
        )}
      </div>
    );
  };

  return <WeatherApp />;
}
