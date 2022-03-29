import { useEffect, useState } from "react";
// import axios from "axios";
import { fetchData } from "../services/sw-api";
import Card from "./Card";

function Cards() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchData();
        setCardList(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="starship-div">
      {cardList.map((card, index) => {
        const {
          name,
          starship_class,
          model,
          hyperdrive_rating,
          cargo_capacity,
        } = card;

        return (
          <Card
            name={name}
            shipClass={starship_class}
            model={model}
            hyperdrive={hyperdrive_rating}
            cargoCap={cargo_capacity}
            key={index}
          />
        );
      })}
    </div>
  );
}
export default Cards;
