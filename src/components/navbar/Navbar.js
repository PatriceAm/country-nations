import "./Navbar.scss";
import moon from "../../design/icons/moon.svg";
import sun from "../../design/icons/sun.svg";
import {useState} from "react";

const Navbar = () => {
  const [switchTheme, setSwitchTheme] = useState(true);

  const activeTheme = (switchTheme) => {
    return (
      <>
        <h3>{switchTheme ? "Light mode" : "Dark mode"}</h3>
        <img src={switchTheme ? sun : moon} width="30" />
      </>
    );
  };

  return (
    <div className="nav__container">
      <h1> Where in the world</h1>
      <div
        className="nav__container__theme"
        onClick={() => setSwitchTheme(!switchTheme)}
      >
        {activeTheme(switchTheme)}
      </div>
    </div>
  );
};

export default Navbar;
