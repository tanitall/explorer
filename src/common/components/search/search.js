import React from "react";
import PropTypes from "prop-types";
// import { withRouter } from "react-router-dom";

const { func } = PropTypes;

export default class Search extends React.Component {
  static displayName = "Search";

  static propTypes = {
    onSearch: func
  };

  static defaultProps = {
    onSearch: () => {}
  };

  constructor(props) {
    super(props);
    this.state = { term: null };
  }

  render = () => {
    return (
      <form className="search-component" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search by address, txid, block hash, or block index" />
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.input.value);
  }
}
