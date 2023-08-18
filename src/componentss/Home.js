import React, { useEffect, useState } from "react";
import "./style.css";
import SinglePlant from "./SinglePlant";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://house-plants2.p.rapidapi.com/all-lite",
  headers: {
    "X-RapidAPI-Key": "168d11b5d2mshd055e9b0caf6dcbp116ae6jsnab68ce2b8dce",
    "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
  },
};

const Home = () => {
  const [PlantName, setPlantName] = useState();
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    const plantsArray = [...Array(20)].map(() => ({
    }));

    console.log(plantsArray);
    // var vd = JSON.parse(plantsArray);

  }, []);
  return (
    <div className="home">
      <SinglePlant />
      {/* {plantsArray.map((prod) => (
        <div></div>
      ))} */}
    </div>
  );
};

export default Home;
