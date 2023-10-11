const Card = ({ data }) => {
  const { id, Picture, Title, Category, Category_bg, Description, Price } =
    data;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[250px]" src={Picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="badge badge-secondary">{Category}</div>
        </h2>
        <p className="font-bold">{Title}</p>
      </div>
    </div>
  );
};

export default Card;
