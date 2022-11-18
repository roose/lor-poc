import React, { useEffect } from "react";
import Node from "./Node";

const Main = ({ items, lang }) => {

  const base_url = 'https://dd.b.pvp.net/latest';
  const apiLang = lang === 'en' ? 'en_us' : 'ru_ru';
  const lab_url = `https://raw.githubusercontent.com/roose/lor-poc-data/main/data/lab/${apiLang}/img/cards`;

  useEffect(() => {
    const { hash } = window.location;
    const id = hash.replace('#', '');
    const element = document.getElementById(id);
    if (element) element.scrollIntoView();
  }, [items]);

  return (
    <main className="main">
      <ul className="main_items">
        {items.map((item, id) => (
          <Node key={id} {...item} apiLang={apiLang} lang={lang} base_url={base_url} lab_url={lab_url} />
        ))}
      </ul>
    </main>
  )
}

export default Main;
