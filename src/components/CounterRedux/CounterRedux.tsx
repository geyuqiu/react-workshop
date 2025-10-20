import React from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "../../redux/store";
import {decrement, increment, selectCount} from "../../redux/features/counterSlice";

export default function CounterRedux () {
  return (
      <Provider store={store}>
        <Incrementer />
      </Provider>
  );
}

const Incrementer = () => {
    const currentCount = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter: {currentCount}</h1>
            <button onClick={() => dispatch(increment())} className="border-2">+</button>
            <button onClick={() => dispatch(decrement())} className="border-2">-</button>
        </>
    )
}
