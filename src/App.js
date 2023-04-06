import { useReducer } from "react";

function App() {

    const [count, dispatch] = useReducer(countReducer, 0);

    function countReducer(prevCount, action) {
        switch (action.type) {
            case "INCREMENT":
                return prevCount + action.payload;
            case "DECREMENT":
                return prevCount > 0 ? prevCount - action.payload : prevCount;
            default:
                return count;
        }
    }

    return <>
        <div className="container text-center mt-2">
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })} className="btn btn-success mx-1 px-3">+1</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })} className="btn btn-warning mx-1 px-3">-1</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })} className="btn btn-success mx-1 px-3">+5</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })} className="btn btn-warning mx-1 px-3">-5</button>
        </div>
    </>
}

export default App;