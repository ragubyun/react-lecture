import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyButton extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }
    
    render() {
        console.log('render MyButton')
        return (
            <button className="btn btn-default" onClick={() => this.props.addItem()}>
                Add Item!!
            </button>
        );
    }
}

MyButton.propTypes = {
    addItem: PropTypes.func.isRequired
};

export default MyButton;