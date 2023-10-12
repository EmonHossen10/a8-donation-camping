import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Banner = ({ setCategory }) => {
  const allData = useLoaderData();
  const searchRef = useRef();


  
  const handleSubmit = () => {
    const search = searchRef?.current?.value.toLowerCase();

    const filterData = allData.filter((item) =>
      item.Category.toLowerCase().includes(search)
    );

    if (filterData.length > 0) {
      toast.success(`Total ${filterData.length} category Found`);
      setCategory(filterData);
    } else {
      toast.error("inValid search");
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/1fRsHcX/banner.png)" }}
    >
      <div className="hero-overlay  first-letter: bg-opacity-90 bg-white "></div>

      <div className="hero-content flex flex-col text-center text-neutral-content">
        <div className="text-black md:text-3xl lg:text-4xl font-bold md:mb-4 ">
          <p>I Grow By Helping People In Need</p>
        </div>

        {/* search  part  */}
        <div>
          <input
            className="md:py-2  text-black md:pr-24 md:pl-3 pl-3 "
            ref={searchRef}
            defaultValue={""}
            type="text"
            placeholder="Search here...."
          />
          <button
            onClick={handleSubmit}
            className="bg-[#FF444A] text-black  md:px-6 md:py-2 px-2 rounded-r-md md:rounded-r-lg"
          >
            Search
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Banner;
