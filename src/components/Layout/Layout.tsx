import React from "react";
import {Link, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <nav className='bg-gray-500'>
                <ul className='flex flex-row ml-2'>
                    <li className='mr-6'>
                        <Link to='/'>Greetings</Link>
                    </li>
                    <li>
                        <Link to='/weather'>Weather</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}
