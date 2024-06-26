import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filter/filter";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

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
