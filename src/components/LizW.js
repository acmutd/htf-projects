// It's important to import react before we begin so we can get access to the Component superclass
import React, { Component } from 'react';

// Make sure to update this import to the name of your CSS file!
import "./LizW.css";

/*
This is a general class that you can use as a template to create your card! Make sure you make a copy
of the file before editing it

Change the name "ACMCard" to some other valid identifier name. This way, your unique
component won't interfere with the names of anyone else's card.
*/
class LizW extends Component
{
    render()
    {
        /*
        Here, we are returning some JavaScript XML (used in a similar manner to HTML) which
        allows us to actually build our component.
        */
        return (
        <div id="lizw-card">
            <span><img id="lizw-logo" alt="Liz Wigglesworth profile puctire" src={"./images/liz-wigglesworth-profile.jpg"}/></span>
            {/*Replace any 'this.props.attribute' with the name of the attributes you gave in the App.js file!*/}
            <h1>{this.props.name}</h1>

            {/*Create your card however you want!*/}
            <div id="lizw-card-contact-info">
                <h3>Contact Info</h3>
                <ul>
                    <li><a href={"https://" + this.props.website} target="_blank" rel="noopener noreferrer">{this.props.website}</a></li>
                    <li><a href={"https://github.com/" + this.props.github } target="_blank" rel="noopener noreferrer">{this.props.github}</a></li>
                    <li>{this.props.email}</li>
                </ul>
            </div>
            
            <div id="lizw-card-about-me">
                <h3>About Me</h3>
                <p>
                    Hello! I'm a Computer Science major at UT Dallas who loves learning about code and cybersecurity.
                </p>
            </div>
        </div>
        )

    }
}

// Make sure to update this export with the name of the above class
export default LizW;