import React from 'react'
import style from "../styles/main.module.css"
import Image from 'next/image'
import {AiFillStar} from "react-icons/ai"
import Customer from './Customer'
function Main() {
  return (
   <>
    <div className={style.container}>
        <div className={style.background} id='review'>

            <div className={style.font}> 
                <Image 
                src='/google.png'
                width={150}
                height={50}
                priority
                />
                <div className={style.star}>
                  <AiFillStar size={25}/>
                  <AiFillStar size={25}/>
                  <AiFillStar size={25}/>
                  <AiFillStar size={25}/>
                  <AiFillStar size={25}/>
                </div>
                <h4>EXCELLENT</h4>
                <p>Based on <span>368 reviews</span></p>
            </div>

            <div className={style.font}>
                <div className={style.name}>
                   <div className={style.feed}>
                         <Image
                     src='/feed.jpeg'
                     width={40}
                     height={40}
                     priority
                     />
                     <p>Micheal Norco <br/><span>2022.11.12.</span></p>
                    </div> 
                
                     <Image src="/gg.png" width={40} height={40} priority/>
                </div>
                <div className={style.star1}>
                <AiFillStar size={20}/>
                  <AiFillStar size={20}/>
                  <AiFillStar size={20}/>
                  <AiFillStar size={20}/>
                  <AiFillStar size={20}/>
                </div>
                <p>Matt did an excellent job on our two details. 
                We was very thorough and had the vehicles in the 
                cleanest form they've been in.......</p>
            </div>

        </div>


        <div className={style.background}>

            <div className={style.card}>
                <p>Share the joy</p>
                <h1>Holiday Gifts</h1>
                <Image src='/gift.png'
                width={200}
                height={200}
                priority/>
                <button>shop eGift Cards</button>
            </div>
        </div>

        <div className={style.background}>

            <div className={style.card}>
                <p>Protect Your Car </p>
                <h1>Road Protection</h1>
                <Image src='/tesla.jpeg'
                width={300}
                height={200}
                priority/>
                <button>Customize Yours</button>
            </div>
        </div>

    </div>
    


    <div className={style.wash}>
        <h1>Hand Wash vs. Tunnel Wash</h1>
        <p>GoDetail is the only choice for professional car care. Our experienced detailers provide a<br/> hand wash 
            and waxing that goes far beyond a typical tunnel wash, with an in–depth clean to<br/> remove dirt, dust, and 
            debris and gently scrub away any contaminants that may have built <br/>up over time. The result? A 
            sparkling clean car that looks its absolute best.</p>
    </div>
    <Customer/>
    </> 
  )
}

export default Main