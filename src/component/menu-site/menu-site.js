import './menu-site.css'
import { Routes, Route, Link, useParams } from 'react-router-dom';
import MenuBeans from './coffee-beans.png'
import MenuFon from './menu-fon.png'
import Bb from "./bb.png"

export const MenuSite =()=>{
    return (
        <div>
            <img src={MenuFon} alt="MenuFon" className="menuSiteFon" />
        <div className="menuSite">
<div className="menuSiteNavigation">
<img src={MenuBeans} alt="menuImage" className="menuSiteBeans" />
  <Link to="/coffeehouse"> <div className="menuSiteNavigationItem">Coffee house</div></Link> 
       
      
  <Link to="/about">  <div className="menuSiteNavigationItem">Our Coffee</div></Link>
  <Link to="/comment">   <div className="menuSiteNavigationItem">For your pleasure</div> </Link>
</div>
</div>
        </div>
    )
}