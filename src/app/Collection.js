import React, { Component } from 'react';
import Button from './button/Button';
import Service from './Service';

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: [],
      markup: (<div>Markup</div>)
    };

    this.service = new Service();
  }

  componentDidMount() {
    const { items } = this.props;
    items && items.forEach(item =>
        this.service.getUrl(item)
            .then(data => this.addToCollection(data))
    );
  }

  addToCollection(item) {
    this.setState((prev, props) => {
      return prev.collection.push(item);
    });
  }

  render() {
    const { displayItem } = this.props;
    return (
      <div>
        {this.state.collection.map(item =>
          <div className="collection" key={item.name || item.title}>
            <Button item={item} displayItem={displayItem} />
          </div>
        )}
      </div>
    );
  }
}

export default Collection;
