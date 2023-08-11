import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faDrumstickBite,
  faAppleWhole,
  faBurger,
} from "@fortawesome/free-solid-svg-icons";
import food from "../assets/food.svg";
import energy from "../assets/energy.svg";
import cheeseburger from "../assets/cheeseburger.svg";
import apple from "../assets/apple.svg";
import React from "react";

interface UserProps {
  body: {
    calorie: number;
    carbohydrate: number;
    lipid: number;
    protein: number;
  };
}

export const User: React.FunctionComponent<UserProps> = (props) => {
  const { body } = props;
  return (
    <ul className="user">
      <li>
        <img src={energy} style={{ backgroundColor: "#ff7777" }} />
        <div>
          <h3>{body.calorie} kCal</h3>
          <p>calories</p>
        </div>
      </li>
      <li>
        <img src={food} style={{ backgroundColor: "#4AB8FF1A" }} />
        <div>
          <h3>{body.carbohydrate}g</h3>
          <p>Glucides</p>
        </div>
      </li>
      <li>
        <img src={apple} style={{ backgroundColor: "#fef8e3" }} />
        <div>
          <h3>{body.lipid}g</h3>
          <p>Lipides</p>
        </div>
      </li>
      <li>
        <img src={cheeseburger} style={{ backgroundColor: "#FD51811A" }} />
        <div>
          <h3>{body.protein}g</h3>
          <p>Proteines</p>
        </div>
      </li>
    </ul>
  );
};
