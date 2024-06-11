import DocumentTitle from "../../components/DocumentTitle";
import { RiContactsBook2Fill } from "react-icons/ri";

import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>Contacts Page</h1>
        <RiContactsBook2Fill />
      </div>
    </>
  );
}
