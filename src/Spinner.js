import React from 'react'

// easier to create new component rather than stuffing
// components into components
const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );

};

//this is a  default if message prop is not provided

Spinner.defaultProps = {
    message: 'Loading...!'
}

export default Spinner;