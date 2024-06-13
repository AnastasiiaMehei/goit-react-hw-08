import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ToastContainer from "react-hot-toast";
import Loader from "../../components/Loader/Loader";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactEditor />
      <SearchBox />
      <div>{isLoading && <Loader />}</div>
      <ToastContainer position="top-right" autoClose={5000} />
      <ContactList />
    </>
  );
}
