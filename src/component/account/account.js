import './account.css'
import {Routes,Route, Link } from "react-router-dom"
import Heart from "./heart.png"

import Visible from './visible.png'
import Invisible from './invisible.png'
import User from './userr.png'

function checkInput(val){
   const password= document.querySelector('.regPassword')
   const pasLength=password.value.length
   const pasLen =document.querySelector('.pasLen')
    if(val<6){
pasLen.style.display="block"
const countNum=0;

    }
    else{
        pasLen.style.display="none"
        const pasStroke=password.value
       let digitCount=0;
     for(let i=0; i< pasLength; i++){
        if(pasStroke[i]==='1' || pasStroke[i]==='2' || pasStroke[i]==='3' || pasStroke[i]==='4' || pasStroke[i]==='5' || pasStroke[i]==='6' || 
        pasStroke[i]==='7' || pasStroke[i]==='8' || pasStroke[i]==='9'){
digitCount+=1;
        }
     }
     if(digitCount<4){
       const warningPassword=document.querySelector('.pasLen')
        pasLen.textContent="type 4 or more digits"
        pasLen.style.display="block"
     }
     else {
        pasLen.style.display="none"
     }
    }
   
   const mailInp=document.querySelector('.regMail')
    const mailInpLen= mailInp.value.length
    const  mailInpValue= mailInp.value
    const mailLen=document.querySelector('.mailLen')
    if(mailInpLen===0){
        mailLen.textContent="please type name"
        mailLen.style.display="block"
    }
    else{
        mailLen.style.display="none"
    }
    
}
export const Account =()=> {
   let count=2;
    return (
        <div>
        <div className="registration">
<div className="registrationForm">
    <h1 className='regTitle'>Sign in</h1>
    <div className="inputForms">
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2710/2710718.png" alt="eye" className="eyeOpen" onClick={()=> {
                 const eye=document.querySelector('.eyeOpen')
                 const regPassword =document.querySelector('.regPassword')
                 regPassword.setAttribute('type', 'text');
                 const massImage=["https://cdn-icons-png.flaticon.com/512/2874/2874802.png", "https://cdn-icons-png.flaticon.com/512/2710/2710718.png" ]
                count++;
                if(count%2===0){
                 eye.src=massImage[1] 
                 regPassword.setAttribute('type', 'password')
                }
                else{
                    eye.src=massImage[0]
                   
                   
                }
            }} />
            <div> <p className="mailLen ttp">type 6 characters</p>
    <input type="text" className="regMail" placeholder='type name...' />
    <img src={User} alt="logo" className="imageForUserInput" />
    </div>
    </div>
    <input type="password" className="regPassword"  placeholder='type password...'/>
    <p className="pasLen  ttr">type 6 characters</p>
    </div>
   
   
    <button type="button" className="createAccount crAc1" onClick={()=>{
const len= document.querySelector('.regPassword').value.length

 checkInput(len)}}>
Log in 
    </button>
   <h4 className="regTitle regTitle3 rreg"><Link to="/reg">Back to registration</Link></h4> 
</div>
<div className="regTxt">
    <h1 className="regTxtTitle">About us</h1>
    <br />

    <h3 className="regTxtText">Our online store is very popular among other web services. 
    Only here you will find any coffee to your taste.
     Our products are delivered all over the world.
      Only here you will find coffee to your taste at a low price!
       What are you waiting for???</h3>
</div>

        </div>
        <img src={Heart} alt="heart" className="heart1" />
        <img src={Heart} alt="heart" className="heart2" />
       
      
        </div>
    )
}