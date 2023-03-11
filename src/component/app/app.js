import {Routes,Route, Link } from"react-router-dom"
import { Component } from 'react';
import "./app.css"

import { Tttest } from "../testt/test"
import { Header } from "../header/header";
import { Backk } from "../backk/back";
import { Shop }  from "../shop/shop";
import { Tovar } from "../tovar/tovar";
import { TestItem } from "../test-item/test-item";
import { Registration } from "../registration/registration";
import { Account } from "../account/account";
import { More } from "../more/more";
import { CoffeeHouse } from "../coffee-house/coffee-house";
import { Comment } from "../comment/comment";
import { TestProps } from "../test-props/test-props";
import Counter from "../counter/counter";

function sortByRate(data) {
    const sorted = data.sort((a, b) => b.rate - a.rate);
    const highestRatedName1 = sorted[0].name;
    const highestRatedName2 = sorted[0].price;
    const highestRatedName3 = sorted[1].name;
    const highestRatedName4 = sorted[1].price;
    const highestRatedName5 = sorted[2].name;
    const highestRatedName6 = sorted[2].price;
    const mass=[]
    mass.push(highestRatedName1)
   mass.push(highestRatedName2)
    mass.push(highestRatedName3)
    mass.push(highestRatedName4)
    mass.push(highestRatedName5)
    mass.push(highestRatedName6)
    return mass
  }

  function storeTestComment() {
  /*  const storeComments={
      id: 1,
      comment:'wow',
       user: 'you',
      avatar: 'https://pbs.twimg.com/media/FDv5j7ZWUAUyfIr?format=jpg&name=4096x4096'
    }
    localStorage.setItem("comments", JSON.stringify(storeComments)); */
  }
  function showIndd(id){
    console.log("indexes")
    console.log(id)
    const stateValue = JSON.stringify(id);
    window.localStorage.setItem('state1', stateValue);
  }
  function ttt(){
    this.setState(state=>({
      years: state.years+1
    
  }));
  }
 function showState() {
    console.log(localStorage.getItem('stateItem'))
  }
class App extends Component {
  constructor(props) {
      super(props);
     this.state =   {
      myVar: JSON.parse(localStorage.getItem("myVar")) || "",
        count: 0,
          data:  [{name: "Simple Coffee", price: 5.54, comment: "Simple coffee", rate: 3, id:1, country:"Brazil"}, 
          {name: "Coffee ", price: 5.9, comment: "Simple coffee", rate:5, id:2, country: "Kenia" }, 
          {name: "Arabian Coffee", price: 9, comment: "Simple coffee", rate:2, id:3, country: "Kenia" }, 
          {name: "Capuchino", price: 5.4, comment: "Simple coffee", rate:1, id:4, country:"Brazil" }, 
          {name: "Late", price: 5.1, comment: "Simple coffee", rate:4, id:5, country:"Columbia" }, 
          {name: "Simple Coffee", price: 5.54, comment: "Simple coffee", rate: 3, id:6, country:"Columbia"}, 
          {name: "Coffee ", price: 5.9, comment: "Simple coffee", rate:5, id:7, country:"Brazil" }, 
          {name: "Arabian Coffee", price: 9, comment: "Simple coffee", rate:2, id:8, country: "Kenia" }, 
          {name: "Capuchino", price: 5.4, comment: "Simple coffee", rate:1, id:9, country:"Columbia" }, 
          {name: "Late", price: 5.1, comment: "Simple coffee", rate:4, id:10, country: "Kenia" },
          {name: "Coffee ", price: 5.9, comment: "Simple coffee", rate:5, id:7, country:"Brazil" }, 
          {name: "Arabian Coffee", price: 9, comment: "Simple coffee", rate:2, id:8, country: "Kenia" }, 
          {name: "Capuchino", price: 5.4, comment: "Simple coffee", rate:1, id:9, country:"Columbia" }, 
          {name: "Late", price: 5.1, comment: "Simple coffee", rate:4, id:10, country: "Kenia" }
        ], 
          term: '',
          filter: 'all',
          index: '',
        years: 0,
        comments: [{user: "Andrei", data: "14.02.23",id:1, rate:4,  comment: "Thats good", avatar: "https://images.kinorium.com/movie/shot/237554/w1500_41583612.jpg"}, 
        {user: "Barmaleu", data: "01.02.23",id:2, rate:5,  comment: "oh my goodness", avatar: "https://image.jimcdn.com/app/cms/image/transf/none/path/sdd02039c8f1b2601/image/i7360fb4a9921fc09/version/1673254789/image.jpg"},
        {user: "Ya karta", data: "29.02.23",id:3, rate:4,  comment: "Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta   ", avatar: "https://sun9-13.userapi.com/dYAfYRbrOsuClIoxe9e3pi_jwtRoAdLA14uBig/0dIFgY3qEAk.jpg"},
        {user: "Ya karta", data: "29.02.23",id:3, rate:4,  comment: "Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta  Ya karta  Ya karta  Ya karta  Ya karta Ya karta  Ya karta   ", avatar: "https://sun9-13.userapi.com/dYAfYRbrOsuClIoxe9e3pi_jwtRoAdLA14uBig/0dIFgY3qEAk.jpg"}],
      
        newData: [{name: "Simple Coffee", price: 5.54, comment: "Simple coffee", rate: 3, id:1, country:"Brazil"}, 
        {name: "Coffee ", price: 5.9, comment: "Simple coffee", rate:5, id:2, country: "Kenia" }, 
        {name: "Arabian Coffee", price: 9, comment: "Simple coffee", rate:2, id:3, country: "Kenia" }, 
        {name: "Capuchino", price: 5.4, comment: "Simple coffee", rate:1, id:4, country:"Brazil" }, 
        {name: "Late", price: 5.1, comment: "Simple coffee", rate:4, id:5, country:"Columbia" }, 
        {name: "Simple Coffee", price: 5.54, comment: "Simple coffee", rate: 3, id:6, country:"Columbia"}, 
        {name: "Coffee ", price: 5.9, comment: "Simple coffee", rate:5, id:7, country:"Brazil" }, 
        {name: "Arabian Coffee", price: 9, comment: "Simple coffee", rate:2, id:8, country: "Kenia" }, 
        {name: "Capuchino", price: 5.4, comment: "Simple coffee", rate:1, id:9, country:"Columbia" }, 
        {name: "Late", price: 5.1, comment: "Simple coffee", rate:4, id:10, country: "Kenia" }
      ]
      }
  
      
  }
  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }
  searchEmp =(items, term)=>{
    if(term.length===0){
        return items;
    }
    return items.filter(item=> {
        return item.name.indexOf(term) >-1 //если находится в строке такое-то терм то мы че-то вовращаем, в противном случае -1
    })
}

