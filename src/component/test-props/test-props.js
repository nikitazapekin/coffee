

import { Component } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { MenuSite } from '../menu-site/menu-site';
import "./test-props.css"
import Tovar from './tovar.jpg'
import Coffee from './co.png'
import Beans from './coffee-beans.png'

function showSelectedItem(item){
    console.log(item)
    console.log("this is item")
    const tovarName=document.querySelector('.tovarName')
    tovarName.textContent=item[0].name
}
export const TestProps =(props)=> {
    const {data, myVar} =props
   const finalItem =data.filter(item => item.id===myVar)
  
    return (
        <div>
<MenuSite />

<div className="tovarsLine">
<img className='tovarsImagee' src={Tovar} alt="tovar" />


        </div>
        <div className="aboutItBlock">
<div className="aboutItTitleBlock">
About it
</div>
<div className="aboutItBlockLine">
    <hr className="aboutItBlockLineHr ms1" />
    <img src={Coffee} alt="beans" className="aboutItBlockLineBeans" />
    <hr className="aboutItBlockLineHr ms2" />
</div>
<div className="aboutItBlockDescribtionDisplay">
    <div className="aboutItBlockDescribtionDisplayItem"><strong>Name:</strong> {finalItem[0].name}</div>
    <div className="aboutItBlockDescribtionDisplayItem"><strong>About: </strong>{finalItem[0].comment}</div>
    <div className="aboutItBlockDescribtionDisplayItem"><strong>Price:</strong> {finalItem[0].price}$</div>
    <button type="button" className="aboutItDescribtionButton">Buy</button>
</div>
</div>

<div className="footerOfTestProps">
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
<div className="tovarsBlock">
<h1 className="tovarsAboutTitle">About it</h1>
<div className="tovarsAboutLineImage">
        <hr className="tovarsAboutLine1 lll1" />
            <img src={Coffee} alt="Beans" className="coffeeOfTovars" />
        <hr className="tovarsAboutLine1 lll2" />
    </div>
</div>





<div className="tovarsLineAbout">
    <h1 className="tovarsAbout">About it</h1>
    <div className="tovarsAboutLineImage">
        <hr className="tovarsAboutLine lll1" />
            <img src={Coffee} alt="Beans" className="coffeeOfTovars" />
        <hr className="tovarsAboutLine lll2" />
    </div>
    <div className="aboutTovarDescribtion">
    <p className="tovarName"><strong>Name:</strong> {finalItem[0].name}</p>
    <p className="tovarComment"><strong>About: </strong>{finalItem[0].comment}</p>
    <p className="tovarPrice"><strong>Price:</strong> {finalItem[0].price}$</p>
    <button className="buyTovar">Buy</button>
    </div>
</div>




   <div className="aboutTovarFooter">
            <div className="aboutTovarFooterItems">
                <div className="aboutTovarFooterItem"><img className="aboutTovarFooterItemImage" src={Beans} alt="beans" />
 Coffee house</div>
                <div className="aboutTovarFooterItem">Our coffee</div>
                <div className="aboutTovarFooterItem">For your pleasure</div>
            </div>
            <div className="aboutTovarFooterLine">
                <hr className="aboutFooterLine" />
                <img src={Coffee} alt="coffee" className="aboutFooterLineImage" />
                <hr className="aboutFooterLine" />
            </div>
        </div>

*/