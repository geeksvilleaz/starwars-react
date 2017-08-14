import React, { Component } from 'react';
import './browse.css';

class Browse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUrl: null
    };
  }

  handleClick(item) {
    console.log('click', item);
    this.props.displayCategory(item);
    this.setState({activeUrl: item.url});
  }

  render() {
    const { menu } = this.props;
    const buttons = menu.map(item =>
      <li key={item.name}>
        <button
            className={this.state.activeUrl === item.url ? 'active' : ''}
            onClick={() => this.handleClick(item)}>
          {item.name}
        </button>
      </li>
    );

    return (
      <nav className="browse">
        <h3>Browse</h3>
        <ul>
          {buttons}
        </ul>
      </nav>
    );
  }
}

export default Browse;
