//javascript classes arent the same as conventional classes like Ruby

import React from 'react';
import ReactDOM from 'react-dom';
// const in the App component
// When class is created we are cerating a new class in js that has
// one method assigned that is the render method
//in order to use class based componnent react expects compnent
// has many other methods attached to it
// methods are borrowed are borrowd from react.component


//below is a class based component
class App extends React.Component {
    render() {
            //calling back to geo location API
        window.navigator.geolocation.getCurrentPosition(
            //to get reposnse or nformation we need fucntion callback x2
        position => console.log(position), //first callback/argument known as success callback
        err => console.log(err)// second callback/argument for error
    );
        return <div>Latitude: </div>

    }


}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);