import React from 'react'
import style from "../styles/footer.module.css"
import Link from "next/link"
import {AiFillInstagram,AiFillFacebook,AiFillYoutube,AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"
function Footer() {
  return (
    <div className={style.container}>
        <div className={style.main}>
            <h3>LOCATIONS SERVED </h3>
            <Link href='/'><p>Lagos.....for now</p></Link>
        </div>
        <div className={style.main}>
            <h3>QUICK LINKS</h3>
            <Link href='/'><p>Car Detailing Traning</p></Link>
            <Link href='/'><p>Home Page</p></Link>
            <Link href='/'><p>Gift Certificates</p></Link>
            <Link href='/'><p>Our Gallery</p></Link>
            <Link href='/'><p>Pricing</p></Link>
            <Link href='/'><p>Careers</p></Link>
            <Link href='/'><p>FAQ</p></Link>
        </div>
        <div className={style.main}>
            <h3>SERVICES</h3>
            <Link href='/'><p>Mobile Detailing</p></Link>
            <Link href='/'><p>Interior Detailing</p></Link>
            <Link href='/'><p>Ceramic Coating</p></Link>
            <Link href='/'><p>Window Tinting</p></Link>
            <Link href='/'><p>Exterior Detailing</p></Link>
            <Link href='/'><p>Fleet Cleaning</p></Link>
            <Link href='/'><p>Dealershipd</p></Link>
        </div>
        <div className={style.main}>
            <h3>TERMS</h3>
            <Link href='/'><p>Service Agreement</p></Link>
            <Link href='/'><p>Terms of Service</p></Link>
            <Link href='/'><p>Privacy Policy</p></Link>
            <Link href='/'><p>Contact Us</p></Link>
            <Link href='/'><p>About Us</p></Link>
            <Link href='/'><p>Site Map</p></Link>
            <Link href='/'><p>Car Wash</p></Link>
        </div>

        <div className={style.main}>
           <div className={style.icon}>
              <AiFillInstagram style={{color:"white"}} size={20}/>
              <AiFillFacebook style={{color:"white"}} size={20}/>
              <AiFillYoutube style={{color:"white"}} size={20}/>
              <AiFillTwitterCircle style={{color:"white"}} size={20}/>
              <BsPinterest style={{color:"white"}} size={20}/>
              <AiFillLinkedin style={{color:"white"}} size={20}/>
           </div>
           <p>Ransom Auto Detailing</p>
           <p>off Lekki Victoria Island Lagos</p>
           <p>Monday - Sunday</p>
           <p>8:00 AM to 8:00 PM</p>
        </div>
    </div>
  )
}

export default Footer