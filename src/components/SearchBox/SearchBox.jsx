import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import {
  changeContactsFilter,
  selectContactsFilter,
} from "../../redux/filtersSlice";
import { useId } from "react";
export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  return (
    <div className={css.div}>
      <label htmlFor={id}>
        <p className={css.paragraph}>Find contacts by name</p>
      </label>
      <input
        className={css.input}
        id={id}
        onChange={(e) => dispatch(changeContactsFilter(e.target.value))}
        type="text"
        value={filter}
        placeholder="Search ..."
      />
    </div>
  );
}
