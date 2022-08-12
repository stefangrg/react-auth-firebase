import { useState, useEffect } from "react";

function Counter(){

    const [counter,setCounter] = useState(0);

    useEffect(() => {
        console.log('Counter changed!');
    },[counter]);

    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <span>{counter}</span>
            <button onClick={handleIncrement}>+</button>
        </>
    );

    function handleIncrement(){
        setCounter((prevCount) => prevCount + 1);
    }

    function handleDecrement(){
        setCounter((prevCount) => prevCount - 1);
    }
}

export default Counter;