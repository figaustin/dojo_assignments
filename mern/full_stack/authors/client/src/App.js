import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Authors from "./components/Authors"
import AuthorForm from "./components/AuthorForm"
import EditForm from './components/EditForm';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <Authors></Authors>
              </Route>
              <Route exact path="/new">
                  <AuthorForm></AuthorForm>
              </Route>
              <Route exact path="/edit/:_id">
                <EditForm></EditForm>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
