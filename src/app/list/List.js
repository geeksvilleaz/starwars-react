import React, { Component } from 'react';
import ListItem from './ListItem';
import Pagination from '../pagination/Pagination';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: '',
      category: props.category,
      previousUrl: '',
      nextUrl: ''
    };

    this.goTo = this.goTo.bind(this);
  }

  componentWillReceiveProps(props) {
    const { category, categoryName } = props;
    this.setState({
      category: category && category.results,
      categoryName: categoryName,
      previousUrl: category && category.previous,
      nextUrl: category && category.next,
      pagination: category
    });
  }

  goTo(url) {
    this.props.displayCategory({
      name: this.state.categoryName,
      url: url
    });
  }

  render() {
    const { hide, url } = this.props;
    const { category, categoryName } = this.state;
    console.log('render', this.state.category);
    if (hide || !category) {
      console.log('returning null');
      return (<div/>);
    }

    let items = [];
    category.forEach(item => items.push(
      <ListItem
          key={item.name || item.title}
          item={item}
          displayItem={this.props.displayItem} />
    ))

    return (
      <section className="list-wrapper">
         <h2>{categoryName}</h2>

        <div className="list">
          {items}
        </div>

        <Pagination
            category={this.state.pagination}
            goTo={this.goTo}
            url={url} />
      </section>
    );
  }
}

export default List;
