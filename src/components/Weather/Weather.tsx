import React, {useEffect, useState} from "react";
import {Temperatures} from "../../models/temperatures";


const APP_ID = 'APPID=faf17d6bfe1477a97755d5134779e59c';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Munich,de&units=metric';
export const url = `${apiUrl}&${APP_ID}`;

export default function Weather() {
    const [temperatures, setTemperatures]
        = useState<Temperatures | null>(null);

    useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(t => setTemperatures(t.main))
        }, []
    )

    return (
        <div className='m-2'>
            <p>aktuelle Temperatur: {temperatures?.temp}</p>
            <p>Min. Temperatur: {temperatures?.temp_min}</p>
            <p>Max. Temperatur: {temperatures?.temp_max}</p>
        </div>

    );
}
