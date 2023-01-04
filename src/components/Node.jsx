import React from "react";
import { Anchor } from "./icons/Anchor";
import slugify from "slugify";

const Node = ({title, text, cards, lang, apiLang, base_url, lab_url}) => {
  const slug = slugify(title, {lower: true});

  return (
    <li className="main_item">
      <h2 className="main_title" id={`${lang}-${slug}`}>
        {title}
        <a className="main_anchor" href={`#${lang}-${slug}`}>
          <Anchor />
        </a>
      </h2>
      <p className="main_text">{text}</p>
      {
        cards.length > 0 &&
        <div className="refs">
          <h4 className="refs_title">{lang === 'en' ? 'Referred cards:' : 'Упомянутые карты:'}</h4>
          <ul className="refs_items">
            {
              cards.map((card, idx) => (
                <li className="refs_item" key={card.id}>
                  <button className="refs_btn">{card.name}</button>
                  {
                    card.set === 'lab' ?
                      <img className="refs_img" src={`${lab_url}/${card.id}.png`} alt={card.name} />
                      :
                      <img className="refs_img" src={`${base_url}/set${card.set}/${apiLang}/img/cards/${card.id}.png`} alt={card.name} />
                  }
                </li>
              ))
            }
          </ul>
        </div>
      }
      <div className="divider"></div>
    </li>
  )
}

export default Node;
