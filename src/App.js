import React from 'react';
import './App.css';

// Make sure you add an import for your card!
import ACMCard from './components/ACMCard';
import MitchA from './components/MitchA'

function App() {
  return (
    <div className="app">
      {/*You can ignore the <div> below. This is just used to add some contextual info at the top of the page*/}
      <div id="info">
        <h1>React-tionary Business</h1>
        <h4>A webpage dedicated to business cards made in React during <a href="https://www.acmutd.co/">ACM UTD</a>'s <a href="https://hacktoberfest.acmutd.co/">Hacktoberfest</a> event</h4>
        <p>Visit <a href="https://hacktoberfest.digitalocean.com/">www.hacktoberfest.digitalocean.com</a> for more information</p>
      </div>

      <div id="business-cards">
        {/*Notice how you can give named attributes to your component!*/}
        <ACMCard name="Association for Computing Machinery" email="contact@acmutd.co" phone="555-1234" address="800 West Campbell Road" website="acmutd.co"/>
        <MitchA name ="Mitchell Ament" email = "mitchgament@gmail.com" phone = "425-503-7277" address = "Plano, TX" website="github.com/MitchAment"/>
        {/*Add your component above this comment to put it into the app!*/}
      </div>
    </div>
  );
}

export default App;
