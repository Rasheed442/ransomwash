import React from 'react'
import style from "../styles/Process.module.css"
import {AiFillPlayCircle} from "react-icons/ai"
import {RiTruckFill} from "react-icons/ri"
import Image from "next/image"
import {FaComments} from "react-icons/fa"
function Process() {
  return (
    <>
    <div className={style.container}>
       <h1>OUR WORK PROCESS <br/> <span>EXPLAINED</span>.</h1>
       <p>5 Min / Video</p>
       <p>We walk you through our Car Detailing Process from start 
        to finish on a <br/>one of a kind corvette, the transformation is night and day.</p>
        <button>Watch <AiFillPlayCircle size={20}/></button>
    </div>

    <div className={style.icons}>
         <div className={style.icon1}>
           <RiTruckFill size={60}/>   
           <h2>At home service</h2>
           <p>We bring the car detailing to your <br/>home or office</p>
         </div>
         <div className={style.icon2}>
           <FaComments size={60}/>   
           <h2>Get help Scheduling</h2>
           <p>Have any questions? Call us for <br/>assistance 09127805458</p>
         </div>
    </div>


    <div className={style.con}> 
        <div className={style.before}><h2>Before</h2></div>
        <div className={style.after}><h2>After</h2></div>
    </div>

    <div className={style.headline}>
        <h3>Get your car detailed while at home or at the office</h3>
        <p>As a mobile car wash, we come to you. GoDetail is a mobile car detailing service that provides complete cleaning packages for your car<br/> from 
            the comfort of your home or office. All we need is access to water and electricity. Never drive a dirty car  again! We come to 
            your<br/> home or office and come prepared with all the specialized tools and equipment needed to detail you car. We specialize in 
            interior and exterior mobile car detailing, monthly maintenance cleaning, ceramic coating, paint correction, window tinting, and paint 
            protection film in Portland and the Oregon metropolitan area. To save you time on travel and waiting in a lobby, we actually come to you.</p>
    </div>
    <div className={style.headline}>
        <h3>Car Detailing</h3>
        <p>We constantly strive to provide a fantastic auto detailing experience for our customers and leave behind excellent work that leaves your<br/> car absolutely 
            gleaming. Your vehicle will appear brand 
            new once we are all finished. GoDetail always does an excellent job delivering<br/> outstanding work. We have a 100% satisfaction guarantee for all
             of our work.</p>
    </div>
    <div className={style.headline}>
        <h3>Mobile Detailing Service By Certified Professionals</h3>
        <p>We are one of the only car wash services in Portland, OR, that uses biodegradable products! Our eco-friendly products make us stand out<br/> from other businesses 
            and will leave your car looking fabulous without any harsh chemicals, smells, or stains on the vehicle. We come<br/>
             directly to you for all our auto detail services, so there’s no need to waste precious time traveling to an automatic car wash to get a sub-par clean.</p>
    </div>
    <div className={style.headline}>
        <h3>RANSOM Is A Mobile Car Wash In LAGOS</h3>
        <p>We provide complete cleaning packages for your car, including interior and exterior detailing services as well! We service the entire Oregon
             Metropolitan Area. If you
             require auto detailing services, please get in touch with GoDetail over the phone or make an appointment online when your schedule allows you.</p>
    </div>

     <div className={style.brands}>
        <Image
        src='/toyota.png'
        width={300}
        height={50}
        priority
        />
        <Image
        src='/carvana.png'
        width={300}
        height={50}
        priority
        />
        <Image
        src='/banner.png'
        width={300}
        height={50}
        priority
        />
     </div>


     <div className={style.map}>
      <Image
      src="/map.svg"
      width={400}
      height={400}
      priority 
      />
      <h2>Proudly making cars shine in <br/>Lagos, Nigeria.</h2>
     </div>
    </>
    
  )
}

export default Process