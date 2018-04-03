import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Calc extends Component {
    render() {
        let result = 0;
        switch(this.props.oper) {
            case "+" :
                result = parseFloat(this.props.x) + parseFloat(this.props.y);
                break;
            case "*" : 
                result = parseFloat(this.props.x) * parseFloat(this.props.y);
                break;
            default :
                result = 0;
        }

        return (
            <div>
                <h3>연산 방식 : { this.props.oper }</h3>
                <hr />
                <div>
                    {this.props.x} {this.props.oper} {this.props.y}
                        = {result}
                 </div>
            </div>
        );
    }
}

Calc.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    oper: (props, propName, componentName) => {
        if (props[propName] !== '+' && props[propName] !== '*') {
            return new Error(propName + ' should be + or *.')
        }
    }
}

export default Calc;