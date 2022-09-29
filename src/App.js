import * as React from 'react';
import Home from './pages/Home';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import Link from "@mui/material/Link";
import "./App.css";



// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_LOCATIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.locations.map(({ id, name, description, photo }) => (
//     <div key={id}>
//       <h3>{name}</h3>
//       <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//       <br />
//       <b>About this location:</b>
//       <p>{description}</p>
//       <br />
//     </div>
//   ));
// }

export default function App() {
  return (
  <div className="nav-container">
       <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link component={RouterLink} to={`/login`} underline="hover" color="inherit">
              LogIn
            </Link>
          </li>
          <li>
            <Link component={RouterLink} to={`/`} underline="hover" color="inherit" >
              Home
            </Link>
          </li>
          <li>
            <Link component={RouterLink} to={`/signup`} underline="hover" color="inherit" >
              SignUp
            </Link>
          </li>
        </ul>
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      </div>
    </Router>
  </div>
  );
}
