import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Products from "./pages/productsList";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" component={Products}></Route>
            </Switch>
        </Router>
    );
}

export default App;
