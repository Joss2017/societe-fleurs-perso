import { list_products } from "../data";
import SideBar from "../components/Sidebar";
import { useState } from "react";

export interface Plante {
  id: string;
  name: string;
  unitprice_ati: number;
  quantity: number;
  category: string;
  rating: number;
  url_picture: string;
}

const listPlant: Plante[] = list_products;

const Home = () => {
  const [selectCategories, setSelectCategories] = useState<string[]>([]);

  let result = [...listPlant];

  if (selectCategories.length > 0) {
    result = result.filter((x) => selectCategories.includes(x.category));
  }

  return (
    <div className="d-flex align-items-stretch">
      <SideBar
        listElementPlant={listPlant}
        onChangeCategoriesCheck={(mesDataCheck) =>
          setSelectCategories(mesDataCheck)
        }
      />
      <div className="container-fluid custom-main">
        {result.map((item) => (
          <li>
            {item.name}-{item.category}-{item.rating}⭐ -coûte
            {item.unitprice_ati}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;
