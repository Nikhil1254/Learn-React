import { useState } from "react";
import GlobalInfo from "./globalContext";
import Child from "./Child";

function App() {
    const [color, setColor] = useState('lightblue');
    const [day, setDay] = useState('Monday')

    return <>
        <GlobalInfo.Provider value={{ color: color,setDay : setDay }}>
            <div className="container text-center">
                <h1>Parent Component - {day}</h1>
                <Child />
            </div>
        </GlobalInfo.Provider>
    </>
}

export default App;