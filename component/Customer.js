import React, {useState, useEffect} from 'react'
import style from "../styles/customer.module.css"
import Aos from "aos"
import "aos/dist/aos.css";
import Detail from './Detail';
function Customer() {
    const [change, setChange] = useState(false)
    const [change1, setChange1] = useState(false)
    const [open , setOpen] = useState(true)
    const [open1, setOpen1] = useState(false)
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
    
  return (
    <>
     <div className={style.header}>
        <h1>Why Customers Love <span>RANSOM</span></h1>

        <div className={style.btn}>
        <button className={style.btn1} style={{backgroundColor:change1 ? "gainsboro":"aqua"}} onClick={()=>{
           setChange(false)
           setChange1(false)
           setOpen1(false)
           setOpen(true)
        }}>Customers</button>
        <button className={style.btn2} style={{backgroundColor:change ? "aqua":""}} onClick={()=>{
            setChange(true)
            setOpen(false)
            setOpen1(true)
            setChange1(true)
        }}>Business Fleet</button> 
        </div>
        
    </div>


    {open ?<div className={style.grid} data-aos="zoom-in">
        <div className={style.main}>
            <h1>It&apos; easy</h1>
            <p>You can book, pay for, and manage
            your car care service from your
            mobile or computer. Simply register
            an account and enjoy a 10%
            discount off your first watch,
            and with the option to cancel or
            reschedule at any time- the power
            is in your hands.</p>
        </div>
        <div className={style.main} style={{backgroundColor:"darkcyan"}}>
            <h1>It&apos; easy</h1>
            <p>You can book, pay for, and manage
            your car care service from your
            mobile or computer. Simply register
            an account and enjoy a 10%
            discount off your first watch,
            and with the option to cancel or
            reschedule at any time- the power
            is in your hands.</p>
        </div>
        <div className={style.main} style={{backgroundColor:"aqua"}}>
            <h1>It&apos; easy</h1>
            <p>You can book, pay for, and manage
            your car care service from your
            mobile or computer. Simply register
            an account and enjoy a 10%
            discount off your first watch,
            and with the option to cancel or
            reschedule at any time- the power
            is in your hands.</p>
        </div>
    </div>:""}

    {open1 ?<div className={style.grid} data-aos="slide-right">
        <div className={style.main} style={{backgroundColor:"orangered"}} >
            <h1>Account Management</h1>
            <p>You'll be assigned an RANSOM
        account manager who'll create a
        bespoke solution to suit your
        business needs.This will include
        custom pricing, service
        requirements and scheduling your
        first visit from us..</p>
        </div>
        <div className={style.main} style={{backgroundColor:"darkcyan"}}>
            <h1>Flexibility & Efficiency</h1>
            <p>Using our app you can schedule
        monthly,weekly,and even daily
        washes and valets. Once you've
        selected you're preffered location
        you're sorted- and free to dedicate time to other business..</p>
        </div>
        <div className={style.main} style={{backgroundColor:"black"}}>
            <h1>Cooperate social responsibility</h1>
            <p>Our waterless cleaning methods
            give numerous benefits to business
            clients who are concerned with
            improving their CSR. We can clean
            vehicles wherever they stand
            without the need for drainage and
            offer huge water savings comapared
            with traditional car washes.</p>
        </div>
    </div>:""}
    <Detail/>
    </>
   

  )
}

export default Customer