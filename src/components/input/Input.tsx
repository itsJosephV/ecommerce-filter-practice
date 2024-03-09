import "./Input.css";
import { HandlerProps } from "../../types";

type Props = {
  handleChange: HandlerProps;
  title: string;
  name: string;
  color?: string;
  value: string;
};

const Input = ({ handleChange, title, name, color, value }: Props) => {
  return (
    <label className="label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span style={{ backgroundColor: color }}>{title}</span>
    </label>
  );
};

export default Input;
