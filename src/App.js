import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
        <Switch>

        {/* <Route to="/productos/:id">
          <Producto/>
        </Route> */}

        <Route to="/admin">
          <Lista/>
        </Route>
        
          <Route to="/" exact>
            
          </Route>

        </Switch>


      </Router>
    </div>
  );
}

export default App;
