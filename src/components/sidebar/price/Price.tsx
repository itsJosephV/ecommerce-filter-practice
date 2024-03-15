import data from "../../../data";
import Input from "../../input/Input";
import "./Price.css";
import { HandlerProps } from "../../../types";

const Price = ({ handleChange }: { handleChange: HandlerProps }) => {
  const price = [...new Set(data.map((item) => item.newPrice))];
  return (
    <div className="price-container">
      <h2 className="price-title">Price</h2>
      <div className="price-radio-container">
        <label className="label-container" htmlFor="">
          <input
            type="radio"
            value=""
            name="price"
            onChange={handleChange}
            defaultChecked
          />
          <span>all</span>
        </label>
        {price
          .sort((a, b) => +a - +b)
          .map((item, i) => {
            return (
              <Input
                key={`${item + i}`}
                handleChange={handleChange}
                title={`${+item >= 200 ? item + "+" : 50 * i + " - " + item}`}
                name="price"
                value={item}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Price;
