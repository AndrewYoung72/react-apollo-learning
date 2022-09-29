// import { useQuery, gql } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Link from '@mui/material/Link';


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
    <Router>
       <div className="navbar">
        <ul>
          <li>
            <Link component={RouterLink} to={`/login`} underline="hover" >LogIn</Link>
          </li>
          <li>
            <Link component={RouterLink} to={`/`} underline="hover" >Home</Link>
          </li>
          <li>
            <Link component={RouterLink} to={`/signin`} underline="hover" >SignIn</Link>
          </li>
        </ul>
      </div>
        <Routes>
          <Route path="/" element={<Home />} >
          </Route>
          <Route path="/login" element={<Login />}> 
          </Route>
          <Route path="/signin" element={<SignIn />}> 
          </Route>
        </Routes>
    </Router>
  );
}
