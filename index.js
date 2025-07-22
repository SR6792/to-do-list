const btn=document.querySelector(".submit");
const input=document.querySelector(".inp");
const list1=document.querySelector(".list");
function insertA(){
    const del=document.createElement("button");
    del.textContent="Delete";
    const edit=document.createElement("button");
    edit.textContent="Edit";
    const li=document.createElement("li");
    //now to put taks delete and edit key in one line use span
    const tspan=document.createElement("span");
    const x=input.value.trim();
    tspan.textContent=x;
    li.appendChild(tspan);
    li.appendChild(edit);
    li.appendChild(del);
    li.style.cssText=" display:flex; gap:20px;";
    list1.style.padding="20px";
    if(x=="")
    {
        alert("Enter string");
    }
    else{
        list1.appendChild(li);
    }
    del.addEventListener("click",()=>{
        li.remove();
    })
    edit.addEventListener("click",()=>{
        const newI=prompt("Enter new string");
        tspan.textContent=newI;
    })
}
btn.addEventListener("click",insertA);
