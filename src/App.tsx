import axios from "axios";
import "./index.css";
import NewsCard from "./components/NewsCard";
import HeaderCard from "./components/HeaderCard";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar.tsx";
import { useState, useEffect } from "react";
import API_KEY from "../env.ts";

const App = () => {
  const APIurl = "https://newsapi.org/v2/everything";

  // state management
  const [articles, setArticles] = useState([]); // articles that are fetched
  const [search, setSearch] = useState("trending"); // search parameter -- default set to trending
  const [userSearch, setUserSearch] = useState(""); // user's search

  // fetches data everytime search changes
  // TODO: Fetch data on user interaction. (infinite scroll?)
  useEffect(() => {
    // console.log(search);
    fetchData();
  }, [search]);

  // function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get(APIurl, {
        params: {
          q: search, // q: Keywords or phrases to search for in the article title and body.
          sortBy: "relevancy", // order to sort the articles
          pageSize: 5, // maximum number of results
        },
        headers: {
          "X-Api-Key": API_KEY, // API key
        },
      });
      // console.log(response.data);
      setArticles(response.data.articles); // setting articles which are fetched
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // function to handle the user input (search)
  const handleSearch = (e: any) => {
    // console.log(e.target.value);
    const userKeyword = e.target.value;
    setUserSearch(userKeyword);
  };

  // handling search.. when clicked, new data is fetched and rendered
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearch(userSearch);
  };

  return (
    <>
      <NavBar />
      <SearchBar
        onsubmit={(e) => handleSubmit(e)}
        onchange={(e) => handleSearch(e)}
      />
      <HeaderCard />
      <NewsCard fetchedData={articles} />;
    </>
  );
};

export default App;
