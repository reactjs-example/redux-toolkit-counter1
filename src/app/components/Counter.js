import { useDispatch, useSelector } from "react-redux"
import {  decrement, increment } from "../../features/mycounter/MyCounterSlice";
import { coinSelector } from "../store";


const Counter=()=>{

    const dispatch = useDispatch();
    const coin = useSelector(coinSelector);
    function incrementHandler(){
        console.log('value: ', coin);
        dispatch(increment())
    }

    function decrementHandler(){
        console.log('value2: ', coin);

        dispatch(decrement())
    }
    return <>
        <h1>Counter {coin}</h1>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
    </>
}

export default Counter