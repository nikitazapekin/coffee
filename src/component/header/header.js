import './header.css'
import {Routes, Route, Link} from "react-router-dom"

import Bean1 from './bean1.png'
import Bean2 from './bean2.png'
import Back from './back.png'
import Bean3 from './bean3.png'
import Background from './background.png'
import Purchase from './purchase.png'
import FotBeans from './coffee-beans.png'
import FotLast from './last.png'
import Www from './www.png'
import { About } from '../about/about'
import Reg from './reg.png'
import { Registration } from '../registration/registration'
import {White} from './white.png'
import { Comment } from '../comment/comment'


export const Header =(props)=> (
  <div>
    <header className="header">
    <div className="underName">
          <hr className="hr hr1" />
            <img src={Www} alt="coffee" className="coffeeLine" />
            <hr className="hr hr2" />
          
          </div>
      <div className="menu">

            <nav className="navigation">
         
             <div className="navItem"><img src={Bean1} alt="coffee" className="coffee" /> <Link to="/coffeehouse">Coffee house</Link></div>
               <Link to="/about"> <div className="navItem">Our coffee</div></Link>
              <Link to="/comment"> <div className="navItem">For your pleasure</div></Link>
            </nav>
           <Link to="/reg"> <img src={Reg} alt="RegIcon" className='regIcon' /></Link>
           <img src={Back} alt="imageMenu" className="imageMenu" />



            </div>
            <p className="menuName">Everything You Love About Coffee</p>
       


          <p className="under">We makes every day full of energy and taste <br />
Want to try our beans?</p>

<button type="button" className="more"><Link to="/more"> More</Link></button>
</header>
<About />






<section className="best">
<img src={Background} alt="paper" className="background" />
<p className="ourBest">Our Best</p>
<div className="bestItems">
  
<div className="bestItem">
  <img src={Purchase} alt="purchase" className="itemImg" />
<p className="itemTitle">{props.first}</p>
<p className="itemPrice">{props.sec}$ </p>
</div>
<div className="bestItem">
  <img src={Purchase} alt="purchase" className="itemImg" />
<p className="itemTitle">{props.third}</p>
<p className="itemPrice">{props.fourth}$ </p>
    </div>
<div className="bestItem">
  <img src={Purchase} alt="purchase" className="itemImg" />
<p className="itemTitle">{props.fifth}</p>
<p className="itemPrice">{props.six}$ </p>
    </div>
</div>
    </section>
    <footer className="footer">
      <div className="footerItems">
       
        <div className="footerItem">Coffee house
        <img src={FotBeans} alt="" className="befFot" />
        </div>
        <Link to="/about"> <div className="footerItem">Our coffee</div></Link>
        <div className="footerItem">For your pleasure</div>
      </div>
    
      <div className="underName1">
    <hr className='linee1' />
    <img src={FotLast} alt="footerImg" className="footerImg" />
    <hr className='linee2' />
          </div>
    </footer>
         </div>
)
