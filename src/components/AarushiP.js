// It's important to import react before we begin so we can get access to the Component superclass
import React, { Component } from 'react';

// Make sure to update this import to the name of your CSS file!
import "./AarushiP.css";

/*
This is a general class that you can use as a template to create your card! Make sure you make a copy
of the file before editing it

Change the name "ACMCard" to some other valid identifier name. This way, your unique
component won't interfere with the names of anyone else's card.
*/
class AarushiP extends Component
{
    render()
    {
        /*
        Here, we are returning some JavaScript XML (used in a similar manner to HTML) which
        allows us to actually build our component.
        */
        return (
        <div id="AarushiP-card">
            <span><img id="acm-logo" alt="ACM Logo" src={"./images/acm-light-alt.png"}/></span>
            {/*Replace any 'this.props.attribute' with the name of the attributes you gave in the App.js file!*/}
            <h1>{this.props.name}</h1>

            {/*Create your card however you want!*/}
            <div id="AarushiP-contact-info">
                <h3>Contact Info</h3>
                <ul>
                    <li>{this.props.email}</li>
                    <li>{this.props.phone}</li>
                    <li>{this.props.address}</li>
                    <li>{this.props.website}</li>
                </ul>
            </div>
            
            <div id="AarushiP-about-me">
                <h3>About Me</h3>
                <p>
                    Hello! I'm Aarushi Pandey, a sophomore CS student at UTDallas, and one of the
                    staff members for ACM'S Hacktoberfest event. 
                    I'm super excited to be here at this workshop today, and I can't believe how simple this is! 
                    Nice to meet you! :)
                </p>
            </div>
        </div>
        )

    }
}

// Make sure to update this export with the name of the above class
export default AarushiP;