import PageTitle from "../../components/PageTitle/PageTitle";
import { GiNotebook } from "react-icons/gi";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.div}>
      <PageTitle>Contacts Book</PageTitle>
      <GiNotebook size={55} />
      <p className={css.paragraph}>
        Welcome to the Contact Book! <br /> Manage your contacts easily and
        securely.
      </p>
    </div>
  );
}
