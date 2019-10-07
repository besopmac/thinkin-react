// receives all user input
import React from "react";

export default function SearchBar() {
  return (
    <form>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="showToggle" />
        <label className="form-check-label" htmlFor="showToggle">
          Only show products in stock
        </label>
      </div>
    </form>
  );
}
