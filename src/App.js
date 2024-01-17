import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Customer from "./pages/Customer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
          <Route path="/customers" component={Customer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
