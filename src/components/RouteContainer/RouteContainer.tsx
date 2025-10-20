import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Weather from "../Weather/Weather";
import Layout from "../Layout/Layout";
import CounterRedux from "../CounterRedux/CounterRedux";

export default function RouteContainer () {
  return (
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/weather' element={<Weather />} />
              <Route path='/redux' element={<CounterRedux />} />

              <Route path='*' element={<Home />} />
          </Route>
      </Routes>
  );
}
