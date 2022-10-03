import * as React from "react";
import ReactDOM from "react-dom/client";
import {Link} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import "./App.css";
// import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import searchBreweries from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <NavList />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
 
    </Router>
  
);


function NavList() {
  return(
    <div className="nav-container">
      <Link to="/" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>Home</Link>
      <Link to="/login" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>SignIn</Link>
      <Link to="/signup" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>SignUp</Link>
      
    </div>
  )

}
