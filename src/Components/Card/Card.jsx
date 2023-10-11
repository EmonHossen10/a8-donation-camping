const Card = ({ data }) => {
  const { Picture, Title, Category, Category_bg } = data;

  return (
    <div
      style={{ backgroundColor: Category_bg + "40" }}
      className="card   shadow-xl"
    >
      <figure>
        <img className="w-full h-[250px]" src={Picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {/* badge */}
          <div
            style={{ color: Category_bg, backgroundColor: Category_bg + "30" }}
            className=" badge-square p-1 rounded  text-sm"
          >
            {Category}
          </div>
        </h2>
        <div style={{ color: Category_bg }} className="font-bold   ">
          {Title}
        </div>
      </div>
    </div>
  );
};

export default Card;
