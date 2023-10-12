import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useState } from "react";

const Home = () => {
 

  const [category,setCategory]=useState(useLoaderData());
   
  return (
    <div>
      <Banner setCategory={setCategory} ></Banner>
      <Cards category={category}></Cards>
    </div>
  );
};

export default Home;
