import React, { Component } from 'react';
import Button from '../button/Button';
import './list-item.css';

class ListItem extends Component {
  render() {
    const { item, displayItem } = this.props;

    return (
      <div className="item">
        <Button displayItem={displayItem} item={item} />
      </div>
    );
  }
}

export default ListItem;
