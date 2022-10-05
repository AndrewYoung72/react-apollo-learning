import React, { useEffect, useState } from "react";
import axios from "axios";



const API_URL =
"https://api.github.com/users/AndrewYoung72";

export default function MyData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios(API_URL);
      setData(response.data)
    } catch (error) {
      setError(error)
    }
    setLoading(false);
  }
  console.log(data)

  if (loading) return "Loading...";
  if (error) return "Error..";
 
  return (
    <div className="mydata-container">
      <img src={data.avatar_url} alt="blah" />
      <p>Name: {data.name}</p>
      <p> Bio: {data.bio}</p>
      <p> GitHub: {data.login}</p>
      <p> Home: {data.location}</p>
      <p> Repos: {data.public_repos}</p>
    </div>
  )
}