import React from "react";
import { withRouter } from "react-router";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, match, history, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span classNam="subtitle"></span>
    </div>
  </div>
);

export default withRouter(MenuItem);
