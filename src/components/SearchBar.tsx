type searchProps = {
  onchange(e: any): any;
  onsubmit(e: any): any;
};

const SearchBar = (props: searchProps) => {
  return (
    <div>
      <form>
        <input
          onChange={(e) => props.onchange(e)}
          placeholder="Enter Keyword to Search"
          type="search"
          name="search"
          id="search-box"
        />
        <button onClick={(e) => props.onsubmit(e)} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
