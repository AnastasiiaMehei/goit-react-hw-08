import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <section className={css.section}>
      <div className={css.formBox}>
        <div className={css.formValue}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form className={css.form} autoComplete="off">
              <h2>Login</h2>
              <div className={css.inputbox}>
                <FaEnvelope className={css.icon} />
                <Field
                  className={css.field}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <label>Email</label>
              </div>
              <div className={css.inputbox}>
                <FaLock className={css.icon} />
                <Field
                  className={css.field}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <label>Password</label>
              </div>

              <button className={css.btn} type="submit">
                Log In
              </button>
              <div className={css.register}>
                <p>
                  Don`t have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}
