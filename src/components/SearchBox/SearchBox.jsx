import css from "./SearchBox.module.css";

function SearchBox({ value, onSearch }) {
  const handleSearchBox = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className={css.box}>
      <input
        className={css.input}
        value={value}
        type="text"
        onChange={handleSearchBox}
        placeholder="Please enter text"
      />
    </div>
  );
}

export default SearchBox;
