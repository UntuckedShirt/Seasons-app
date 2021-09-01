import React from 'react';
import './SeasonDisplay.css'

//below holds key:value pairs
//the strings below match whats in said the get season const
const seasonConfig = {
    summer: {
        text: 'Lets get tan!!',
        iconName: "sun"
    },
    winter: {
        text: 'Its brick outside!!',
        iconName: 'snowflake'
    }

};

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
    const { text, iconName } = seasonConfig[season]; // {text, iconName}
    // the statements brlow of redundant
    // const text = season === 'winter' ? 'Its brick bro!!' : 'Its hot as hell lets go swimming!!'
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    // to display icons use lines below
    //multiline JSX expression
    
    //always make sure root element inside compnent has classname equal to
    // a className version of component name

    return (
        <div className={`season-display ${season}`}>
            
            <i className={`icon-left massive ${iconName} icon`} />
            <h4>{text}</h4>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );

};

export default SeasonDisplay;