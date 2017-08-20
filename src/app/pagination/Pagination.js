import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      numPages: Math.ceil(props.category.count / 10)
    };
  }

  goToPage(page) {
    this.setState({page: page});
    const url = this.props.url.split('/');
    url[url.length - 1] = `?page=${page}`;
    this.props.goTo(url.join('/'));
  }

  handleGoTo(url, fn) {
    this.setState((prevState) => fn(prevState.page));
    this.props.goTo(url);
  }

  goUp(val) {
    return {page: val += 1};
  }

  goDown(val) {
    return {page: val -= 1};
  }

  render() {
    const {next, previous} = this.props.category;
    
    let links = [];
    for ( let x = 1; x <= this.state.numPages; x++) {
      links.push(
        <a
            key={x}
            onClick={() => this.goToPage(x)}
            className={this.state.page === x ? 'active' : ''}>
          {x}
        </a>
      );
    }

    return (
      <div className="container">
        <div className="pagination">
          <a
              disabled={!previous}
              onClick={() => this.handleGoTo(previous, this.goDown)}>
            Previous
          </a>

          {links}

          <a
              disabled={!next}
              onClick={() => this.handleGoTo(next, this.goUp)}>
            Next
          </a>
        </div>
      </div>
    );
  }
}

export default Pagination;
