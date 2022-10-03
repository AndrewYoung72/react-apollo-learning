import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";






const API_URL =
  "https://api.openbrewerydb.org/breweries?by_state=colorado&per_page=20";

export default function Home() {
  const [pubData, setPubData] = useState([]);
  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect (() => {
    searchGithub()
  }, [])
//"https://api.github.com/ussers/AndrewYoung72"

  const searchGithub = async (my_data) => {
    try {
      const response = await axios("https://api.github.com/ussers/AndrewYoung72");
      setMyData(response.data);
    } catch (error) {

    }
  }
  console.log(myData)
  if (loading) return "Loading...";
  if (error) return "Error..."
  

  const searchBreweries = async (by_state) => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setPubData(data);
    // console.log(data);
    // console.log(data[0].id);

    pubData.forEach((data) => {
      console.log(data);
    });
  };
  return (
    <div className="home-container">
      <aside className="search-container">
        <Button variant="outlined"
          onClick={() => {
            searchBreweries();
          }}
        >
          Render Data
        </Button>
        <Button variant="outlined"
          onClick={() => {
            searchGithub();
          }}
        >
          My Data
        </Button>
      </aside>
      <div className="card-container">
        {pubData.map((pubData, id) => (

            <Card  className="card" sx={{ minWidth: 225, margin: .5}} variant="outlined" >
            <CardContent key={id}>
              <Typography variant="h5" component="div" gutterBottom>
                {pubData.name}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {pubData.brewery_type}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {pubData.city}
              </Typography>
              <Typography variant="body2">
                {pubData.street}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

        ))}
      </div>
    </div>
  );
}
