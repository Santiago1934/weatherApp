import React from "react";

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                    { city.name ? 
                    
                    <div className="info">
                        <h2>{city.name}</h2>
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div> : <h2>No hay detalles para mostrar</h2> }
            </div>
        </div>
    )
} 
