const Banner = () => {
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
            className="md:py-2 md:pr-24 md:pl-3 pl-3 "
            type="text"
            placeholder="Search here...."
          />
          <button className="bg-[#FF444A] text-white md:px-6 md:py-2 px-2 rounded-r-md md:rounded-r-lg"> 
            Search 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
