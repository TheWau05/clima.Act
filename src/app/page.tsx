"use client";
import React, { useState } from "react";


export default function Home() {
    const WeatherApp = () => { 
      const [query, setQuery] = useState(""); 
  
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setQuery(e.target.value); 
      }; 
  
      return ( 
        <div className="flex flex-col items-center p-4"> 
          <h1 className="text-2xl font-bold mb-4">App de Clima</h1> 
          <input 
            type="text" 
            placeholder="Buscar ciudad..." 
            value={query} 
            onChange={handleSearch} 
            className="p-2 border rounded-lg w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" 
          /> 
        </div> 
      ); 
    }; // ← Aquí falta la llave de cierre de WeatherApp
  
    return <WeatherApp />; // Asegúrate de llamar al componente
  }
  