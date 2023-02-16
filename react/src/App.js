import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Register from './component/Register';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route,BrowserRouter } from "react-router-dom";
import Usercomponent from './component/Usercomponent';






function App() {
  return (
  
    <BrowserRouter>
      <Header />
      <Routes>
          <Route exact path="/Add_user" element= {<Usercomponent/>} />
          <Route exact path="/Add_user" element= {<Usercomponent/>} />
          <Route exact path="/" element= {<Register/>} />
          <Route path="/Login" element= {<Login/>} />
      </Routes>
      {/* <Register />
      <Login /> */}

    </BrowserRouter>
  );
}

export default App;
