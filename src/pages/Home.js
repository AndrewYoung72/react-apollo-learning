import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const API_URL =
  "https://api.openbrewerydb.org/breweries?by_state=colorado&per_page=20";

export default function Home() {
  const [pubData, setPubData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async (by_state) => {
  //     const response = await fetch(`${API_URL}`);
  //     const data = await response.json();
  //     setPubData(data.slice(0, 20));
  //   };
  //   fetchData();
  // }, []);
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
      <div className="search-container">
        <Button variant="outlined"
          onClick={() => {
            searchBreweries();
          }}
        >
          Render Data
        </Button>
      </div>
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
