import React, { Component } from 'react';

class CountryItem extends Component {
    render() {
        const item = this.props.country
        return (
            <li key={ item.no }
                className={ item.visited ? 'list-group-item active' : 'list-group-item' }>
                { item.country }
            </li>
        );
    }
}

export default CountryItem;