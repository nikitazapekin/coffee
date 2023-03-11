import './menu-site2.css'
import { Routes, Route, Link, useParams } from 'react-router-dom';
import MenuBeans from './coffee-beans.png'
import MenuFon from './menu-fon.png'
import Bb from "./bb.png"

export const MenuSite2 =()=>{
    return (
        <div>
            <img src={MenuFon} alt="MenuFon2" className="menuSiteFon2" />
        <div className="menuSite2">
<div className="menuSiteNavigation2">
<img src={MenuBeans} alt="menuImage2" className="menuSiteBeans2" />
  <Link to="/coffeehouse"> <div className="menuSiteNavigationItem2">Coffee house</div></Link> 
       
      
  <Link to="/about">  <div className="menuSiteNavigationItem2">Our Coffee</div></Link>
  <Link to="/comment">   <div className="menuSiteNavigationItem2">For your pleasure</div> </Link>
</div>
</div>
        </div>
    )
}