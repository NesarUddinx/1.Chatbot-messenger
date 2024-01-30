let camera = document.getElementById("camera")
let image = document.getElementById("image")
let microphone = document.getElementById("microphone")
let input = document.getElementById("input")
let inputDiv = document.querySelector(".inputDiv")
let chatBody = document.querySelector(".chat_body")
let like = document.getElementById("like")
let send = document.getElementById("send")

send.style.display = "none"

like.addEventListener("click",()=>renderUserMessage())

const renderUserMessage = () => {
  const userInput = input.value;
  renderMessageElement(userInput,"user");
  setTimeout(()=>{
    renderChatbotResponse(userInput)
    setScrollPosition();
  },1000)
  input.value = "";
}
// make msg div and insert userInput as   txt
const renderMessageElement = (txt,type) => {
  let className = "user_msg"
  if (type !== "user") {
    className = "chatbot_msg"
  }

  
   // Append "created text node" into "Chatbot text Div"
   const msgElement = document.createElement("div") //Chatbot text div
   const txtNode = document.createTextNode(txt) // txt
   msgElement.classList.add(className)
   msgElement.append(txtNode)
   chatBody.append(msgElement)
 }
   
   
  
  

const  renderChatbotResponse = (userInput)=>{
  const res = getChatbotResponse(userInput)
  renderMessageElement(res);
}

const getChatbotResponse = (userInput)=>{
  return responseObj[userInput] == undefined? "Please try something else":responseObj[userInput];
}

const setScrollPosition = ()=>{
  if (chatBody.scrollHeight>0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}