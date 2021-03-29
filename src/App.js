import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeers, selectSearchResults } from "./store/beerSlice";
import "./App.css";

function App() {
  const searchRes = useSelector(selectSearchResults);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchBeers(query));
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return <div className="App"></div>;
}

export default App;
