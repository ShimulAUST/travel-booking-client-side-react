
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import ServiceAdd from './components/SeviceAdd/ServiceAdd';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingService from './components/BookingService/BookingService';
import ManageBookings from './components/ManageBookings/ManageBookings';
import MyBookings from './components/MyBookings/MyBookings';
import Appointment from './components/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/addService">
              <ServiceAdd></ServiceAdd>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:_id">
              <BookingService></BookingService>
            </PrivateRoute>
            <PrivateRoute path="/manageBookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
