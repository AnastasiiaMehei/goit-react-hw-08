import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectAllContacts } from "../../redux/contacts/selectors";
export default function ContactList() {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className={css.ul}>
      {contacts.map((contact) => (
        <li className={css.li} key={contact.id}>
          <Contact id={contact.id} contact={contact} />
        </li>
      ))}
    </ul>
  );
}
