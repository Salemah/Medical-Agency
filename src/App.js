import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Home/services/services';
import Specialist from './Pages/Home/Specialist/Specialist';
import Notfound from './Pages/Notfound/Notfound';
import AuthProvider from './Context/AuthProvider';
import Servicedetails from './Pages/Home/Servicedetails/Servicedetails';
import Privateroute from './Pages/Login/PrivateRoute/Privateroute';
import Doctorapoinemnt from './Pages/Home/Doctorappointment/Doctorapoinemnt';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
     <AuthProvider>
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
        <Route path="/servicedetails/:id">
         <Servicedetails></Servicedetails>
        </Route>
        <Route path="/doctor">
         <Specialist></Specialist>
        </Route>
        <Route path="/doctorapointmnt/:did">
         <Doctorapoinemnt></Doctorapoinemnt>
        </Route>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route  path="*">
         <Notfound></Notfound>
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
      </BrowserRouter>
     </AuthProvider>
    
  
    </div>
  );
}

export default App;
