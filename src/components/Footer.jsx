import React from "react";
import { GitCat } from "./icons/GitCat";

const Footer = ({lang}) => {
  return (
    <footer>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/roose/lor-poc">
          <span>{ lang === 'en' ? 'App repo' : 'Репозиторий приложения' }</span>
          <GitCat />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/roose/lor-poc-data">
          <span>{ lang === 'en' ? 'Data repo' : 'Репозиторий данных' }</span>
          <GitCat />
        </a>
      </li>
    </ul>
  </footer>
  )
}

export default Footer;
