import { Link } from "react-router-dom";

const ShowDonation = ({ donation }) => {
  const { id, Picture, Title, Category, Category_bg, Description, Price } =
    donation;

  return (
    <>
      <section className="  flex flex-col md:flex-row    m-5">
        <div>
          <img
            className="object-cover w-full h-[280px] rounded-t-lg   md:w-48 md:rounded-none md:rounded-l-lg"
            src={Picture}
            alt=""
          />
        </div>

        <div
          style={{ backgroundColor: Category_bg + "30" }}
          className="flex flex-col justify-between p-4 leading-normal rounded-r-lg w-full  "
        >
          {/* badge */}
          <div
            style={{ color: Category_bg, backgroundColor: Category_bg + "30" }}
            className=" badge-square  px-2 py-1 font-semibold w-20 rounded  text-sm"
          >
            {Category}
          </div>
          <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Title}
          </h5>
          <p style={{ color: Category_bg }} className="font-bold">
            ${Price}.00
          </p>
          <Link to={`/cards/${id}`}>
            <button style={{backgroundColor:Category_bg}} className="text-white px-4 py-2 rounded-md" >View Details</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ShowDonation;
