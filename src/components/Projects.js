import React from 'react';
import image1 from '../assets/fd.png';
import image2 from '../assets/rajni.png';
import image3 from '../assets/robofriends.png';
import image4 from '../assets/bgg.png';
import image5 from '../assets/todo.png';
import 'tachyons';

const About = () => {
return (
<div>

<div 
className="mainCard">

<div 
className="boxA">
<img src={image1} alt="Project" className="b h5 w5 dib ba b--black-05 pa2 ml5"/>
</div>

<div className="boxB pa4" style={{wordWarp:"wordBreak"}}>
<h1 className="f2 f2-xs fw2 black-90 mv1">
{'Face Detection'}
</h1>
<br/>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue mr4" 
href="https://salty-dusk-04098.herokuapp.com/"
target="_blank"
rel="noreferrer">
See Live
</a>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue" 
href="https://github.com/Xebec19/face-detection"
target="_blank"
rel="noreferrer">
See Code
</a>
</div>
</div>

<div 
className="mainCard">

<div className="boxB1 pa4" style={{wordWarp:"wordBreak"}}>
<div>
<h1 className="f2 f2-xs fw2 black-90 mv1">
{'Rajni Jokes'}
</h1>
<br/>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue mr4" 
href="https://xebec19.github.io/Rajni-Jokes/"
target="_blank"
rel="noreferrer">
See Live
</a>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue" 
href="https://github.com/Xebec19/Rajni-Jokes"
target="_blank"
rel="noreferrer">
See Code
</a>
</div>
</div>

<div 
className="boxA1">
<img 
src={image2} 
alt="Project" 
className="b h5 w5 dib ba b--black-05 pa2 ml5" 
/>
</div>

</div>

<div 
className="mainCard">

<div 
className="boxA">
<img src={image3} alt="Project" className="b h5 w5 dib ba b--black-05 pa2 ml5"/>
</div>

<div className="boxB pa4" style={{wordWarp:"wordBreak"}}>
<h1 className="f2 f2-xs fw2 black-90 mv1">
{'Robo Friends'}
</h1>
<br/>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue mr4" 
href="https://xebec19.github.io/robofriends/"
target="_blank"
rel="noreferrer">
See Live
</a>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue" 
href="https://github.com/Xebec19/robofriends"
target="_blank"
rel="noreferrer">
See Code
</a>
</div>
</div>

<div 
className="mainCard">

<div className="boxB1 pa4" style={{wordWarp:"wordBreak"}}>
<div>
<h1 className="f2 f2-xs fw2 black-90 mv1">
{'Background Generator'}
</h1>
<br/>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue mr4" 
href="https://xebec19.github.io/BackgroundGenerator/"
target="_blank"
rel="noreferrer">
See Live
</a>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue" 
href="https://github.com/Xebec19/BackgroundGenerator"
target="_blank"
rel="noreferrer">
See Code
</a>
</div>
</div>

<div 
className="boxA1">
<img 
src={image4} 
alt="Project" 
className="b h5 w5 dib ba b--black-05 pa2 ml5" 
/>
</div>

</div>

<div 
className="mainCard">

<div 
className="boxA">
<img src={image5} alt="Project" className="b h5 w5 dib ba b--black-05 pa2 ml5"/>
</div>

<div className="boxB pa4" style={{wordWarp:"wordBreak"}}>
<h1 className="f2 f2-xs fw2 black-90 mv1">
{'Shopping List'}
</h1>
<br/>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue mr4" 
href="https://xebec19.github.io/Shopping-List/"
target="_blank"
rel="noreferrer">
See Live
</a>
<a 
class="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue" 
href="https://github.com/Xebec19/Shopping-List"
target="_blank"
rel="noreferrer">
See Code
</a>
</div>
</div>

</div>
)
}

export default About;