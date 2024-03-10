import React from 'react';
import "../Posts/Post.css";
import postImage from "../assets/profile-pic (1).png"
import linkedInLogo from "../assets/linkedIn_logo.png";
import instagramLogo from "../assets/instagramLogo.png";
import Facebook from "../assets/FacebookLogo.png";


function Post() {
  return (
    <>
    <div class="container">
    <div class="imageContainer">
        <img class="imageProfile" src={postImage}  alt="post" />
        <div class="textContainer">
            <p class="paragraph">@navneetyadav</p> 
            <h2 class="heading">Navneet Yadav</h2>
            <img className='logo_image' src={linkedInLogo} alt="linked" />
            <img className='logo_image' src={instagramLogo} alt="instagram" />
            <img className='logo_image' src={Facebook} alt="Facebook" />
        </div>
    </div>
    <div className="content">
        
        {/* <h1>"A fit body,a calm mind,<br/>a house full of love.These things <br/>cannot be bought  -- They must be earned"</h1>
        <p>____Naval Ravikant</p> */}
        <h1> "If you have  prepared <span className='red'>hard</span> then<br/> No one can stop you from <span className='green'>success</span>"</h1>
        <p>______@navneet👍thought</p>
    </div>
</div>



    
    </>
    
  )
}

export default Post
