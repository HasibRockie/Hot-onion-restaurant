import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Signup from './Pages/Signup/Signup';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login';
import FoodItems from './Pages/FoodItems/FoodItems';
import Footer from './Components/Footer/Footer';
import Food from './Pages/Food/Food';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          
          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/signup'>
            <Signup></Signup>
          </Route>

          <Route exact path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </Route>
          
          <Route exact path='/items/:slug'>
            <Food></Food>
          </Route>

          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='/items'>
            <FoodItems></FoodItems>
          </Route>

          <Route exact path='/items/:food'>
            <FoodItems></FoodItems>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
