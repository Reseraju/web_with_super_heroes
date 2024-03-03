const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("listcontainer");
function addtask(){
    let er = ""
    if(inputBox.value===''){
        alert("You must type something");
    }
    else{
        let li = document.createElement("li");
        er =inputBox.value;
        li.innerHTML= er;
        listContainer.appendChild(li);
        let span=  document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        fetch(`http://localhost/dashboard/asthra%20todo/?msg=${er}`)
    
    }
    inputBox.value='';
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
document.getElementById('addbtn').addEventListener("click",()=>{addtask();})
showTask()