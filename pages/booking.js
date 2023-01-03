import React,{useState} from 'react'
import Navbar from '../component/Navbar'
import style from "../styles/booking.module.css"
import Image from "next/image"
import Link from 'next/link'
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
function booking() {
    const [color, setColor] = useState(false)
    const [color1, setColor1] = useState(false)
    const [color2, setColor2] = useState(false)
    //  usestates for the bgcolors of the car models
    const [email, setEmail] = useState()
    const [car, setCar] = useState()
    const [model, setModel] = useState()
    const [colors, setColors] = useState()
    const [plate, setPlate] = useState()
    const [address, setAddress] = useState()
    const [time, setTime] = useState()
    const [Firstname, setFirstname] = useState()
    const [Lastname, setLastname] = useState()
    const [number, setNumber] = useState()
    const [cardholder, setCardholder] = useState()
    const [cardnumber, setCardnumber] = useState()
    const [mmyy, setmmyy] = useState()
    const [cvc, setCvc] = useState()


    const detail = {email,model,car,colors,plate,address,Firstname,Lastname,number,cardholder,cardnumber,mmyy,cvc}
   async function handler(e){
      const response = await fetch ("https://x8ki-letl-twmt.n7.xano.io/api:O8cBFVK1/authentication",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(detail)
      })
      console.log(detail)
    }
  return (
    <div className={style.background}>


      <div className={style.header}>
        <Link href="/"><h1>RM</h1></Link>
        </div>
<div className={style.container}>

        <div div className={style.main}>
           <h2>Let&apos;s get that dirty car washed!</h2>
           <div className={style.mail}>
            <h2>Start Your Booking</h2>
            <form className={style.mail2}>
                <label>Email</label>
                <input type='email'onChange={(e)=> setEmail(e.target.value)}/>
            </form>
           </div>
        </div>


        <div div className={style.main}>
           <h2>What kind of car do you drive?</h2>

        <div className={style.grid}>
                  <div className={style.car} 
                  onClick={()=> {setColor(true), setColor1(false), setColor2(false)}} 
                  style={{backgroundColor:color?"blue":"",color:color?"white":""}}
                  >
                <Image
                priority
                width={50}
                height={30}
                src='/sedan.svg'
                />
                <p>Sedan</p>
            </div>
            <div className={style.car} 
                onClick={()=> {setColor1(true), setColor(false), setColor2(false)}} 
                style={{backgroundColor:color1?"blue":"",color:color1?"white":""}}
                >
                <Image
                priority
                width={50}
                height={30}
                src='/suv.svg'
                />
                <p>SUV</p>
            </div>
            <div className={style.car}
             onClick={()=> {setColor2(true), setColor(false), setColor1(false)}}
             style={{backgroundColor:color2?"blue":"",color:color2?"white":""}}
             >
                <Image
                priority
                width={50}
                height={30}
                src='/truck.svg'
                />
                <p>Truck</p>
            </div>
     </div>  
      

          <div className={style.grid2}>
             <div className={style.mail2}>
                <label>Car Make</label>
                <input type='text' placeholder='ford' onChange={(e)=> setCar(e.target.value)}/>
             </div>
             <div className={style.mail2}>
                <label>Car Model</label>
                <input type='text' placeholder='Focus'  onChange={(e)=> setModel(e.target.value)}/>
             </div>
             <div className={style.mail2}>
                <label>Color</label>
                <input type='text' placeholder='Black'  onChange={(e)=> setColors(e.target.value)}/>
             </div>
             <div className={style.mail2}>
                <label>license Plate</label>
                   <input type='text' placeholder='*******' onChange={(e)=> setPlate(e.target.value)}/>
             </div>
          </div>

        </div>
     

        <div div className={style.main}>
           <div className={style.mail}>
            <h2>Where will your car be washed</h2>
            <form className={style.mail2}>
                <label>Street Address</label>
                <input type='text' placeholder='location...'  onChange={(e)=> setAddress(e.target.value)}/>

                <label>Time</label>
                <input type='datetime-local' onChange={(e)=> setTime(e.target.value)}/>
            </form>
           </div>
        </div>




{/* jj */}


        <div div className={style.main}>
           <h2>Personal and Billing Information</h2>
 
      

          <div className={style.grid2}>
             <div className={style.mail2}>
                <label>First Name</label>
                <input type='text'  onChange={(e)=> setFirstname(e.target.value)}/>
             </div>
             <div className={style.mail2}>
                <label>Last Name</label>
                <input type='text'  onChange={(e)=> setLastname(e.target.value)}/>
             </div>
             <div className={style.mail2}>
                <label>Email</label>
                <input type='email'  onChange={(e)=> setEmail(e.target.value)}/>
             </div>
             <div className={style.mail2}>
                <label>Mobile Phone Number</label>
                <input type='number' onChange={(e)=> setNumber(e.target.value)}/>
             </div>
          </div>

          <div className={style.info}>
            <h3>Billing Information</h3>
            <p>You are only charged once you&apos;ve had a chance to review your wash.</p>
            <div className={style.mail2}>
                <label>Card Holder Name</label>
                <input type="text"  onChange={(e)=> setCardholder(e.target.value)}/>
            </div>

          <div className={style.mail3}>
            <input type='number'  placeholder="Card number"  onChange={(e)=> setCardnumber(e.target.value)}/>
            <input type='text'  placeholder="MM/YY" onChange={(e)=> setmmyy(e.target.value)}/>
            <input type='text'  placeholder='CVC'  onChange={(e)=> setCvc(e.target.value)}/>
          </div>
       
          </div>
             <button onClick={handler}>Complete Booking</button>
        </div>
     

</div>

    </div>
  )
}

export default booking