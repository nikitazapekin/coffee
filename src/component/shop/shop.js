import { Component } from 'react';
import {Routes,Route, Link } from"react-router-dom"
import { ShopItem } from '../shop-item/shop-item';
import HeadIm from './headIm.png';
import HeadBean from './coffee-beans.png';
import './shop.css';
import Dr from './dr.jpg';
import Beans from './beans.png';
import Palz from './palz.png';
import Corzin from './corzin.png';
import WhiteBeans from "./bbean.png"
import { FooterOfPage } from '../footerOfPage/footerOfPage';


// Высчитываем высоту footer и делаем соответствующий отступ от main:
function footer() {
 
  const main = document.querySelector('.cards')
     const  card=document.querySelectorAll('.card')
    const  footer = document.querySelector('.footerOfShop')

 //main.style.paddingBottom = footer.clientHeight + 'px' 
 const shop= document.querySelector('.shop')

const lastChild=card[card.length-1].offsetTop
const mainHeight=main.clientHeight;
const screenHeight = window.innerHeight;

// Получаем позицию самой верхней точки страницы относительно верха окна
const topPosition = window.pageYOffset;

// Вычисляем позицию самой нижней точки страницы относительно верха окна
const bottomPosition = topPosition + document.documentElement.scrollHeight;

// Вычисляем расстояние между верхней и нижней точками
const distance = bottomPosition - topPosition - screenHeight;

console.log(distance);
footer.style.top=distance+800+"px"
}


