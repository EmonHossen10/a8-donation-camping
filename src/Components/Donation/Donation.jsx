import { useEffect, useState } from "react";
 
import ShowDonation from "../ShowDonation/ShowDonation";

const Donation = () => {
  const [item, setItem] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(4);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("item"));
    if (savedItems) {
      setItem(savedItems);
    } else {
       
      setNoFound("Haven't donated yet !!!");
    }
  }, []);

  const handleShowCards=()=>{
    setIsShow(item.length)
  }

  return (
    <div>
      {noFound ? (
        <p className="md:text-4xl text-2xl  text-center font-bold mt-24" >{noFound}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 my-10 ">
          {item.slice(0,isShow).map((donation) => (
            <ShowDonation donation={donation} key={donation.id}></ShowDonation>
          ))}
        </div>
      )}


      {/* button  */}
      {
        isShow< item.length &&  <div className="flex justify-center ">
        <button
          onClick={ handleShowCards}
          className="bg-[#009444] text-white px-4 py-2 rounded-lg mb-4 "
        >
          See All
        </button>
      </div>
      }
    </div>
  );
};

export default Donation;
