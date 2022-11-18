import React from "react";
import slugify from "slugify";

const Node = ({title, text, cards, lang, apiLang, base_url, lab_url}) => {
  const slug = slugify(title, {lower: true});

  return (
    <li className="main_item">
      <h2 className="main_title" id={`${lang}-${slug}`}>
        {title}
        <a className="main_anchor" href={`#${lang}-${slug}`}>
          <svg className="main_icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
            <path fillRule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
          </svg>
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
