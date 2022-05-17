import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ProductForm from './components/ProductForm';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Product Manager</h1>
    <Switch>
      <Route exact path="/">
        <ProductForm/>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
