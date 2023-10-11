import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singleData = data.find((item) => item.id == id);

  const { Picture, Title, Category, Category_bg, Description, Price } =
    singleData;

    // local storage work start
    const handleAdd=()=>{
        
    }

  return (
    <>
      <h1>This is card details {id} </h1>

      <div className="w-10/12 mx-auto my-10 relative ">
        <img className="w-full  h-[600px] " src={Picture} alt="" />
        <div className="button absolute bottom-0 p-8 bg-opacity-60  bg-stone-700 w-full">
          <button
            style={{ backgroundColor: Category_bg }}
            className="btn text-white"
            onClick={handleAdd}
          >
            Donate ${Price}
          </button>
        </div>
      </div>
      <div className="w-10/12 mx-auto my-10" >
        <h2 className="font-bold  text-3xl my-4">{Title}</h2>
        <p className="leading-7 text-justify">{Description}</p>
      </div>
    </>
  );
};

export default CardDetails;
