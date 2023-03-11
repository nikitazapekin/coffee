import './registration.css'
import {Routes,Route, Link } from"react-router-dom"
import Gmail from './gmail.webp'
import Facebook from './facebook.png'
import Tel from './tel.png'
import Heart from './heart.png'
import Userr from './userr.png'
import Mail from './mail.png'


function checkInput(val){
    let password= document.querySelector('.regPassword')
    let pasLength=password.value.length
    let pasLen =document.querySelector('.pasLen')
     if(val<6){
 pasLen.style.display="block"
 let countNum=0;
 
     }
     else{
         pasLen.style.display="none"
         let pasStroke=password.value
         let digitCount=0;
      for(let i=0; i< pasLength; i++){
         if(pasStroke[i]==='1' || pasStroke[i]==='2' || pasStroke[i]==='3' || pasStroke[i]==='4' || pasStroke[i]==='5' || pasStroke[i]==='6' || 
         pasStroke[i]==='7' || pasStroke[i]==='8' || pasStroke[i]==='9'){
 digitCount++;
         }
      }
      if(digitCount<4){
         let warningPassword=document.querySelector('.pasLen')
         pasLen.textContent="type 4 or more digits"
         pasLen.style.display="block"
      }
      else {
         pasLen.style.display="none"
      }
     }
     //===========================================
     let mailInput = document.querySelector('.regMail')
     let mailLength=mailInput.value.length
     let mailStroke= mailInput.value
     let sobakCount=0
     let mailLenn=document.querySelector('.mailLenn')
     if(mailLength===0){
         mailLenn.textContent="please type mail"
         mailLenn.style.display="block"
     } else{
     if(!mailStroke.includes('@')){
         mailLenn.style.display="block"
        mailLenn.textContent="thats not a mail"
     }
     else{
         mailLenn.style.display="none"
     }
     }
    
   let userForm=document.querySelector('.regUser')
   let userFormVal=userForm.value
   let userWarning= document.querySelector('.userWarning')
  if(userFormVal.length===0){
userWarning.style.display="block"
userWarning.textContent="type name"
  }
  else{
    userWarning.style.display="none"
  }
 }
export const Registration =()=> {
    let count=2
    return (
        <div>
        <div className="registration">
<div className="registrationForm">
    <h1 className='regTitle'> Registration here</h1>
    <div className="inputForms">
        <div>
        <p className="userWarning">type 6 characters</p>
    <input type="text" className="regUser" placeholder='type username...'/>
        <img src={Userr} alt="item" className="imageForUserInput" />





    </div>
    <div>
    <p className="mailLenn">type 6 characters</p>
    <input type="text" className="regMail" placeholder='type email...' />
    <img src={Mail} alt="mail" className="imageForMail" />
    </div>
    <div>
    <input type="text" className="regPassword"  placeholder='type password...'/>
    <p className="pasLen rregP">type 6 characters</p>
    <img src="https://cdn-icons-png.flaticon.com/512/2710/2710718.png" alt="eye" className="eyeOpen eyy" onClick={()=> {
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
    </div>
    </div>
    <h2 className="regTitle regTitle2">Or sign up</h2>
    <div className="regItems">
        <div className="regItem"><img src={Gmail} alt="regImage" className="regImg" /></div>
        <div className="regItem"><img src={Facebook} alt="regImage" className="regImg" /></div>
        <div className="regItem"><img src={Tel} alt="regImage" className="regImg" /></div>
    </div>
    <button type="button" className="createAccount"  onClick={()=>{
const len= document.querySelector('.regPassword').value.length

 checkInput(len)}}>
Create account
    </button>
   <h4 className="regTitle regTitle3"><Link to="/account">Have an account?</Link></h4> 
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