import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import "./App.css";
// import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import ResponsiveAppBar from './components/ResponsiveAppBar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ResponsiveAppBar />
  <Router>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<Navigate to="/login" />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
  </Router>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

