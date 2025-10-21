import React, {use} from "react";

const APP_ID = 'APPID=df';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric';
export const url = `${apiUrl}&${APP_ID}`;

export const weatherCache = new Map<string, Promise<any>>();

function fetchWeatherResource(url: string) {
    if (!weatherCache.has(url)) {
        const promise = fetch(url).then(res => {
            if (!res.ok) throw new Error(`Request failed: ${res.status}`);
            return res.json();
        });
        weatherCache.set(url, promise);
    }
    return weatherCache.get(url)!;
}

export default function Weather() {
    const data = use(fetchWeatherResource(url));
    const { temp, temp_min, temp_max } = data.main;
    return (
        <div>
            <p>aktuelle Temperatur: {temp}</p>
            <p>Min. Temperatur: {temp_min}</p>
            <p>Max. Temperatur: {temp_max}</p>
        </div>
    );
}
