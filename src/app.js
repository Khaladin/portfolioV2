import React, {Component} from 'react';

import SandyBeach from './pics/blueSand.jpg';

import Header from './header';
import Contact from './contact-card';
import ContactLinks from './contact-links';
import Skills from './skills';
import Projects from './projects';

 class App extends Component {
   render() {
     return(
       <div>
         <Header />
         <Contact />
         <ContactLinks />
         <Skills />
         <Projects />
        </div>
     );
   }
 }

 export default App;
