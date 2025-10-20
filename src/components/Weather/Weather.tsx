import React, {Suspense} from "react";
import {useFetch} from "../../hooks/useFetch";
import {Main} from "../../models/main";

const APP_ID = 'APPID=faf17d6bfe1477a97755d5134779e59c';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric';
export const url = `${apiUrl}&${APP_ID}`;

export default function Weather() {
    const {result} = useFetch<Main>(url);

    const temperatures = result
        ? result.main
        : null;

    return (
        <div className='m-2'>
            <p>aktuelle Temperatur: {temperatures?.temp}</p>
            <p>Min. Temperatur: {temperatures?.temp_min}</p>
            <p>Max. Temperatur: {temperatures?.temp_max}</p>
        </div>

    );
}
