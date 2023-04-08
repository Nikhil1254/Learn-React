import { useRef, useState } from "react";

function Component() {
    const [flag, setFlag] = useState(true);

    return <>
        <div className="container text-center">
            {
                flag && <Child />
            }
            <br /><br />
            <button onClick={() => setFlag(!flag)}>Toggle Display</button>
        </div>

    </>
}


let item = 0;
function Child() {
    const [count, setCount] = useState(0);
    console.log(item);


    return <>
        <h1>count(state) : {count}</h1>
        <h2>item(useRef) : {item}</h2>
        <button className="mx-2" onClick={() => setCount(count + 1)}>Update count</button>
        <button className="mx-2" onClick={() => item++}>update item</button>
    </>
}

export default Component;