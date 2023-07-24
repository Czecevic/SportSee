import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faDrumstickBite,
  faAppleWhole,
  faBurger,
} from "@fortawesome/free-solid-svg-icons";
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
        <FontAwesomeIcon icon={faFire} />
        <div>
          <h3>{body.calorie} kCal</h3>
          <p>calories</p>
        </div>
      </li>
      <li>
        <FontAwesomeIcon icon={faDrumstickBite} />
        <div>
          <h3>{body.carbohydrate}g</h3>
          <p>Glucides</p>
        </div>
      </li>
      <li>
        <FontAwesomeIcon icon={faAppleWhole} />
        <div>
          <h3>{body.lipid}g</h3>
          <p>Lipides</p>
        </div>
      </li>
      <li>
        <FontAwesomeIcon icon={faBurger} />
        <div>
          <h3>{body.protein}g</h3>
          <p>Proteines</p>
        </div>
      </li>
    </ul>
  );
};
