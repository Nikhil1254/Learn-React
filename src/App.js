import { useState } from "react";

function App() {
    let [count, setCount] = useState(0);

    const handleClick1 = () => {
        // it will get batch all line var setCount(0+1) i.e setCount(1)
        // asa batch hot and will update value to 1 and rerender
        // values don't update immidiatly , setCount is async our function will complete first then it will run setCount and update value and rerender
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }

    const handleClick2 = () => {
        // queue madhe lagta so last time chi value yete
        // ani render ekdach hoil for performance
        // eka nantar ek callback chalvel with updated prevCount and finally tyala set karnar
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        console.log(count);
    }

    console.log('render');
    return <>
        <h1>{count}</h1>
        <button onClick={handleClick2}>Update</button>
    </>
}

export default App;