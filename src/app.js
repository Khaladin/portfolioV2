import React, {Component} from 'react';

import SandyBeach from './pics/blueSand.jpg';

import Header from './header';
import Contact from './contact-card.js'
import ContactLinks from './contact-links.js'

 class App extends Component {
   render() {
     return(
       <div>
         <Header />
         <Contact />
         <ContactLinks />
        </div>
     );
   }
 }

 export default App;
