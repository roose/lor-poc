import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const SEARCH_PARAMS = ["title", "text"];

function App() {
  const [query, setQuery] = useState("");

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [lang, setLang] = useState();

  const extractHashLang = () => {
    const { hash } = window.location;
    let hashLang = hash.replace("#", "").slice(0, 2);
    if (hashLang && (hashLang === "en" || hashLang === "ru")) {
      return hashLang;
    }
    return "";
  };

  useEffect(() => {
    let userLang =
      extractHashLang() ||
      localStorage.getItem("lang") ||
      navigator.language ||
      navigator.userLanguage;
    setLang(userLang.slice(0, 2));
  }, []);

  // get data
  useEffect(() => {
    if (lang !== undefined) {
      fetch(
        `https://raw.githubusercontent.com/roose/lor-poc-data/main/data-${lang}.json`
      )
        .then((res) => res.json())
        .then((result) => {
          result.sort((a, b) => {
            return a.title > b.title;
          });
          setItems(result);
        });
    }
  }, [lang]);

  useEffect(() => {
    const filteredItems = query
      ? items.filter((item) => {
          return SEARCH_PARAMS.some((searchParam) => {
            return (
              item[searchParam]
                .toString()
                .toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            );
          });
        })
      : items;

    setFilteredItems(filteredItems);
  }, [items, query]);

  return (
    <div className="App">
      <Helmet>
        <title>{ lang === 'en' ? 'The Path of Champions 2.0 Nodes' : 'Узлы Пути Чемпионов 2.0' }</title>
      </Helmet>
      <Header query={query} setQuery={setQuery} lang={lang} setLang={setLang} />
      <Main items={filteredItems} lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
