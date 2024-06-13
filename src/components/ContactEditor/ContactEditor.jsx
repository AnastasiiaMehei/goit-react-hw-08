import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectToken } from "../../redux/auth/selectors";
import { toast } from "react-hot-toast";
import css from "./ContactEditor.module.css";

export default function ContactEditor() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleSubmit = (values, actions) => {
    const { name, phone } = values;
    console.log("Submitting contact:", values);
    if (name && phone) {
      if (token) {
        dispatch(addContact({ name, number: phone }))
          .then(() => {
            toast.success("Contact added successfully");
            actions.resetForm();
          })
          .catch(() => {
            toast.error("Failed to add contact");
          });
      } else {
        alert("You must be logged in to add a contact.");
      }
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
      initialValues={{
        name: "",
        phone: "",
      }}
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
          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
