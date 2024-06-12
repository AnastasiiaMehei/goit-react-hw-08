import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ id, contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <div className={css.paragraphDiv}>
        <p className={css.paragraph}>
          <IoPerson className={css.icon} /> {contact.name}
        </p>
        <p className={css.paragraph}>
          <FaPhone className={css.icon} /> {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
