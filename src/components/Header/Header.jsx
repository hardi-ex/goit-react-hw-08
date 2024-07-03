import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import icon from "../../../public/icon.svg";

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoDiv}>
        <img src={icon} alt="icon" width="50" height="50" />
        <h1>Phonebook</h1>
      </div>
      <ul>
        <li>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;
