import data from "../../../data";
import Input from "../../input/Input";
import "./Category.css";
import { HandlerProps } from "../../../types";

const Category = ({ handleChange }: { handleChange: HandlerProps }) => {
  const categories = [...new Set(data.map((item) => item.category))];
  return (
    <div className="category-container">
      <h2 className="category-title">Category</h2>
      <div className="category-radio-container">
        <label className="label-container" htmlFor="">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="category"
            defaultChecked
          />
          <span>all</span>
        </label>
        {categories.map((item, i) => {
          return (
            <Input
              key={`${item + i}`}
              handleChange={handleChange}
              name="category"
              value={item}
              title={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
