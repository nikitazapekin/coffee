import './back.css'
import { BackItem } from '../back-item/back-item'

export const Backk =(props)=>{
   const {data}=props
   const elements =data.map(item=>{
    const {id, ...itemProps}=item
    return (
        <BackItem key={id} {...itemProps} />
    )
   })
    return (
<div>
    <div className="cards">
  {elements}
    </div>
</div> 
    )
}

/*
 data.forEach(item => {
    const card = document.createElement('div');
    const cards=document.querySelector('.cards')
    card.classList.add('card');
   
    const name = document.createElement('h3');
    name.textContent = item.name;
   
    card.appendChild(name);
    cards.appendChild(card);
   })


*/