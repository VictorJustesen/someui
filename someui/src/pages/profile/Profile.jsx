

import "./profile.scss"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookTwotTneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import Posts from "../../components/posts/Posts"
const Profile = () => {
const [desc,setDesc] =useState("description description description description description description description description description description description description  description description description description description description description description description ")
  return (
    <div className="profile">'
    <div className="images">
      <img src="https://images.pexels.com/photos/17715610/pexels-photo-17715610/free-photo-of-art-building-architecture-historical.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cover" className="cover"/>
      <img src="https://images.pexels.com/photos/17715610/pexels-photo-17715610/free-photo-of-art-building-architecture-historical.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profilepic"  className="profilepic"/>

    </div>
    <div className="profilecontainer">
      <div className="profileinfo">
        <div className="left">
          <a href="" ><InstagramIcon fontSize="large"/></a>
          <a href=""><PinterestIcon fontSize="large"/></a>
          <a href=""><TwitterIcon fontSize="large"/></a>
          <a href=""><FacebookTwotTneIcon fontSize="large"/></a>
          <a href=""><LinkedInIcon fontSize="large"/></a>
          
        </div>
        <div className="middle">
          <div className="top">
            <span>John Doe</span>
            <button>follow</button>
          </div >
       <div className="buttom">
          <div >
            <a href=""><PlaceIcon fontSize="large"/></a>
            <span>Place</span>
          </div>
          <div > 
            <a href=""><LanguageIcon fontSize="large"/></a>
            <span>website</span>
          </div>
       </div>
        </div>
        <div className="right">
        <a href=""><EmailOutlinedIcon fontSize="large"/></a>
        <a href=""><MoreVertIcon fontSize="large"/></a>

        </div>
      </div>
      <p className="desc">{desc}</p>
    </div>
    <Posts/>
    </div>
  )
}

export default Profile