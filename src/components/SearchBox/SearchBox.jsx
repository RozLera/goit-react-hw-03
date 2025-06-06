function SearchBox({ value, onSearch }) {
  const handleSearchBox = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={handleSearchBox}
        placeholder="Please enter text"
      />
      <p>{value}</p>
    </div>
  );
}

export default SearchBox;
