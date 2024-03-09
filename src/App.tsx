import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/navigator/Nav";
import Products from "./components/products/Products";
import Recommended from "./components/recommended/Recommended";
import SideBar from "./components/sidebar/SideBar";
import products from "./data";
import { HandlerProps, ItemProps } from "./types";

function App() {
  const [selectedOptions, setSelectedOptions] = useState<string | null>(null);

  const [query, setQuery] = useState("");

  const [dataProducts, setDataProducts] = useState<ItemProps[]>([]);

  const handleInputChange: HandlerProps = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  const handleChange: HandlerProps = (e) => {
    setSelectedOptions(e.target.value);
  };

  const handleClick = (item: string | null) => {
    setSelectedOptions(item);
  };

  const filterData = () => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedOptions) {
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.category === selectedOptions ||
          item.color === selectedOptions ||
          item.company === selectedOptions ||
          item.newPrice === selectedOptions ||
          item.title === selectedOptions
      );
    }
    setDataProducts(filteredProducts);
  };

  useEffect(() => {
    filterData();
    console.log(dataProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions, query]);

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
