import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [searchParam] = useState(["title", "text"]);

  // get data
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/roose/lor-poc-data/main/data.json")
      .then(res => res.json())
      .then(
        (result) => {
          result.sort((a, b) => {
            return a.title > b.title;
          });
          setItems(result);
        }
      )
  }, [])

  // search by title & text
  const search = (items) => {
    return items.filter(item => {
      return searchParam.some(newItem => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} />
      <Main search={search} items={items} />
      <Footer />
    </div>
  );
}

export default App;
