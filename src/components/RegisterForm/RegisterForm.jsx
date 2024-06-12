import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import css from "./RegisterForm.module.css";
export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => console.log(data))
      .catch((err) => {
        const errorMessage =
          err.response?.data?.message || "Invalid information. Try again.";
        toast.error(errorMessage);
      });
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
  });
  return (
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
        <div className={css.div}>
          <label>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage className={css.span} name="name" component="span" />
        </div>
        <div className={css.div}>
          <label>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage className={css.span} name="email" component="span" />
        </div>
        <div className={css.div}>
          <label>Password</label>
          <Field
            className={css.field}
            type="password"
            name="password"
            placeholder="password"
          />
          <ErrorMessage className={css.span} name="password" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
