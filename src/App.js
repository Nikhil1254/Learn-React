import { useRef } from "react";
import { useState } from "react";

/**
 * 1. it does not cause rerender if it's value changed
 * 2. It value is stored in current property, item.current
 * 3. on re-render because of props or state change, it's value does not reset again it will preserve this value, if we have normal variable then it's value will reset on every re-render.
 * 4. So when we don't want a variable to make state and we also want it's value to be preserved when re-render happens we can use useRef like this
 * 
 * question - why we don't use normal variable outside component then ?
 * see component.js example to understand it
 */


function App() {
    const [flag, setFlag] = useState(true);

    return <>
        <div className="container text-center">
            {
                flag && <Child />
            }
            <br /><br />
            <button onClick={()=>setFlag(!flag)}>Toggle Display</button>
        </div>

    </>
}


function Child() {
    const [count, setCount] = useState(0);
    let item = useRef(0);
    console.log(item);


    return <>
        <h1>count(state) : {count}</h1>
        <h2>item(useRef) : {item.current}</h2>
        <button className="mx-2" onClick={() => setCount(count + 1)}>Update count</button>
        <button className="mx-2" onClick={() => item.current++}>update item</button>
    </>
}

export default App;