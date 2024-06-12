import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactEditor.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ContactEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { name, phone } = values;
    if (name && phone) {
      dispatch(addContact({ name, phone }));
      actions.resetForm();
    } else {
      alert("Both fields are required!");
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
    phone: Yup.string()
      .min(6, "Too Short")
      .max(50, "Too Long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.div}>
            <Field className={css.field} name="name" placeholder="Name" />
            <ErrorMessage className={css.span} name="name" component="span" />
          </div>
          <div className={css.div}>
            <Field className={css.field} name="phone" placeholder="Phone" />
            <ErrorMessage className={css.span} name="phone" component="span" />
          </div>
          <button className={css.button} type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
