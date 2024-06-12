import Navigation from "../../components/Navigation/Navigation.jsx";
import UserMenu from "../../components/UserMenu/UserMenu.jsx";
import { useSelector } from "react-redux";
import { AuthNav } from "../../components/AuthNav/AuthNav.jsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

export default function AppBar() {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
