import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import {
  changeContactsFilter,
  selectContactsFilter,
} from "../../redux/filter/filter";
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  return (
    <div className={css.div}>
      <label htmlFor="search">
        <p className={css.paragraph}>Find contacts by name</p>
      </label>
      <input
        className={css.input}
        id="search"
        onChange={(e) => dispatch(changeContactsFilter(e.target.value))}
        type="text"
        value={filter}
        placeholder="Search..."
      />
    </div>
  );
}
