import React from "react";
import { Header } from "./components/Header";
import { InfoCompany } from "./components/infoCompany";
import { Price } from "./components/price";
import { Products } from "./components/products";

const App = () => {
  return (
    <div>
      <Header />
      <InfoCompany />
      <Price />
      <Products />
    </div>
  );
};

export default App;
