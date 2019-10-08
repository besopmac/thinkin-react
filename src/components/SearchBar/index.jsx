// receives all user input
import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            id="showToggle"
            type="checkbox"
            className="form-check-input"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          <label className="form-check-label" htmlFor="showToggle">
            Only show products in stock
          </label>
        </div>
      </form>
    );
  }
}

export default SearchBar;
