import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Weather, {weatherCache} from "../Weather/Weather";
import Layout from "../Layout/Layout";
import CounterRedux from "../CounterRedux/CounterRedux";
import {ErrorBoundary} from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: any) {
    return (
        <div className="m-2 text-red-500">
            <p>❌ Fehler: {error.message}</p>
            <button
                className="mt-2 p-2 bg-gray-200 rounded"
                onClick={resetErrorBoundary}
            >
                Wiederholen
            </button>
        </div>
    );
}

export default function RouteContainer() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/weather' element={
                    <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                        onReset={() => {
                            weatherCache.clear();
                        }}
                    >
                        <Suspense fallback={<div>Loading ...</div>}>
                            <Weather/>
                        </Suspense>
                    </ErrorBoundary>
                }/>
                <Route path='/redux' element={<CounterRedux/>}/>

                <Route path='*' element={<Home/>}/>
            </Route>
        </Routes>
    );
}
