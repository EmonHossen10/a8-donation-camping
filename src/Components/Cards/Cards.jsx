import Card from "../Card/Card";

const Cards = ({ category }) => {
  console.log(category)
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto my-10">
        {
        category.map((data) => (
          <Card key={data.id} data={data}></Card>
          
        ))}
      </div>
    </>
  );
};

export default Cards;
