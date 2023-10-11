import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singleData = data.find((item) => item.id == id);

  const { Picture, Title, Category_bg, Description, Price } = singleData;

  // local storage work start
  const handleAdd = () => {
    // toast("Donated Successfully");

    const addedItem=[];

    const myItem = JSON.parse(localStorage.getItem("item"));

    //  when nothing add in lc 
    if(!myItem){
        addedItem.push(singleData);
        localStorage.setItem("item",JSON.stringify(addedItem));
        toast("Donated Successfully");
    }

    else{

        const isExists=myItem.find(item=>item.id == id );
         
        if(!isExists){

            addedItem.push(...myItem,singleData);
            localStorage.setItem("item",JSON.stringify(addedItem));
            toast("Donated Successfully");

        }
        else{
            toast.warning("Already Donated ")
        }



    }



  };

  return (
    <>
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
      <div className="w-10/12 mx-auto my-10">
        <h2 className="font-bold  text-3xl my-4">{Title}</h2>
        <p className="leading-7 text-justify">{Description}</p>
      </div>
      <ToastContainer />
    </>
  );
};

export default CardDetails;
