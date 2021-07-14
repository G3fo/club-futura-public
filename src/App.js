import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Products from "./pages/productsList";
import Home from "./pages/home";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/artists" component={Products}></Route>

                <Route path="/" component={Home}></Route>
            </Switch>
        </Router>
    );
}

export default App;
