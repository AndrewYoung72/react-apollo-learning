import React from "react";
import Button from '@mui/material/Button';


const API_URL = "https://api.openbrewerydb.org/breweries?by_state=colorado&per_page=20";

export default function Home() {

  const searchBreweries = async (title) => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <h1>Home page</h1>
      <Button onClick={() => {
        searchBreweries();
      }}>Search</Button>
    </div>
  );
}
