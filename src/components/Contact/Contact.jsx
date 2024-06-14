import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import Modal from "../Modal/Modal";
import { Toaster, toast } from "react-hot-toast";

export default function Contact({ id, contact }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success("Contact deleted successfully!");
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Failed to delete contact:", error);
        toast.error("Failed to delete contact.");
      });
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

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
    dispatch(updateContact({ contactId: id, updatedData: editedContact }))
      .then(() => {
        toast.success("Contact updated successfully");
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Failed to update contact:", error);
        toast.error("Failed to update contact.");
      });
  };

  if (showModal) {
    return (
      <Modal isOpen={showModal} onClose={cancelDelete}>
        <h2>Confirm action</h2>
        <p>Are you sure you want to delete this contact?</p>
        <button onClick={confirmDelete}>Yes, delete</button>
        <button onClick={cancelDelete}>Cancel</button>
      </Modal>
    );
  }

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
    <>
      <Toaster />
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
    </>
  );
}
