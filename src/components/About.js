import React from 'react';
import avatar from '../assets/profile-pic.png';
import sideImage from '../assets/sideImage.svg';
import resume from '../assets/Resume.pdf'
import 'tachyons';

const About = () => {
return (
<div style={{marginTop:"5rem",flexDirection:"spaceAround"}} className="center">
<div 
style={{"display":"flex","flex-warp":"warp"}} 
className="mainCard">
<header class="tc ph4">
<h1 class="f3 f2-m f1-l fw2 black-90 mv3 ">
About Me
</h1>
<img 
src={avatar} 
className="br-100 h5 w5 dib ba b--black-05 pa2" 
title="My picture"
alt="Rohan"/>
<div>
<h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy mb6" style={{wordWarp:"wordBreak"}}>
I am full-stack developer based in Delhi, India.
<br/>
I am skilled in ReactJS, NodeJS, PostgreSQL and Heroku.
<br/>
<a 
href={resume} 
className="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue"
download>
Resume
</a>

</h2>
</div>
</header>
</div>
</div>
)
}

export default About;