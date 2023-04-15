const submit = document.getElementById("submit-button");
const mainContainer = document.getElementById("mainCon");
const text = document.getElementById("to-do");
const time = document.getElementById("time");
const toDoItems = document.getElementsByClassName("todoItems");
function fun(){
    let innerText=text.value;
    let innerTime = time.value;
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div.className="item";
    div1.className="itemtext";
    div2.className="itemtime";
    if(innerText && innerTime){
        div1.innerText=innerText;
        div2.innerText=innerTime;
        div.appendChild(div1);
        div.appendChild(div2);
        mainContainer.appendChild(div);

    }



   
}
