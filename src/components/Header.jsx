import React from "react";
import { useState } from "react";
import { Globe } from "./icons/Globe";

const Header = ({ query, setQuery, lang, setLang }) => {
  const [langsVisible, setLangsVisible] = useState(false);

  const handleClick = (e) => {
    setLangsVisible(prev => !prev);
  }

  // const handleLangChange = (e) => {
  //   if (e.target.className !== 'header_lang_link-active') {
  //     setLang(e.target.dataset.lang);
  //     localStorage.setItem('lang', e.target.dataset.lang);
  //     setLangsVisible(false);
  //     window.history.pushState("", "", window.location.pathname);
  //   }
  // }

  const handleLangChange = (newLang) => {
    if (newLang !== lang) {
      setLang(newLang);
      localStorage.setItem('lang', newLang);
      setLangsVisible(false);
      // window.history.pushState("", "", window.location.pathname);
    }
  }

  return (
    <header className="header">
      <div className="header_lang">
        <span className="header_lang_link" onClick={handleClick}>
          <Globe />
        </span>
        {
          langsVisible &&
            <ul className="header_lang_drop">
              <li data-lang='en' className={lang === 'en' ? 'header_lang_link-active' : undefined} onClick={e => handleLangChange("en")} >English</li>
              <li data-lang='ru' className={lang === 'ru' ? 'header_lang_link-active' : undefined} onClick={e => handleLangChange("ru")} >Русский</li>
            </ul>
        }
      </div>
      <img src="./game-updates-hero.jpg" alt="" />
      <div className="header_data">
        <h1 className="header_title">{ lang === 'en' ? 'The Path of Champions 2.0 Nodes' : 'Узлы Пути Чемпионов 2.0' }</h1>
        <div className="header_wrap">
          <button className="header_clear" onClick={e => setQuery('')}>✖</button>
          <input
            className="header_input"
            type="text"
            name=""
            id=""
            value={query}
            placeholder={ lang === 'en' ? 'Search' : 'Поиск' }
            onChange={e => setQuery(e.target.value)}
            autoFocus=""
          />
        </div>
      </div>
    </header>
  )
}

export default Header;
