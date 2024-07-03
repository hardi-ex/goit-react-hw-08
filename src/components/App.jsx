import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ContactPage from "../pages/ContactsPage";
import PrivateRoute from "../routes/PrivateRoute";
import RestrictedRoute from "../routes/RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <RestrictedRoute>
            <LoginPage />
          </RestrictedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute>
            <RegistrationPage />
          </RestrictedRoute>
        }
      />
    </Routes>
  );
};

export default App;
