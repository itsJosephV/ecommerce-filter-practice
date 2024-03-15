import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/navigator/Nav";
import Products from "./components/products/Products";
import Recommended from "./components/recommended/Recommended";
import SideBar from "./components/sidebar/SideBar";
import products from "./data";
import { HandlerProps, ItemProps } from "./types";
import { SelectedOptions } from "./types";

function App() {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    category: "",
    price: "",
    color: "",
    company: "",
  });

  const [query, setQuery] = useState("");

  const [dataProducts, setDataProducts] = useState<ItemProps[]>([]);

  const handleInputChange: HandlerProps = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    setQuery(value);

    if (value) {
      setSelectedOptions({
        category: "",
        price: "",
        color: "",
        company: "",
      });
    }
  };

  const handleChange: HandlerProps = (e) => {
    const { name, value } = e.target;
    setSelectedOptions((prevFilters) => ({
      ...prevFilters,
      [name]: value,
      // company: "",
    }));
  };

  const handleClick = (item: string | null) => {
    if (item) {
      setSelectedOptions(() => ({
        category: "",
        price: "",
        color: "",
        company: item,
      }));
    } else {
      setSelectedOptions({
        category: "",
        price: "",
        color: "",
        company: "",
      });
    }
  };

  useEffect(() => {
    const filterData = () => {
      let filteredProducts = products;

      if (selectedOptions) {
        filteredProducts = filteredProducts.filter((item) => {
          return (
            (!selectedOptions.category ||
              item.category === selectedOptions.category) &&
            (!selectedOptions.color || item.color === selectedOptions.color) &&
            (!selectedOptions.price ||
              item.newPrice === selectedOptions.price) &&
            (!selectedOptions.company ||
              item.company === selectedOptions.company)
          );
        });
      }

      if (query) {
        filteredProducts = filteredProducts.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
      }

      setDataProducts(filteredProducts);
    };
    filterData();
  }, [query, selectedOptions]);

  useEffect(() => {
    console.log(dataProducts);
    console.log(selectedOptions);
  }, [selectedOptions, dataProducts]);

  return (
    <div className="main-grid">
      <SideBar handleChange={handleChange} />
      <div>
        <header>
          <Nav query={query} handleInputChange={handleInputChange} />
        </header>
        <hr className="divider" />
        <main>
          <Recommended handleClick={handleClick} />
          <Products dataProducts={dataProducts} />
        </main>
      </div>
    </div>
  );
}

export default App;
