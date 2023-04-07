import { useRef } from 'react';
/**
 * 1. we can directly access elements DOM using useRef
 * 2. we should avoid directly manipulating DOM it will impact app performance
 * 3. Whenever it's must to use then only use that, try to avoid direct DOM manipulation
 * 
 */

function App() {

    const inputRef = useRef(null);

    const handleClick = () => {
        // inputRef.current - DOM of input field
        console.log(inputRef.current.value);
        inputRef.current.value = inputRef.current.value.toUpperCase();
        inputRef.current.style.color = "white";
        inputRef.current.style.backgroundColor = "tomato";
    }

    return <>
        <div className="container text-center">
            <h1>useRef example</h1>
            <br />
            <input ref={inputRef} type="text" placeholder='Enter Name' />
            <br /><br />
            <button onClick={handleClick} className='btn btn-success'>Submit</button>
        </div>
    </>
}

export default App;