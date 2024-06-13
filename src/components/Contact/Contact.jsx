import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations"; // Импортируйте updateContact
import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";

export default function Contact({ id, contact }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);

  const handleDelete = () => dispatch(deleteContact(id));

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact({ contactId: id, updatedData: editedContact }));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={editedContact.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="number"
          value={editedContact.number}
          onChange={handleChange}
          placeholder="Number"
        />
        <button type="submit">Save</button>
      </form>
    );
  }

  return (
    <div className={css.container}>
      <div className={css.paragraphDiv}>
        <p className={css.paragraph}>
          <IoPerson className={css.icon} /> {editedContact.name}
        </p>
        <p className={css.paragraph}>
          <FaPhone className={css.icon} /> {editedContact.number}
        </p>
      </div>
      <div className={css.btnDiv}>
        <button className={css.btn} onClick={handleDelete}>
          <FaTrashCan />
        </button>
        <button className={css.btn} onClick={handleEdit}>
          <GrEdit />
        </button>
      </div>
    </div>
  );
}
