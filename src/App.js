import React from 'react';
import './App.css';

// Make sure you add an import for your card!
import SanjeevPCard from './components/SanjeevP.js';

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
        <SanjeevPCard name="Sanjeev Penupala" email="sanjeev.penupala@acmutd.co" phone="(469) 713-7399" address="11105 Blaze Street, Aubrey, TX 76227" website="sanjeevpenupala.dev"/>

        {/*Add your component above this comment to put it into the app!*/}
      </div>
    </div>
  );
}

export default App;