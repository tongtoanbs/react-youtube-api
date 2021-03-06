import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    value={this.state.term}
                    placeholder="Type to search"
                    onChange={e => this.onInputChange(e.target.value)} />
            </div>
        );
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar