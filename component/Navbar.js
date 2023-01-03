import React, { useState , useEffect} from 'react'
import style from "../styles/navbar.module.css"
import Link from "next/link"
import Scroll from 'react-scroll'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import Aos from 'aos'
import 'aos/dist/aos.css' 
const ScrollLink = Scroll.Link
function Navbar() {
    const [open, setOpen] = useState(true)
    useEffect(() =>{
        Aos.init({duration: 400});
    }, []);
  return (
    <>
         <div className={style.container}>
            <Link href="/"><h2>RANSOM</h2></Link>
            <div className={style.navlink}>
                <ScrollLink to='grid'spy={true} smooth={true} offset={10} duration={500}><p>Wash Packages</p></ScrollLink>
                <ScrollLink to='review' spy={true} smooth={true} offset={1} duration={500}><p>Review</p></ScrollLink>
                <Link href=''><p>Support</p></Link>
                <Link href=''><p>Become a Technician</p></Link>
            </div>
            <div className={style.navlink}>
                <Link href='booking'><p>Book Now</p></Link>
                <Link href=''><p>09127805458</p></Link>
            </div>

         { open ? "":<div className={style.navmenu} data-aos='slide-right'>
             <div className={style.navm}>
             <ScrollLink to='grid'spy={true} smooth={true} offset={10} duration={500}><p>Wash Packages</p></ScrollLink>
                <ScrollLink to='review' spy={true} smooth={true} offset={1} duration={500}><p>Review</p></ScrollLink>
                <Link href=''><p>Support</p></Link>
                <Link href=''><p>Become a Technician</p></Link>
            </div>
            <div className={style.navm}>
                <Link href='booking'><p>Book Now</p></Link>
                <Link href=''><p>09127805458</p></Link>            
            </div>
       </div> }
           
           <div onClick={()=> setOpen(!open)} className={style.navicon}>
              {open?<AiOutlineMenu size={28}/>: <AiOutlineClose size={25}/>} 
           </div>
    </div>
 </>
  )
}

export default Navbar