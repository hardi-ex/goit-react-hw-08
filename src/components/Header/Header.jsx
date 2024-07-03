import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import icon from "../../../public/icon.svg";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slice";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={css.header}>
      <div className={css.logoDiv}>
        <img src={icon} alt="icon" width="40" height="40" />
        <h1>Phonebook</h1>
      </div>
      {isLoggedIn && <h2 className={css.h2}>Welcome {user.name}!</h2>}
      <ul>
        <li>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
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
          </>
        )}
        {isLoggedIn && (
          <>
            <button className={css.button}>Logout</button>
          </>
        )}
      </ul>
    </header>
  );
};
export default Header;
