// alert("Hii, I'm Your Daily Task List");
console.log("hi");

const input = document.getElementById("text1");
const task = document.getElementById("Tasklist");
const button = document.getElementById("submit");
const item = document.getElementsByClassName("items");
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



