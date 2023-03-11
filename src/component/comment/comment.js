import {Routes,Route, Link } from"react-router-dom"
import "./comment.css"
import { MenuSite } from "../menu-site/menu-site"
import { CommentItem } from "../commentItem/commentItem"
import Grey from "./grey.png"
import Star from "./star.png"
import Warning from "./warn.png"
import Clear from "./clear.png"

function getCommentsFromStorage() {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
    
      return JSON.parse(storedComments);
    }
  
    return [];
  }
  
  function showComments(data) {
    console.log(data);
  }
  function showValue(item) {
    console.log(item);
  }
  function addComments(comments) {}
  
  function test() {
    let comments = document.querySelector(".comments");
    let commentForm = document.createElement("div");
    commentForm.classList.add(".commentFormStyle");
    comments.append(commentForm);
  }

  
  function checkRateSubmit(value) {
    let inp = document.querySelector(".addRate");
    let warningComment = document.querySelector(".warningComment");
    let comments = document.querySelector(".comments");
  
    if (inp.value.length === 0) {
      warningComment.style.display = "block";
    } else {
      warningComment.style.display = "none";
      let commentForm = document.createElement("div");
      commentForm.classList.add("commentForm");
      let parag = document.createElement("p");
      const titleUser = document.createElement("p");
      titleUser.textContent = "you";
      titleUser.classList.add("titleUser");
      let image = document.createElement("img");
      image.src =
        "https://pbs.twimg.com/media/FDv5j7ZWUAUyfIr?format=jpg&name=4096x4096";
      image.classList.add("userImage");
      parag.classList.add("paragUser");
      parag.textContent = inp.value;
      let three = document.createElement("p");
      three.textContent = "...";
      three.classList.add("threeStyle");
      three.onclick = test;
      commentForm.append(titleUser);
      commentForm.append(three);
      commentForm.append(image);
      commentForm.append(parag);
      commentForm.classList.add("commentStyle");
   //  commentForm.classList.add("commentUserComm")
      const starLine = document.createElement("div");
starLine.classList.add("testLine");
let indd = 0;
while (indd < value) {
  const starImg = document.createElement("img");
  starImg.classList.add('addedStarRate')
  starImg.src = "https://media.discordapp.net/attachments/772164370406965271/1075058341535031356/IMG_9891.png?width=586&height=586";
  starLine.append(starImg);
  indd++;
}
commentForm.append(starLine);
      comments.append(commentForm);
  
   
      const storedComments = getCommentsFromStorage();
      storedComments.push({
        id: storedComments.length + 1,
        comment: inp.value,
        user: "you",
        avatar:
          "https://pbs.twimg.com/media/FDv5j7ZWUAUyfIr?format=jpg&name=4096x4096",
        rate: value,
      });
      localStorage.setItem("comments", JSON.stringify(storedComments));
  
    }
  }
  
 
  function starCheck(id) {
    let value=id;
    let stars = document.querySelectorAll(".greyStar");
  
    for (let i = 0; i < stars.length; i++) {
      stars[i].src =
        "https://media.discordapp.net/attachments/772164370406965271/1075060304435761223/IMG_9893.png?width=586&height=586";
    }
    for (let i = 0; i < id; i++) {
      stars[i].src =
        "https://media.discordapp.net/attachments/772164370406965271/1075058341535031356/IMG_9891.png?width=586&height=586";
    }
    return value;
}
export const Comment =(props)=>{

   const sec=props.sec
   let value=0;
   const {comments, data}=props
 
   if ("comments" in localStorage) {
    let arr = JSON.parse(localStorage.getItem("comments"));
   comments.push(...arr);
  
  } else {
    
   
  }
  
 
   const elementComment = comments.map((item) => {
    const { id, ...itemProps } = item;
    return <CommentItem {...itemProps} /> ;
  });
  
    return(
        <div>
          <p className="commTitleOfPage">Comments</p>
          <MenuSite />
         <div className="comment" onLoad={()=> addComments(comments)}>
               <h1 className="commentTitle">Leave a review about the service</h1>
               <h2 className="addStars">Add rate</h2>
               <div className="starRate">
               <img src={Grey} alt="star " onClick={()=>{ value=1;
                starCheck(1)}} ind="1" className="greyStar starRate1" />
               <img src={Grey} alt="star" onClick={()=>{ value=2;
                starCheck(2)}}  ind="2" className="greyStar starRate1" />
               <img src={Grey} alt="star" onClick={()=>{ value=3;
                starCheck(3)}}  ind="3" className="greyStar starRate1" />
               <img src={Grey} alt="star" onClick={()=>{ value=4;
                starCheck(4)}}  ind="4" className="greyStar starRate1" />
               <img src={Grey} alt="star" onClick={()=>{ value=5;
                starCheck(5)}}  ind="5" className="greyStar starRate1" />
               </div>
               <div className="containerRates">
               <input type="text" className="addRate" placeholder="add comment" />
               <p className="addRateText"></p>
               <button type="button" className="submitComment" onClick={()=>checkRateSubmit(value)}>Send</button>
               <img src={Clear}  alt="warning" className="warningComment" />
               </div>
            </div>
         
          
            <div className="comments" >
                {elementComment}
            </div>
           
        </div>
    )
}