import React from 'react';
import './button.css';

const Button = ({item, displayItem}) => (
  <div className="button-wrapper">
    <button className="sw-button" onClick={() => displayItem(item)}>
      {item.name || item.title}
    </button>
  </div>
);

export default Button;
