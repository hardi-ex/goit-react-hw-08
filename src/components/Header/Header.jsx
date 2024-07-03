import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import icon from "../../../public/icon.svg";
import person from "../../../public/person.svg";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slice";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import clsx from "clsx";

const buildNavClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={css.header}>
      <div className={css.logoDiv}>
        <img src={icon} alt="icon" width="40" height="40" />
        <h1>Phonebook</h1>
      </div>
      {isLoggedIn && (
        <div className={css.userDiv}>
          <img src={person} alt="person" width="35" height="35" />
          <h2 className={css.h2}>{user.name}</h2>
        </div>
      )}
      <ul>
        <li>
          <NavLink className={buildNavClass} to="/">
            Home
          </NavLink>
        </li>

        {!isLoggedIn && (
          <>
            <li>
              <NavLink className={buildNavClass} to="/register">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className={buildNavClass} to="/login">
                Login
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li>
              <NavLink className={buildNavClass} to="/contacts">
                Contacts
              </NavLink>
            </li>
            <button
              onClick={() => dispatch(logoutThunk())}
              className={css.button}
            >
              Logout
            </button>
          </>
        )}
      </ul>
    </header>
  );
};
export default Header;
