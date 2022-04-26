import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import CheckOut from './Components/Pages/ServiceDetails/CheckOut';
import AddService from './Components/Pages/AddService/AddService';
import ManageService from './Components/Pages/ManageService/ManageService';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/home' element = {<Home/>}></Route>
        <Route path='/service/:serviceID' element = {<ServiceDetails/>}/>
        <Route path='/checkout' element= {
          <RequireAuth>
            <CheckOut/>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element= {
          <RequireAuth>
            <AddService/>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element= {
          <RequireAuth>
            <ManageService/>
          </RequireAuth>
        }></Route>
        <Route path='/about' element = {<About/>} ></Route>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
