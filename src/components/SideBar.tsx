import icon from "../assets/meditation.svg";
import icon1 from "../assets/nage.svg";
import icon2 from "../assets/velo.svg";
import icon3 from "../assets/alteres.svg";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <ul>
        <li>
          <img src={icon} />
        </li>
        <li>
          <img src={icon1} />
        </li>
        <li>
          <img src={icon2} />
        </li>
        <li>
          <img src={icon3} />
        </li>
      </ul>
      <p className="copyright">Copyright, SportSee 2020</p>
    </div>
  );
};
