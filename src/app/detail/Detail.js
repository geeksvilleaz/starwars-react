import React, { Component } from 'react';
import Person from './Person';
import Planet from './Planet';
import Film from './Film';
import Species from './Species';
import Vehicle from './Vehicle';
import Starship from './Starship';

import './detail.css';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
      item: null,
      category: null
    };
  }

  componentWillReceiveProps(newProps) {
    const url = newProps.item && newProps.item.url.split('/');
    if (url) {
      this.setState({
        category: url[url.length - 3]
      });
    }
  }

  render() {
    const { hide, item, displayItem } = this.props;
    const { category } = this.state;
    if (hide) {
      return (<div/>);
    }

    return (
      <div>
        {category && category === 'people' &&
          <Person person={item} displayItem={displayItem} />
        }

        {category && category === 'planets' &&
          <Planet planet={item} displayItem={displayItem} />
        }

        {category && category === 'films' &&
          <Film film={item} displayItem={displayItem} />
        }

        {category && category === 'species' &&
          <Species species={item} displayItem={displayItem} />
        }

        {category && category === 'vehicles' &&
          <Vehicle vehicle={item} displayItem={displayItem} />
        }

        {category && category === 'starships' &&
          <Starship starship={item} displayItem={displayItem} />
        }
      </div>
    );
  }
}

export default Detail;
