import React, { useState } from "react";
import data from "./data.json";

function App() {
  const [query, setQuery] = useState('');
  const [searchParam] = useState(["title", "text"]);
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
  // sort by title
  data.sort((a,b) => {
    return a.title > b.title;
  });
  // add index to each item
  data.map((item, index) => {
    item["id"] = index + 1;
  })

  return (
    <div className="App">
      <header className="header">
        <img src="./game-updates-hero.jpg" alt="" />
        <div className="header_data">
          <h1 className="header_title">Узлы Пути Чемпионов 2.0</h1>
          <input
            className="header_input"
            type="search"
            name=""
            id=""
            value={query}
            placeholder="Поиск"
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </header>
      <main className="main">
        <ul className="main_items">
          {search(data).map((item) => (
            <li key={item.id} className="main_item">
              <h2 className="main_title">{item.title}</h2>
              <p className="main_text">{item.text}</p>
              <div className="divider"></div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
