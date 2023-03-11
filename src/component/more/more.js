import './more.css'
import {Routes, Route, Link} from "react-router-dom"
import Fon from './fon.png'
import Cof from './beans.png'
import Image1 from './image1.jpeg'
import Image2 from './image2.jpeg'
import Image3 from './image3.jpg'
import Image4 from './image4.png'
import Image5 from './image5.jpeg'
import Image6 from './image6.webp'
import Beans from './dark.png'

function ddots(lastIndex){

}
export const More=()=> {
    const maxSlides = 6;
    let slideIndex =1;
    let slideIndex1=0
    let position =0;
    return (
<div>
<div className="menu1">
<img src={Fon} alt="menuImage" className="menu1Img" />
<nav className="navItems">
   <div className="navItem1">Coffee house <img src={Cof} alt="image" className="navItem1Img" /></div>
  <Link to="/about"> <div className="navItem1">Our coffee</div></Link>
   <div className="navItem1">For your pleasure</div>
</nav>

<h1 className="aboutOurCompany">About our company</h1>
<div className="moreLine">
    <hr className="moreLineHr" />
    <img src={Beans} alt="moreLineBeans" className="moreLineBeans"/>
    <hr className="moreLineHr" />
</div>

<p className="aboutOurCompanyText">There you can see all information, history<br /> and oportunities of our modern company</p>
</div>
<Link to="/"><button type="button" className="goBack">Back</button></Link>




<div className="slider">
     <button className="slider_prev" onClick={()=> {
let  sliderContainer = document.querySelector(".slider_container");
let prevBtn = document.querySelector(".slider_prev")
let nextBtn = document.querySelector(".slider_next")
/*const maxSlides =4; */
let  dot = document.querySelector(".dot");
let dots=document.querySelectorAll(".sliderDot");
slideIndex1-=1;
if(slideIndex1<0){
    slideIndex1=dots.length-1
}
for(let i=0; i<dots.length; i++){
    if(slideIndex1===dots.length-1){
        dots[0].style.backgroundColor="grey"
        dots[slideIndex1].style.backgroundColor="#fff"
    }
    else{
        if(slideIndex1===i){
        dots[i].style.backgroundColor="#fff"
        dots[i+1].style.backgroundColor="grey"
        }
       
    }
}
  
   


slideIndex-=1;
position-=sliderContainer.offsetWidth; /* добавляем значение для хода назад */
if(position<0){
    position=sliderContainer.offsetWidth*(maxSlides-1); /*перекидываем в конец */
}
console.log(position)
sliderContainer.style.right = position +"px";
     }

     }>←</button>
     <button className="slider_next" onClick={()=> {
         let  sliderContainer = document.querySelector(".slider_container");
         let prevBtn = document.querySelector(".slider_prev")
         let nextBtn = document.querySelector(".slider_next")
         let  dot = document.querySelector(".sliderDot");
         let dots=document.querySelectorAll(".sliderDot");
         slideIndex1+=1;
    console.log(slideIndex1)
         for(let i=0; i< dots.length; i++){
            if(slideIndex1>=dots.length){
                slideIndex1=0;
                dots[0].style.backgroundColor="#fff"
                dots[dots.length-1].style.backgroundColor="grey"
            }
    
            else{
            if(i===slideIndex1){
                
dots[i].style.backgroundColor="#fff"
dots[i-1].style.backgroundColor="grey"
            }
        }
         }
         
        // dots.forEach(item=> item.addEventListener("click", ()=> this.item.style.backgroundColor="red"))

          slideIndex+=1;
          position+=sliderContainer.offsetWidth; /* добавляем  позиции величину ширины слайдера */
          if(position> sliderContainer.offsetWidth*5){ /*добавляем размер прокрутки изображений враво */
              position=0;
          }
          sliderContainer.style.opacity="0.4";
          console.log(position)
          sliderContainer.style.right=position + "px";
          setTimeout(()=> {
              sliderContainer.style.opacity="1";
          }, 1000)
     }}>→</button>
     <div className="slider_container">
       <div className='divImage'><p className="imageText">Only your taste and choice</p><img src={Image1} alt="sliderImage" className="image" /><button className="sliderBtn">Show coffee</button> /</div>
        <div className='divImage'><p className="imageText">Only here you will find your coffee to your taste</p><img src={Image2} alt="sliderImage" className="image" /><button className="sliderBtn">Show coffee</button> /</div>
       <div className='divImage'><p className="imageText">What are you waiting for?? Act!!!</p> <img src={Image3} alt="sliderImage" className="image" /><button className="sliderBtn">Show coffee</button> /</div>
       <div className='divImage'><p className="imageText">Only your taste and choice</p> <img src={Image4} alt="sliderImage" className="image" /><button className="sliderBtn">Show coffee</button> /</div>
       <div className='divImage'><p className="imageText">Only here you will find your coffee to your taste</p> <img src={Image5} alt="sliderImage" className="image" /><button className="sliderBtn">Show coffee</button> /</div>
        <div className='divImage'><p className="imageText">What are you waiting for?? Act!!!</p><img src={Image6} alt="sliderImage" className="image" /><button className="sliderBtn">Show coffee</button> /</div>
      
     </div>
     <div className="sliderDots">
        <div className="sliderDot sliderDotActive"></div>
        <div className="sliderDot"></div>
        <div className="sliderDot"></div>
        <div className="sliderDot"></div>
        <div className="sliderDot"></div>
        <div className="sliderDot"></div>
     </div>
 </div>


</div>
    )
}