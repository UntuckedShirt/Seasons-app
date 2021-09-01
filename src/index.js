//javascript classes arent the same as conventional classes like Ruby

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
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
    // constructor only job is to initialzie/update state object
    // constructor(props) {
    //     //super is a refrence to the parents constructor function
    //     super(props);
    //     // THIS IS THE ONLY TIME we do direct assignment
    //     //to this.state
    //     this.state = { lat: null, errorMessage: ''};
    //      //calling back to geo location API
         
    // }

        // the single line statement below is equivelant to the above contructor
     state = { lat: null, errorMessage: ''};

    componentDidMount() {
        // componentDidMount allows us to execute the React code when the 
        // component is already placed in the DOM
        // if function is defined inside of a class
        // this function will be auto called once when component first is rendered
        window.navigator.geolocation.getCurrentPosition(
            //to get reposnse or nformation we need fucntion callback x2
             position => this.setState({ lat: position.coords.latitude }),
                 // we did not and do not do this
                 //this.state.lat = postion.cords.latitude
                 //first callback/argument known as success callback
             err => this.setState({ errorMessage: err.message })
                // second callback/argument for error
        );
        
    }

    // componentDidUpdate() {
    //     // update comes in the form of claling a setState method
    //     // anytime this component is called rendered will be called first
    //     console.log("My component did update")
    // }

    // react says we have to define render!!
    // render is not optional and needs to be defined
    // render is part of the lifecycle method
    render() {
            //remember to remove semecolons when going from single to multiline statement
            // to conditionally return JSX we need to add simple if statemnts
            // below is called conidtional rendering
            // render method alone is about returning JSX and nothing
        if (this.state.errorMessage && !this.state.lat) {
          return <div>Error: {this.state.errorMessage}</div>;
        }
    
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
            // wea re taking prop from state of app component and passing
            // as prop down into the SeasonDisplay
            // we can take state from one component as a prop down to the child
        }
    
        return <Spinner message="Accept location request or die!!" />;
      }
    }
    
    ReactDOM.render(<App />, document.querySelector("#root"));
    



// The difference between state and props is
// state is a JS object that contains some amount of data 
// that is revelevant to a single component
// the key rerender is to update state
// state must be initialized when a component is created
// state obj/property can only be updated using 'setState'