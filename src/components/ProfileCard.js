import React from 'react';
import avatar from '../assets/profile-pic.png';
import sideImage from '../assets/sideImage.svg';
import 'tachyons';

const ProfileCard = () => {
return (
<div 
style={{marginTop:"8rem",flexDirection:"spaceAround"}} 
className="center tc ph4">
<div 
style={{wordWarp:"wordBreak"}} 
className="mainCard f3 f2-m f1-l fw2 black-90 mv3">
<h1>
Hi, I am 
<span style={{color:"white"}}>
{` `} Rohan Kumar Thakur
</span>
<br/>
and I am a Web developer
</h1>
</div>
</div>
)
}

export default ProfileCard;