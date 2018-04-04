import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem'

class List extends Component {
    render() {
        const items = this.props.itemList.map(item => {
            return (<ListItem key={item.no} {...item}></ListItem>)
        })
        return (
            <ul className="list-group">
                {items}
            </ul>
        );
    }
}

List.propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.object)
};

export default List;