onUpdateSearch =(term)=> {
this.setState({term})
}
filterPost =(items, filter)=> {
switch(filter) {
case 'rise': return items.filter(item => item.rise) //фильтруем объекты в которых rise: true
case 'moreThan1000': return items.filter(item => item.salary>1000)
default: return items
}
}
onFilterSelect =(filter)=> {
this.setState({filter})
}
increaseCount = () => {
  return this.setState({...this.state, count: this.state.count + 1});
}
onToggleIncrease=(id, name)=> {
  return this.setState(state=>({
     index: id, 
     myVar:id
  }));
} 
 nextYear= ()=> {
  console.log(1)

 this.setState(state=> ({
  years: state.index
 }))
}
componentDidMount() {
  const { myVar } = this.state;
  localStorage.setItem("myVar", JSON.stringify(myVar));
}

// Используем метод жизненного цикла componentDidUpdate, чтобы сохранять значение 'myVar' в localStorage при каждом его изменении
componentDidUpdate(prevProps, prevState) {
  const { myVar } = this.state;
  if (myVar !== prevState.myVar) {
    localStorage.setItem("myVar", JSON.stringify(myVar));
  }
}
  render() {
    const { myVar } = this.state;
    const {data, term, filter, index, newData}= this.state
    const newItem =newData.filter(item =>{ if(item.id===index){
      return item
          }})
  const newNul=newItem[0]
    const newArr=sortByRate(data)
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)
  
    return (
      <div className="app" onLoad={()=> {
      storeTestComment()
      }}>

      



<Routes >
  <Route path="/" element={ <Header first={newArr[0]} sec={newArr[1]} third={newArr[2]}  fourth={newArr[3]} fifth={newArr[4]} six={newArr[5]}/>} />
  <Route path="/test" element={<Backk data={data}  />} />
  <Route path="/tovar" element={<Tovar elementt={newNul} data={data} index={index}  />} />
  <Route path="/about" element={<Shop  data={data} onToggleIncrease={this.onToggleIncrease} />} />
  <Route path="/tеovar" element={<TestItem data={data} index={index} />} />
  <Route path="/reg" element={<Registration />} />
  <Route path="/account" element={<Account />} />
  <Route path="/more" element={<More />} />
  <Route path="/coffeehouse" element={<CoffeeHouse/>} />
  <Route path="/comment" element={<Comment data={data}  comments={this.state.comments} />} />
  <Route path="/testprops" element={ <TestProps index={index} myVar={myVar}  data={data} />} />
  <Route path="/counter" element={<Counter/>} />
</Routes>
      </div>
    )
  }
}
export default App;



