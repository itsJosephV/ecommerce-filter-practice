import { ItemProps } from "../../types";
import Card from "../card/Card";
import "./Products.css";

const Products = ({ dataProducts }: { dataProducts: ItemProps[] }) => {
  return (
    <section className="card-section">
      {dataProducts.length === 0 && <p>no items found</p>}
      {dataProducts.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </section>
  );
};

export default Products;
