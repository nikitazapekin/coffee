import './commentItem.css'
import Star from './st.png'

  function createStars(val) {
    let amount = 0;
    const stars = [];
    const test=document.querySelector('.testLine')
    while (amount < val) {
      stars.push(<img src={Star} alt="star" className="rateOfUser1" style={{display: 'inline'}} />);
      amount++;
    }
    return stars;
  }
  
  export const CommentItem = (props) => {
    const { rate } = props;
    const stars = createStars(rate);
    return (
      <div className="commentItem" onLoad={
      



              () => {
                const replyDivs = document.querySelectorAll(".replyDiv");
                let calc = 1;
                let count = 1;
                let z = 0;
                let getttedIndex=0
                replyDivs.forEach((replyDiv) => {
                  const ammm = document.querySelectorAll('.commentItem')
              
                
                  let gettedIndex = 0;
                  for (let i = 0; i < ammm.length; i++) {
                    ammm[i].addEventListener('click', function () {
                      gettedIndex = i;
                    });
                  }
                  replyDiv.addEventListener("click", (event) => {
                    const target = event.target;
                    const isInside = target.closest(".replyDiv");
              
                    const commentItem = document.querySelector(".commentItem");
                    const commentForm = document.createElement("div");
              
                    if (isInside) {
                      let newDiv = replyDiv.querySelector(".newDiv");
                      if (!newDiv) {
                        newDiv = document.createElement("div");
                        const newDivv = document.createElement("div");
                        newDiv.classList.add("newDiv");
                        const newDivButton = document.createElement("button");
                        newDivButton.classList.add("newDivButton");
                        newDivButton.textContent = "reply";
                        newDivButton.style.position = 'absolute'
                        newDivButton.style.top = 50 + "px"
                        newDivButton.style.right = 25 + "px"
              
                        newDiv.appendChild(newDivButton);
              
                        const commentAddForm = document.createElement("input");
                        commentAddForm.classList.add("commentsAddFormStyle");
                        const commentAddFormButton = document.createElement("button");
                        const commentAddFormButtonSend = document.createElement("button");
                        commentAddFormButton.textContent = "cancel";
                        commentAddFormButtonSend.textContent = "send";
                        commentAddFormButton.classList.add("commentAddFormButton");
                        commentAddFormButtonSend.classList.add("commentAddFormButtonSend");
                        commentAddFormButton.addEventListener("click", () => {
                          newDiv.removeChild(commentAddForm);
                          newDiv.removeChild(commentAddFormButton);
                          newDiv.removeChild(commentAddFormButtonSend);
                          newDivButton.style.display = "inline";
                        });
                        commentAddFormButtonSend.addEventListener("click", () => {
                          const commentItems = document.querySelectorAll('.commentItem')
                          const commentItem = document.createElement('div')
                          //  commentItem.textContent="added"
              
                          commentItem.classList.add('commentItem')
                          const userTitle = document.createElement('p')
                          userTitle.textContent = "you"
                          userTitle.classList.add('userTitleStyle')
                          commentItem.append(userTitle)
                          const typedTextParagraf = document.createElement('p')
                          const typedValue = commentAddForm.value
                          const logoUser = document.createElement('img')
                          logoUser.src = 'https://pbs.twimg.com/media/FDv5j7ZWUAUyfIr?format=jpg&name=4096x4096'
                          logoUser.classList.add('logoUserStyle')
                          typedTextParagraf.classList.add('typedTextParagrafStyle')
                          typedTextParagraf.textContent = typedValue
                          commentItem.append(logoUser)
                          commentItem.append(typedTextParagraf)
                          commentItem.append(replyDiv)
                          commentItems[gettedIndex-1].append(replyDiv)
                          commentItems[gettedIndex].append(commentItem)
                          commentItems[gettedIndex].append(replyDiv)
                          let amm = document.querySelectorAll('.commentItem')
              
                          for (let i = 0; i < amm.length; i++) {
                            amm[i].addEventListener('click', function () {
                              gettedIndex = i;
                            });
                          }
                          const ammmm = document.querySelectorAll('.commentItem')
                          for (let i = 0; i < ammmm.length; i++) {
                            ammmm[i].addEventListener('click', function () {
                              getttedIndex = i;
                            });
                          }
                          amm = document.querySelectorAll(".commentItem");
                        for (let i = 0; i < commentItems.length; i++) {
                          if (i < commentItemIndex) { // проверяем, что индекс элемента меньше индекса текущего комментария
                          }
                        }
              }) 
              const Items = document.querySelectorAll('.commentItem');

Items.forEach((Item, index) => {
 Item.addEventListener('click', () => {
    console.log(`Clicked comment item with index: ${index}`);
  });
});

              newDivButton.addEventListener("click", () => {
                calc++;
                if (calc % 2 == 0) {
                  commentAddForm.classList.add("commentsAddFormStyle");
                  newDiv.insertBefore(commentAddForm, null);
                  newDiv.insertBefore(commentAddFormButtonSend, null);
                  newDiv.insertBefore(commentAddFormButton, null);
                }
              });
             var element = document.querySelector('.comments')
              replyDiv.appendChild(newDiv);
              const distance = newDiv.getBoundingClientRect().top - 50;
newDiv.scrollTo({
top: 0,
left: 0,
behavior: 'smooth'
});
            }
    
            const handleClickOutsideInput = (event) => {
              if (!event.target.closest(".commentForm")) {
                replyDiv.removeChild(newDiv);
                commentItem.removeChild(commentForm);
              }
            };
    
            const handleClickOutside = (event) => {
              if (!event.target.closest(".replyDiv")) {
                replyDiv.removeChild(newDiv);
                commentItem.removeChild(commentForm);
              }
            };
          
            document.addEventListener("click", handleClickOutside);
            document.addEventListener("dblclick", handleClickOutsideInput);
            const elems=document.querySelectorAll('.commentItem')
           
            elems.forEach((elem) => {
              // Находим дочерний элемент .replyDiv и удаляем его
              const replyDiv = commentItem.querySelector('.replyDiv');
              if (replyDiv) {
            //    elem.removeChild(replyDiv);
              }
            
              // Создаем новый элемент .replyDiv
              const newReplyDiv = document.createElement('div');
              newReplyDiv.classList.add('replyDiv');
            
              // Добавляем новый элемент .replyDiv в элемент .commentItem
              elem.appendChild(newReplyDiv);
            });
          }
        });
      });
    }
  }  

      >
        <img src={props.avatar} alt="logo" className="userLogoImage" />
        <p className="commentUserName">{props.user}</p>
        <p className="commentUserComm" >{props.comment}</p>
        <div className="rateOfUser">{stars}</div>
    
        <div className="rateOfUsers">
          <img src={Star} alt="star" className="rateOfUser1" />
          <img src={Star} alt="star" className="rateOfUser1" />
          <img src={Star} alt="star" className="rateOfUser1" />
          <img src={Star} alt="star" className="rateOfUser1" />
          <img src={Star} alt="star" className="rateOfUser1" />
        </div>
      <div className="replyDiv" onClick={()=>{
     
      }}>
        ...
      </div>
      </div>
    );
  };





