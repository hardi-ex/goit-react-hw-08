import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(registerThunk(values));
  };

  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  return (
    <div className={css.div}>
      <div className={css.container}>
        <h2 className={css.title}>Register</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <Field
              className={css.input}
              name="name"
              type="name"
              id="name"
              required
            />
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <Field
              className={css.input}
              name="email"
              type="email"
              id="email"
              required
            />
            <label className={css.label} htmlFor="password">
              Password
            </label>
            <Field
              className={css.input}
              name="password"
              type="password"
              id="password"
              required
            />
            <label className={css.label}>
              You already have an account?{" "}
              <Link className={css.link} to="/login">
                Login
              </Link>
            </label>
            <button className={css.button} type="submit">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default RegistrationForm;