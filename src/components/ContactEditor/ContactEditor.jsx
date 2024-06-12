import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactEditor.module.css";

export default function ContactEditor() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text?.value;
    const number = form.elements.number?.value;
    if (text || number) {
      dispatch(addContact(text || number));
      form.reset();
    } else {
      alert("Task cannot be empty. Enter some text!");
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputs}>
        <input name="text" className={css.input} placeholder="Name" />
        <input name="number" className={css.input} placeholder="Number" />
      </div>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
}
