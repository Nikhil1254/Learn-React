import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {

    return <>
        <BrowserRouter>
            <Nav />
            <div className="container text-center mt-3">
                <Switch>
                    <Route path='/' exact><Home /></Route>
                    <Route path='/contact'><Contact /></Route>
                    <Route path='/*' ><NotFound /></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </>
}

export default App;