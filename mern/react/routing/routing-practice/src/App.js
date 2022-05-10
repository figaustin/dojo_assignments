import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link 
} from "react-router-dom";
import Home from './components/Home'
import Input from "./components/Input"

function App() {
  return (
    <BrowserRouter>
    

    <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/:input">
          <Input></Input>
        </Route>
        <Route exact path="/:input/:textcolor/:bgcolor">
          <Input></Input>
        </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
