import { useContext } from "react";
import GlobalInfo from "./globalContext";

function SuperChild() {

    const { color, setDay } = useContext(GlobalInfo);

    return <>
        <h1 style={{ color: color }}>This is Super Child component.</h1>
        <button onClick={() => setDay("Sunday")}>change Day</button>
    </>
}

export default SuperChild;