import React, { useEffect, useState } from "react";
import "./style.css";
import SinglePlant from "./SinglePlant";

const Home = () => {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://house-plants2.p.rapidapi.com/all-lite', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'house-plants2.p.rapidapi.com',
        'x-rapidapi-key': '168d11b5d2mshd055e9b0caf6dcbp116ae6jsnab68ce2b8dce'
      }
    })
      .then(response => response.json())
      .then(data => setPlants(data));
  }, []);

  const firstTwentyPlants = plants.slice(0, 20);

  return (
    <div className="home">
      <SinglePlant plants={firstTwentyPlants}/>
    </div>
  );
};

export default Home;
