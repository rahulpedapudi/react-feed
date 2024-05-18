import "../navbar.css";
import SearchBar from "./SearchBar";

// all the categories that API support
const categories = [
  "General",
  "Entertainment",
  "Technology",
  "Business",
  "Health",
  "Science",
  "Sports",
];

// Navbar props
type NavProps = {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  handleSearch(e: React.FormEvent<HTMLFormElement>): void;
  handleCategory(e: any): void;
};

const NavBar = ({ handleSubmit, handleSearch, handleCategory }: NavProps) => {
  return (
    <div>
      <nav>
        <a href="#">FEED</a>
        <ul>
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                onClick={(e) => {
                  handleCategory(e);
                }}>
                {category}
              </li>
            );
          })}
          <SearchBar onchange={handleSearch} onsubmit={handleSubmit} />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
