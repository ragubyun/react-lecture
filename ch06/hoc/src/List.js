import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem'
import Logger from './Logger'

class List extends Component {
    render() {
        // console.log('render List')
        const items = this.props.itemList.map(item => {
            return (<ListItem key={item.no} {...item} isLog={true}></ListItem>)
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

export default Logger(List);