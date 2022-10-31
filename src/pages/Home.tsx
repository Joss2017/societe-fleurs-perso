import React from "react";
import { list_products } from "../data";

export interface TextElementPlant {
  id: string;
  name: string;
  unitprice_ati: number;
  quantity: number;
  category: string;
  rating: number;
  url_picture: string;
}

const listPlant: TextElementPlant[] = list_products;

const Home = () => {
  return (
    <div>
      <div>
        {" "}
        <h1>Page d'accueil</h1>
      </div>
      ;
      <div>
        {listPlant.map((plante) => (
          <li>{plante.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Home;
