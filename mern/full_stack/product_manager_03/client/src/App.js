import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import ShowProduct from './components/ShowProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      
    <Switch>
      <Route exact path="/">
      <h1>Product Manager</h1>
        <ProductForm></ProductForm>
        <hr/>
        <AllProducts></AllProducts>
      </Route>
      <Route exact path="/products/:_id">
        <ShowProduct></ShowProduct>
      </Route>
      <Route exact path="/products/:_id/edit">
        <EditProduct></EditProduct>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
