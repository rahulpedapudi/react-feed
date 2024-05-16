import axios from "axios";
import NewsCard from "./components/NewsCard";
import HeaderCard from "./components/HeaderCard";
import NavBar from "./components/NavBar";
import "./index.css";
import { useState, useEffect } from "react";
require("dotenv").config();

const App = () => {
  const APIurl = "https://newsapi.org/v2/everything";

  const [response, setResponse] = useState([{}]);
  useEffect(() => {
    fetchData();
    console.log(response);
  }, []);

  const [search, setSearch] = useState<string>("computer+science");

  const fetchData = async () => {
    try {
      const response = await axios.get(APIurl, {
        params: {
          q: search,
          sortBy: "relevancy",
        },
        headers: {
          "X-Api-Key": process.env.API_KEY,
        },
      });
      console.log(response.data);
      setResponse(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <>
      <NavBar />
      <HeaderCard />
      <NewsCard />;
    </>
  );
};

export default App;