function testingFunk(){
  const gridContainer = document.querySelector('.cards');
  const card= document.querySelectorAll('.card')
  const cards=document.querySelector('.cards')
  let button=document.createElement('button')
 
  button.textContent="More"
  button.classList.add('testTest')
const gridTemplateRows = window.getComputedStyle(gridContainer, null)
  .getPropertyValue('grid-template-rows');
const rowCount = gridTemplateRows.split(" ").length;
//for(let i=9; i<rowCount;i++){
//  card[i].style.display="none"
//}

//card[9].insertAdjacentHTML("beforeBegin", button);
//cards.append(button)
}
function checkStroke(data){
 const cards=document.querySelector('.cards')
  const cardCard = document.querySelectorAll('.card');
  for(let i=0; i< cardCard.length; i++){
    cardCard[i].style.display="none"
  }
  const cardName=document.querySelectorAll('.cardName')
  const search=document.querySelector('.search')
  const searchValue= search.value.toLowerCase()
  const sortedCards = Array.from(cardName).sort((a, b) => {
    return a.textContent - b.textContent;
  });
  let arrayOfRef=[]
 for(let i=0; i<sortedCards.length; i++){
  let item=sortedCards[i].textContent.toLowerCase()
  arrayOfRef.push(item)
 }
 arrayOfRef.forEach((card, index, array) => {
  
  if(card.includes(searchValue)){
    cardCard[index].style.display="block"
    cards.prepend(cardCard[index])
  }
 });
}
function showAll(data) {
  const cardCard = document.querySelectorAll('.card');
  let cardElements = document.querySelectorAll('.cardCountry');
  const cards = document.querySelector('.cards');

  for (let i = 0; i < cardCard.length; i++) {
    cardCard[i].style.display = 'block';
    cards.prepend(cardCard[i]);
  }
}
function sortByColumbia(data) {
  const cards = document.querySelector('.cards');
  let cardElements = document.querySelectorAll('.cardCountry');
  const cardCard = document.querySelectorAll('.card');
  for (let i = 0; i < cardElements.length; i++) {
   
    cardCard[i].style.display = 'none';
  }
  const sortedCards = Array.from(cardElements).sort((a, b) => {
    return a.textContent - b.textContent;
  });
  const newCards = [];
  sortedCards.forEach((card, index, array) => {
    if (card.textContent.includes('Columbia')) {
      newCards.push(cardCard[index]);
      cardCard[index].style.display = 'block';
      cards.prepend(cardCard[index]);
    }
  });
}
function sortByKenia(data) {
  const cards = document.querySelector('.cards');
  let cardElements = document.querySelectorAll('.cardCountry');
  const cardCard = document.querySelectorAll('.card');
  for (let i = 0; i < cardElements.length; i++) {
    cardCard[i].style.display = 'none';
  }
  const sortedCards = Array.from(cardElements).sort((a, b) => {
    return a.textContent - b.textContent;
  });
  const newCards = [];
  sortedCards.forEach((card, index, array) => {
    if (card.textContent.includes('Kenia')) {
      newCards.push(cardCard[index]);
      cardCard[index].style.display = 'block';
      cards.prepend(cardCard[index]);
    }
  });
}
function sortByBrazil(data) {
  const cards = document.querySelector('.cards');
  let cardElements = document.querySelectorAll('.cardCountry');
  const cardCard = document.querySelectorAll('.card');
  for (let i = 0; i < cardElements.length; i++) {
    cardCard[i].style.display = 'none';
  }
  const sortedCards = Array.from(cardElements).sort((a, b) => {
    return a.textContent - b.textContent;
  });
  const newCards = [];
  sortedCards.forEach((card, index, array) => {
    if (card.textContent.includes('Brazil')) {
      newCards.push(cardCard[index]);
      cardCard[index].style.display = 'block';
      cards.prepend(cardCard[index]);
    }
  });
}
function checkState(value) {
let navBar=document.querySelector('.navBarWrapper')
let sortByCountryTriangle= document.querySelector('.sortByCountryTriangle')
if(value){
   navBar.style.display="block"
   sortByCountryTriangle.textContent="▲"
}
else{
   navBar.style.display="none"
   sortByCountryTriangle.textContent="▼"
}
}
export const Shop = (props) => {
  const { data, onToggleIncrease } = props;
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <ShopItem key={id} {...itemProps} onToggleIncrease={() => onToggleIncrease(id, name)} />;
  });
  let burgerValue = false;

  return (
  
    <div className='shop' onLoad={()=> testingFunk()}>
    
      <header className='head'>
        <div className='headItems'>
          <div className='headItem'> <img src={WhiteBeans} alt="beans" className="headItemImage" />
        <Link to="/coffeehouse">  Coffee house</Link> </div>
          <div className='headItem'><Link to="/about">Our Coffee</Link></div>
          <div className='headItem'><Link to="/comment">For your pleasure</Link></div>
        </div>
        <img src={HeadIm} alt='headImage' className='headImage' />
        <h1 className='ourr'>Our Coffee</h1>
      </header>
      <section className='aboutOur'>
        <div className='correct'>
          <img src={Dr} alt='aboutImage' className='aboutImage' />
          <div className='aboutTextt'>
            <div className='aboutTitle'>About our beans</div>

            <div className='aboutParag'>
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br />
              <br />
              Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold feel <br />
              met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help
              face.
            </div>
          </div>
        </div>
        <hr className='lineFinish' />
      </section>
      <section className='catalogOfItems'>
        <div className='searchPanel'>
          <p className='lookingFor'>Looking for</p>
          <input onInput={()=>checkStroke(data)}  type='text' className='search' placeholder='start typing here ' />
        </div>
        <div className='catalItems'>
          <p className='or'>Or filter</p>
          <div className='catalBtns'>
            <button
              type='button'
              className='catalogItem'
              onClick={() => {
                sortByBrazil(data);
              }}
            >
              Brazil
            </button>
            <button
              type='button'
              className='catalogItem'
              onClick={() => {
                sortByKenia(data);
              }}
            >
              Kenia
            </button>
            <button
              type='button'
              className='catalogItem'
              onClick={() => {
                sortByColumbia(data);
              }}
            >
              Columbia
            </button>
            <button
              type='button'
              className='catalogItem'
              onClick={() => {
                showAll(data);
              }}
            >
              All
            </button>
          </div>
        </div>
        <div
          className='navBar'
          onClick={()=> {
            if(burgerValue){
                burgerValue=false
            }
            else{
                burgerValue=true
            }
            checkState(burgerValue)
          } }
        >
        <button className="sortByCountry">Choose country <span className='sortByCountryTriangle'>▼</span></button>
          <div className='navBarWrapper'>
            <button type='button' className='catalogItem1'  onClick={() => {
                sortByBrazil(data);
              }}  >
              Brazil
            </button>
            <button type='button' className='catalogItem1'  onClick={() => {
                sortByKenia(data);
              }}>
              Kenia
            </button>
            <button type='button' className='catalogItem1'  onClick={() => {
                sortByColumbia(data);
              }}>
              Columbia
            </button>
           
          </div>
        </div>
        <button className="catalogItem2" type="button" onClick={()=>  showAll(data)}>All</button>
      </section>
      <section className='tovars'>
        <div className='cards'>{elements}</div>
      </section>
     
      <div className="footerOfShop" onLoad={()=> footer()}>
      <FooterOfPage />
      </div>
    </div>
  );
};
