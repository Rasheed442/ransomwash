import React from 'react'
import style from "../styles/Detail.module.css"
import Scroll from 'react-scroll'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineDown,AiOutlineCheck} from "react-icons/ai"
import Process from './Process'
const ScrollLink = Scroll.Link

function Detail() {
  return (
    <>
       <div className={style.header}>
        <h1>Show your car some love</h1>
        <h4>Simply book a detail online and we will arrive straight to your door. Our detailers <br/>are friendly and reliable. 
            All we require is access to water & electricity. Transparent<br/> pricing and 100% customer 
            satisfaction is what makes GoDetail Car Detailing <br/> Portland top choice.</h4>
     <ScrollLink to="grid" spy={true} smooth={true} offset={10} duration={500}><p>Select package below &nbsp;<AiOutlineDown size={15}/></p></ScrollLink>

    </div>


<div className={style.gridout} id='grid'>

    <div className={style.container}>
         <div>
            <p>INSIDE-OUT</p>
            <h1>Full Detail</h1>
         </div>

         <Image
         src="/wash.png"
         height={100}
         width={100}
         priority
         />

         <div>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/> Cars, Trucks, SUV</p>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/> Deep Cleaning</p>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/> Starting at &#8358; 4000</p>
         </div>
         <Link href='booking'><button>Book Now</button></Link>
    </div>

    <div className={style.container}>
         <div>
            <p>JUST-INSIDE</p>
            <h1>Interior Detail</h1>
         </div>

         <Image
         src="/wash1.png"
         height={100}
         width={100}
         priority
         />

         <div>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/> Shampoo Seats</p>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/> Pet Hair & Mold</p>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/> Starting at &#8358; 2000</p>
         </div>
         <Link href='booking'><button>Book Now</button></Link>
    </div>

    <div className={style.container}>
         <div>
            <p>JUST INSIDE</p>
            <h1>Exterior Detail</h1>
         </div>

         <Image
         src="/wash2.png"
         height={100}
         width={100}
         priority
         />

         <div>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/>Scratch Removal</p>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/> Paint Polishing</p>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/> Starting at &#8358; 2000</p>
         </div>
         <Link href='booking'><button>Book Now</button></Link>
    </div>

    <div className={style.container}>
         <div>
            <p>CERAMIC COATING</p>
            <h1>Get Protection</h1>
         </div>

         <Image
         src="/wash3.png"
         height={100}
         width={100}
         priority
         />

         <div>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/>Lifetime Warranty</p>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/>CARFAX Registered</p>
            <p><AiOutlineCheck style={{color:"dodgerblue"}}/> Starting at &#8358; 2000</p>
         </div>
         <Link href='booking'><button>Book Now</button></Link>
    </div>

</div>
    <Process/>
    </>
 
  )
}

export default Detail