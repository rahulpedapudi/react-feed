import axios from "axios";
import "./index.css";
import NewsCard from "./components/NewsCard";
import HeaderCard from "./components/HeaderCard";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import API_KEY from "../env.ts";

const App = () => {
  const APIurl = "https://newsapi.org/v2/everything";
  const API_Headlines = "https://newsapi.org/v2/top-headlines";

  // state management
  const [articles, setArticles] = useState([]); // articles that are fetched
  const [headline, setHeadline] = useState([]);
  const [search, setSearch] = useState("trending"); // search parameter -- default set to trending
  const [userSearch, setUserSearch] = useState(""); // user's search

  const [category, setCategory] = useState("technology");

  // fetches data everytime search changes
  // TODO: Fetch data on user interaction. (infinite scroll?)
  useEffect(() => {
    // console.log(search);
    fetchData();
    fetchHeadlines();
  }, [search, category]);

  // function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get(APIurl, {
        params: {
          q: search, // q: Keywords or phrases to search for in the article title and body.
          sortBy: "relevancy", // order to sort the articles
          pageSize: 5, // maximum number of results
          language: "en",
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

  const fetchHeadlines = async () => {
    try {
      const response = await axios.get(API_Headlines, {
        params: {
          category: category,
          pageSize: 2, // maximum number of results
          language: "en",
        },
        headers: {
          "X-Api-Key": API_KEY, // API key
        },
      });
      setHeadline(response.data.articles);
      console.log(response.data.articles);
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

  const handleCategoryChange = (e: any) => {
    const cat = e.target.innerHTML;
    setCategory(cat);
  };

  return (
    <>
      <NavBar
        handleCategory={handleCategoryChange}
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
      />
      <HeaderCard data={headline} />
      <NewsCard fetchedData={articles} />;
    </>
  );
};

export default App;
