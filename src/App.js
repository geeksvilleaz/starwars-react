import React, { Component } from 'react';
import Browse from './app/browse/Browse';
import Detail from './app/detail/Detail';
import List from './app/list/List';
import './App.css';

import Service from './app/Service';

class App extends Component {
  constructor() {
    super();

    this.state = {
      menu: [],
      category: null,
      categoryName: null,
      item: null,
      url: null
    };

    this.service = new Service();

    this.displayCategory = this.displayCategory.bind(this);
    this.displayItem = this.displayItem.bind(this);
  }

  componentDidMount() {
    this.service.getMenu()
        .then(menu => this.setState({menu: menu}));
  }

  displayCategory(item) {
    console.log('display catagory', item);
    this.service.getUrl(item.url)
        .then(data => this.setState({
          item: null,
          category: data,
          categoryName: item.name,
          url: item.url
        }));
  }

  displayItem(item) {
    console.log('display item', item);
    this.setState({category: null, item: item});
  }

  render() {
    return (
      <div className="wrapper">
        <header>
          <h1>Star Wars Data Stuffs</h1>
        </header>

        <section className="main">
          <Browse menu={this.state.menu} displayCategory={this.displayCategory} />

          <main>
            <List
                hide={!!this.state.item}
                category={this.state.category}
                categoryName={this.state.categoryName}
                displayItem={this.displayItem}
                displayCategory={this.displayCategory}
                url={this.state.url} />

            <Detail
                hide={!!this.state.category}
                item={this.state.item}
                displayItem={this.displayItem} />

            {!this.state.item && !this.state.category &&
              <p>Welcome! Choose a category from the left to begin.</p>
            }
          </main>
        </section>
      </div>
    );
  }
}

export default App;
