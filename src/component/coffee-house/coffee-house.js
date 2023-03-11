import './coffee-house.css'
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Phot from './phot1.png'
import Beans from './coffee-beans.png'
import { MenuSite } from "../menu-site/menu-site"
import { MenuSite2 } from '../menu-site1/menu-site2/menu-site2'
import Cup from "./pngCup.png"
import PngBeans from './pngBeans.png'
import Heart from './heartt.png'
import { FooterOfPage } from '../footerOfPage/footerOfPage'

export const CoffeeHouse=()=>{
    return (
        <div>
             <p className="cofHouseTitle">Coffee house</p>
             <MenuSite />
            
           <div className="coffeeHouseWrapperBlock">
            <img src={Beans} alt="beans" className="coffeeBorderBeans" />
            <img src={Beans} alt="beans" className="coffeeBorderBeans1" />
            <h1 className="coffeeHouseWrapperTitle">Coffee house</h1>
            <img src={Phot} alt="me" className="mee" />
            <h3 className="coffeeHouseWrapperText">A little bit about us. Our company was founded in 2023. Here you will feel the comfort of home and care. The most delicious coffee is just for you. Enjoy every second with a cup of our coffee!</h3>
          

            <img src={Cup} alt="board" className="coffeeWrapperRamka1" />
       <img src={PngBeans} alt="pngBeans" className="pngWrapperBeans" />
       <hr className="coffeeWrapperHr" />
       <img src={Heart}  alt="heart" className="heartOfCoffeeWrapper1" />
       <img src={Heart}  alt="heart" className="heartOfCoffeeWrapper " />
       <img src={Heart}  alt="heart" className="heartOfCoffeeWrapper2" />
           </div>

       
        <div className="footerOfTestProps gga1">
    <div className="footerOfTestPropsItems">
   <Link to="/coffeehouse"><div className="footerOfTestPropsItem"> <img className="footerOfTestPropsItemImage" src={Beans} alt="beans" />Coffee house </div></Link> 
   <Link to="/about"> <div className="footerOfTestPropsItem">Our coffee </div></Link> 
   <Link to="/comment"><div className="footerOfTestPropsItem">For your pleasure </div> </Link> 
    </div>
</div>

        </div>
    )
}
/*
   <FooterOfPage />
  <div className="coffeeHouseWrapper">
        <img src={Beans} alt="Beans" className="coffeeBorder" />
        <img src={Beans} alt="Beans" className="coffeeBorder coffeeBorder1" />
        <h1 className="coffeeHouseTitle">Coffee house</h1>
        <img src={Phot} alt="me" className="me" />
        <h3 className="coffeeHouseText">A little bit about us. Our company was founded in 2023. Here you will feel the comfort of home and care. The most delicious coffee is just for you. Enjoy every second with a cup of our coffee!</h3>
       <img src={Cup} alt="board" className="coffeeRamka" />
       <img src={PngBeans} alt="pngBeans" className="pngBeans" />
       <hr className="coffeeHr" />
       <img src={Heart}  alt="heart" className="heartOfCoffee1" />
       <img src={Heart}  alt="heart" className="heartOfCoffee hoc1" />
       <img src={Heart}  alt="heart" className="heartOfCoffee2" />
        </div>
        */