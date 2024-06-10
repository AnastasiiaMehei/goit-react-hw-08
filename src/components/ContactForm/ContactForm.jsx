import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { addContacts } from "../../redux/contactsOps";
export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContacts(values));
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

  const dataId = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.div}>
          <label htmlFor={dataId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={dataId}
            placeholder="Name..."
          />
          <ErrorMessage className={css.span} name="name" component="span" />
        </div>
        <div className={css.div}>
          <label htmlFor={dataId}>Phone</label>
          <Field
            className={css.field}
            type="number"
            name="number"
            id={dataId}
            placeholder="Phone"
          />
          <ErrorMessage className={css.span} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
