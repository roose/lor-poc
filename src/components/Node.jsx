import React from "react";
import slugify from "slugify";

const base_url = 'https://dd.b.pvp.net/latest';
const lab_url = 'https://raw.githubusercontent.com/roose/lor-poc-data/main/data/lab/ru_ru/img/cards';

const Node = ({title, text, cards}) => {

  const slug = slugify(title, {lower: true});

  return (
    <li className="main_item" id={slug}>
      <h2 className="main_title">{title}</h2>
      <p className="main_text">{text}</p>
      {
        cards.length > 0 &&
        <div className="refs">
          <h4 className="refs_title">Упомянутые карты:</h4>
          <ul className="refs_items">
            {
              cards.map((card, idx) => (
                <li className="refs_item" key={card.id}>
                  <button className="refs_btn">{card.name}</button>
                  {
                    card.set === 'lab' ?
                      <img className="refs_img" src={`${lab_url}/${card.id}.png`} alt={card.name} />
                      :
                      <img className="refs_img" src={`${base_url}/set${card.set}/ru_ru/img/cards/${card.id}.png`} alt={card.name} />
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
