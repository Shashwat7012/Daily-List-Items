alert("Hii, I'm Your Daily Task List");
console.log("hi");
let string = "";
const clear = document.getElementById("submit2");
const clear2 = document.getElementById("submit3");
const input = document.getElementById("text1");
const task = document.getElementById("Tasklist");
const button = document.getElementById("submit");
const item = document.getElementsByClassName("items");
clear.addEventListener("click",function(e){
        string = "";
        console.log(string);
        let c = document.getElementById('text1').value = string;
        console.log(c);
})
button.addEventListener("click",addTask)
function addTask(){
    var i=0;
    if(input.value === ""){
        console.log("Error");
        alert("Error");
    }
    else{
        i++;
        let li = document.createElement("li");
        // li.id=`li${i}`
        li.className='items'
        li.innerHTML = `<input class='check'  id='check${i}' type='checkbox'/> ${input.value} <button class='btn' id='btn${i}' class>X</button>`
        // document.getElementsByClassName("check").addEventListener("click",function(){
        //     document.getElementsByClassName("items").style.textDecoration = "line-through";
        // })
        task.appendChild(li);
    }
    input.value=""
        
}
task.addEventListener("click",function(value){
    if(value.target.className === "btn"){
        value.target.parentElement.remove();
    }
})
button.addEventListener("click",remove);
function remove(){
    let original = input.value;
    let newText = original.replace(original,'');
    document.getElementById("text1").textContent=newText;
}
