import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import {useEffect} from 'react';
import {auth} from './firebase';
import {useStateValue} from './store/StateProvider';
import Payment from './components/payment/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/orders/Orders';

const promise = loadStripe(
  'pk_test_51I6UpoDIaoPRpJEDNsjp7Yhs1AO2CtZafoayKlYW4PatfYEueUpCGid9J5RGxo5Oi0KzDAEUteoumFjQvAZrKpeh00FPjXT5Np'
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in/ user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/prime">
            <Header />
            PRIME PAGE
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
