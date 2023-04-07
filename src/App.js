import { useReducer } from "react";
import { countReducer } from "./reducers";

function App() {

    const [count, dispatch] = useReducer(countReducer, 0);

    console.log("render");
    return <>
        <div className="container text-center mt-2">
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })} className="btn btn-success mx-1 px-3">+1</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })} className="btn btn-warning mx-1 px-3">-1</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })} className="btn btn-success mx-1 px-3">+5</button>

            <button onClick={() => dispatch({ type: "MULTIPLY", payload: 2 })} className="btn btn-warning mx-1 px-3">x2</button>
            <button onClick={()=>dispatch({type:"RESET"})} className="btn btn-danger">
                Reset
            </button>
        </div>
    </>
}

export default App;