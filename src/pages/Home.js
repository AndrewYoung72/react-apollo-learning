import React, { useState } from "react";
import Button from "@mui/material/Button";

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
    })

  }
  return (
    <div>
      {pubData.map((pubData, id) => (
        <div key={id}>
          <p>{pubData.name}</p>
          <p>{pubData.city}</p>
          <p>{pubData.street}</p>
          <p>{pubData.brewery_type}</p>
        </div>
      ))}
      <h1>{pubData.name}</h1>
      <Button
        onClick={() => {
          searchBreweries();
        }}
      >
        Search
      </Button>
    </div>
  );
}
