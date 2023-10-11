import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
  const datas = useLoaderData();
  // console.log(data)
  return (
    <div>
      <Banner></Banner>
      <Cards datas={datas}></Cards>
    </div>
  );
};

export default Home;
