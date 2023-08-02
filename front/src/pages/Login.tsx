import { Navbar } from "../components/Navbar";
import { ContextButton } from "../components/ContextButton";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="LoginPage">
        <h1>
          Bienvenue sur <span style={{ color: "red" }}>SportSee</span>
        </h1>
        <h1>veuillez choisir l'un des deux utilisateurs suivant :</h1>
        <button className="userButton">
          <a href="/user/12">user 12</a>
        </button>
        <button className="userButton">
          <a href="/user/18">user 18</a>
        </button>
        <h1>vous pouvez switcher vos données ici</h1>
        <ContextButton></ContextButton>
      </div>
    </div>
  );
};
