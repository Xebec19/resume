import React from 'react';
import ProfileCard from './components/ProfileCard';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';  /* import brands from font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'tachyons';
import './App.css';
library.add        (fab,faEnvelope);  /* add brands in the library so I can simply write brand names as string */

class App extends React.Component{
render(){
return (
<div>
<div style={{display:"flex","justifyContent":"center",flexDirection:"column"}}>
<div style={{background:"dodgerblue",display:"flex","justifyContent":"center"}}>
<ProfileCard/>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e90ff" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,229.3C672,245,768,203,864,170.7C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
<About />
<header class="tc ph4">
<h1 class="f3 f2-m f1-l fw2 black-90 mv3 ">
Projects
</h1>
</header>
<Projects/>
<Contact />
</div>

</div> 
);  //return ends here
}
}

export default App;
