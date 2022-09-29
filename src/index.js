import * as React from "react";
import ReactDOM from "react-dom/client";
import {Link} from "react-router-dom";
// import Home from './pages/Home';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import "./App.css";
// import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    // <nav className="nav-container">
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/login">Login</Link>
    //     </li>
    //     <li>
    //       <Link to="/sigup">Signup</Link>
    //     </li>
    //   </ul>
    // </nav>
    <Router>
      <NavList />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  );
}
// function SignUp() {
//   return (
//     <div>
//       <h1>Signup Route</h1>
//     </div>
//   );
// }
// function Login() {
//   return (
//     <div>
//       <h1>Login Route</h1>
//     </div>
//   );
// }
function NavList() {
  return(
    <div className="nav-container">
      <Link to="/" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>Home</Link>
      <Link to="/login" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>SignIn</Link>
      <Link to="/signup" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>SignUp</Link>
    </div>
  )

}
