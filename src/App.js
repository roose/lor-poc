import React, { useState, useEffect } from "react";

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
          result.sort((a,b) => {
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

  // clear search input
  const handleClear = (e) => {
    setQuery('');
  }

  return (
    <div className="App">
      <header className="header">
        <img src="./game-updates-hero.jpg" alt="" />
        <div className="header_data">
          <h1 className="header_title">Узлы Пути Чемпионов 2.0</h1>
          <div className="header_wrap">
            <button className="header_clear" onClick={handleClear}>✖</button>
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
        </div>
      </header>
      <main className="main">
        <ul className="main_items">
          {search(items).map((item, id) => (
            <li key={id} className="main_item" id={`item-id-${id}`}>
              <h2 className="main_title">{item.title}</h2>
              <p className="main_text">{item.text}</p>
              <div className="divider"></div>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/roose/lor-poc">
              <span>Репозиторий приложения</span>
              <svg height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/roose/lor-poc-data">
              <span>Репозиторий данных</span>
              <svg height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
