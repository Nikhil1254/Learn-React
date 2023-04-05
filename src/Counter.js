import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    }

    const decreament = () => {
        if (count > 0)
            setCount(count - 1);
    }

    return <>
        <div className="container text-center">
            <h1>{count}</h1>
            <button className="btn btn-warning" onClick={increament}>+</button>
            <button className="btn btn-success" onClick={decreament}>-</button>
        </div>
    </>
}

export default Counter;