import React from "react";

import Node from "./Node";

const Main = ({ search, items }) => {
  return (
    <main className="main">
      <ul className="main_items">
        {search(items).map((item, id) => (
          <Node key={id} {...item} />
        ))}
      </ul>
    </main>
  )
}

export default Main;
