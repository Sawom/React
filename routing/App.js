import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import Header from './Components/Header/Header';
import FriendDetails from './Components/friendDetails/FriendDetails';
import Culture from './Components/Culture/Culture';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          {/* home page */}
          <Route path='/home'>
              <Home></Home>
          </Route>
          {/* friends page */}
          <Route path='/friends' >
              <Friends></Friends>
          </Route>
          <Route path='/friend/:friendId' >
            <FriendDetails></FriendDetails>
          </Route>
          {/* about page */}
          <Route exact path='/about' >
            <About></About>
          </Route>
          {/* culture */}
          <Route exact path='/about/culture' >
            <Culture></Culture>
          </Route>
          {/* not found */}
          <Route path='*' >
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
