//javascript classes arent the same as conventional classes like Ruby

import React from 'react';
import ReactDOM from 'react-dom';
// const in the App component
// When class is created we are cerating a new class in js that has
// one method assigned that is the render method
// borrow in order to use class based componnent react expects compnent
// has many other methods attached to it
// methods are borrowed are borrowd from react.component
// contructor is a special function particiular to hte JS lnaguage

//below is a class based component
class App extends React.Component {
    // a constructor is called first anytime a instance of class is created
    // we call constructor to initialze state function
    constructor(props) {
        //super is a refrence to the parents constructor function
        super(props);
        // THIS IS THE ONLY TIME we do direct assignment
        //to this.state
        this.state = { lat: null };
         //calling back to geo location API
         window.navigator.geolocation.getCurrentPosition(
            //to get reposnse or nformation we need fucntion callback x2
             position => {
                 this.setState({ lat: position.coords.latitude });
                 // we did not and do not do this
                 //this.state.lat = postion.cords.latitude
             }, //first callback/argument known as success callback
            err => console.log(err)// second callback/argument for error
        );
    }

    // react says we have to define render!!
    render() {
           
        return <div>Latitude: {this.state.lat}</div>

    }


}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// The difference between state and props is
// state is a JS object that contains some amount of data 
// that is revelevant to a single component
// the key rerender is to update state
// state must be initialized when a component is created
// state obj/property can only be updated using 'setState'