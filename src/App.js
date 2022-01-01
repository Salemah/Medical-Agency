import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Home/services/services';
import Specialist from './Pages/Home/Specialist/Specialist';
import Notfound from './Pages/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/service">
         <Services></Services>
        </Route>
        <Route path="/doctor">
         <Specialist></Specialist>
        </Route>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route  path="*">
         <Notfound></Notfound>
        </Route>
      </Switch>
      </BrowserRouter>
    
  
    </div>
  );
}

export default App;
