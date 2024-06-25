import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Register from "./components/register.js";
import NavBar from "./components/NavBar.js";
import Home from './components/Home.js';
import {Switch,Route} from "react-router-dom"
import Edit from "./components/Edit.js"
import Details from './components/Details.js';

function App() {
  return (
  <>
   <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />


    </Switch>
    

  </>
  );
}

export default App;
