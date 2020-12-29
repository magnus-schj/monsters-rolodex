import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange
            /*
            HVORFOR FUNKER IKKE DETTE?
              function (e) {
                this.setState({ searchField: e.target.value });
              }
              */
        } />
)