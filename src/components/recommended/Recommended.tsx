import "./Recommended.css";

import products from "../../data";

const Recommended = ({
  handleClick,
}: {
  handleClick: (item: string | null) => void;
}) => {
  const itemBrands = [...new Set(products.map((item) => item.company))];
  return (
    <section>
      <h2 className="title">Recommended brands</h2>
      <div className="btn-container">
        <button onClick={() => handleClick("")} className="btn">
          All Products
        </button>
        {itemBrands.map((item, i) => {
          return (
            <button
              onClick={() => handleClick(item)}
              key={`${item + i}`}
              className="btn"
            >
              {item}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Recommended;
