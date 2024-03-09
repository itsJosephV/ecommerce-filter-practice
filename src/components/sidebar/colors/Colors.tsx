import Input from "../../input/Input";
import "./Colors.css";
import data from "../../../data";
import { HandlerProps } from "../../../types";

const Colors = ({ handleChange }: { handleChange: HandlerProps }) => {
  const colors = [...new Set(data.map((item) => item.color))];
  return (
    <div className="color-container">
      <h2 className="color-title">Color</h2>
      <div className="color-radio-container">
        <label className="label-container" htmlFor="">
          <input
            type="radio"
            className="color-input"
            // style={{ accentColor: "red" }}
            value=""
            name="test2"
            onChange={handleChange}
          />
          <span>all</span>
        </label>
        {colors.map((item, i) => {
          return (
            <Input
              key={`${item + i}`}
              handleChange={handleChange}
              title={item}
              name="test2"
              value={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
