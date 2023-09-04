import { Navbar } from "../components/Navbar";

export const ErrorAPI = () => {
  return (
    <>
      <Navbar />
      <div className="errorAPI">
        <h1>Error 404</h1>
        <p>
          vous n'avez pas activer les données mocker, veuillez retourner sur le
          choix des utilisateurs via le lien ci-dessous et clicker sur le bouton
          "Fetch"
        </p>
        <a href="/">
          <button type="submit" className="userButton">
            Retour aux Utilisateurs
          </button>
        </a>
        <br />
      </div>
    </>
  );
};
