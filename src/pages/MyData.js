import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";


export default function MyData() {
  const [data, setData] = useState(null);
  
  useEffect (() => {
    searchGithub();
  }, []);
//"https://api.github.com/ussers/AndrewYoung72"
  async function searchGithub() {
    try {
      const response = await axios("https://api.github.com/ussers/AndrewYoung72");
      setData(response.data)
    } catch (error) {

    }
  }
  console.log(data)
  return (
    <div className="mydata-container">
    
        <Button variant="outlined"
          onClick={() => {
            searchGithub();
          }}
        >
          Render Data
          </Button>
      <img src={data.avatar_url} alt="blah" />
      <p>{data.name}</p>
      <p>{data.bio}</p>
      <p>{data.login}</p>
      <p>{data.location}</p>
      <p>{data.public_repos}</p>
    </div>
  )
}