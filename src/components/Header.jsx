import React from "react";

const Header = ({ query, setQuery }) => {
  return (
    <header className="header">
      <img src="./game-updates-hero.jpg" alt="" />
      <div className="header_data">
        <h1 className="header_title">Узлы Пути Чемпионов 2.0</h1>
        <div className="header_wrap">
          <button className="header_clear" onClick={e => setQuery('')}>✖</button>
          <input
            className="header_input"
            type="text"
            name=""
            id=""
            value={query}
            placeholder="Поиск"
            onChange={e => setQuery(e.target.value)}
            autofocus=""
          />
        </div>
      </div>
    </header>
  )
}

export default Header;
