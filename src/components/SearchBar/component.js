import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const { fetchPlayer } = this.props;
    const { value } = this.state;

    e.preventDefault();

    if (value) {
      fetchPlayer(value);
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__input-wrapper">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="SearchBar__input"
              placeholder="Enter Steam ID..."
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  fetchPlayer: PropTypes.func.isRequired,
};

export default SearchBar;
