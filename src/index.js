import * as React from "react";
import ReactDOM from "react-dom/client";
import {Link} from "react-router-dom";
import Home from './pages/Home';
import MyData from "./pages/MyData";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import "./App.css";
// import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Router>
      <NavList />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mydata" element={<MyData />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
    </ApolloProvider>
);


function NavList() {
  return(
    <div className="nav-container">
      <Link to="/" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>Home</Link>
      <Link to="/login" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>SignIn</Link>
      <Link to="/signup" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>SignUp</Link>
      <Link to="/mydata" style={{padding: 25, textDecoration: 'none', color:"white", fontWeight:"bold", fontSize:"large"}}>MyData</Link>
      
    </div>
  )

}
