import React from "react";
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Weather from "../Weather/Weather";

export default function RouteContainer () {
  return (
      <Routes>
          <Route path="/" element={<Outlet/>}>
              <Route index element={<Home/>}/>
              <Route path='/weather' element={<Weather />} />

              <Route path='*' element={<Home />} />
          </Route>
      </Routes>
  );
}
