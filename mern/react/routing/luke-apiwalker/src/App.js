import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link,
  useHistory,
  withRouter,
  Redirect
} from "react-router-dom";
import People from "./components/People"
import Planet from "./components/Planet"

function App() {

  let [term, setTerm] = useState("");
  let [id, setId] = useState("1");
  let [info, setInfo] = useState({});
  let [showInfo, setShowInfo] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
      <div className='container' style={{ width: "800px", border: "2px solid white" }}>
        <form action="" style={{ display: "flex", padding: "1em", justifyContent: "space-evenly", alignItems: "center"}}>
          <div>
            <label htmlFor="search-bar">Search For: </label>
            <select name="" id="search-bar" onChange={(e) => setTerm(e.target.value)}>
              <option value=" "> </option>
              <option value="people">people</option>
              <option value="planets">planets</option>
            </select>
          </div>
          <div>
            <label htmlFor="number">ID: </label>
            <input type="number" name="number" id="" onChange={(e) => setId(e.target.value)} />
          </div>
          <div>
            <button type="button" className='btn btn-dark buttonn'><Link to={`/${term}/${id}`}>Search</Link></button>
          </div>
        </form>
      </div>
      
      <Switch>
        <Route exact path="/people/:id">
          <People/>
        </Route>
        <Route exact path="/planets/:id">
          <Planet/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
