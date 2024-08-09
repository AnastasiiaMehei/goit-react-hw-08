import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import css from "./RegisterForm.module.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("Register request payload:", values);
    dispatch(register(values))
      .unwrap()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
  });

  return (
    <section className={css.section}>
      <div className={css.formBox}>
        <div className={css.formValue}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <h2>Register</h2>
              <div className={css.inputbox}>
                <FaUser className={css.icon} />
                <Field
                  className={css.field}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage
                  className={css.span}
                  name="name"
                  component="span"
                />
              </div>
              <div className={css.inputbox}>
                <FaEnvelope className={css.icon} />
                <Field
                  className={css.field}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  className={css.span}
                  name="email"
                  component="span"
                />
              </div>
              <div className={css.inputbox}>
                <FaLock className={css.icon} />
                <Field
                  className={css.field}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  className={css.span}
                  name="password"
                  component="span"
                />
              </div>

              <button className={css.btn} type="submit">
                Register
              </button>
              <div className={css.register}>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}
