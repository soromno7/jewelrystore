import { Header } from "./components/Header/header.js";
import { Nav} from "./components/Nav/nav.js";
import { Content } from './components/Content/content.js';
import { Line } from "./components/Line/Line.js";
import { Footer } from "./components/Footer/Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Discount } from "./components/Pages/Discount.js";
import { Cart } from "./components/Pages/Cart/Cart.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./components/Redux/reducer.js";
import "./fonts/style.scss";
import './App.css';

const store = createStore(reducer);

store.getState()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header/>
          <Nav/>
          <Switch>
            <Route exact path="/discount">
              <Discount/>
            </Route>
            <Route exact path="/rings">
              <Discount/>
            </Route>
            <Route exact path="/cart">
              <Cart/>
            </Route>
            <Route path="/">
              <Content/>
            </Route>
          </Switch>
          <Footer/>
        </>
      </Router>
    </Provider>
  );
}

export default App;
