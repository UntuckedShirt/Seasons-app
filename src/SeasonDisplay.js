import React from 'react';

// anytime prop is passed into a functional component it shows up 
// inside of an an obj that is the first arguement of the functional component
// referesed to as props
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }

};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    

    return <div>{ }</div>
    

};

export default SeasonDisplay;