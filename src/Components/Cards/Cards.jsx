import Card from "../Card/Card";

const Cards = ({ datas }) => {
 

  return (
    <div>
      <h2 className="text-center font-bold text-4xl my-10">This is cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto my-10">
        {datas.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
