// It's important to import react before we begin so we can get access to the Component superclass
import React, { Component } from 'react';

// Make sure to update this import to the name of your CSS file!
import "./PeiyunT.css";

/*
This is a general class that you can use as a template to create your card! Make sure you make a copy
of the file before editing it

Change the name "ACMCard" to some other valid identifier name. This way, your unique
component won't interfere with the names of anyone else's card.
*/
class PeiyunT extends Component
{
    render()
    {
        /*
        Here, we are returning some JavaScript XML (used in a similar manner to HTML) which
        allows us to actually build our component.
        */
        return (
        <div id="PeiyunT-card">
            <span><img id="acm-logo" alt="ACM Logo" src={"./images/acm-light-alt.png"}/></span>
            {/*Replace any 'this.props.attribute' with the name of the attributes you gave in the App.js file!*/}
            <h1>{this.props.name}</h1>

            {/*Create your card however you want!*/}
            <div id="PeiyunT-card-contact-info">
                <h3>Contact Info</h3>
                <ul>
                    <li>{this.props.email}</li>
                    <li>{this.props.phone}</li>
                    <li>{this.props.address}</li>
                    <li>{this.props.website}</li>
                </ul>
            </div>
            
            <div id="PeiyunT-card-about-me">
                <h3>About Me</h3>
                <p>
                    Hello! I am a junior studying computer science.
                </p>
            </div>
        </div>
        )

    }
}

// Make sure to update this export with the name of the above class
export default PeiyunT;