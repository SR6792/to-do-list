document.addEventListener("DOMContentLoaded",()=>{//to only load when  no error
    const btn=document.querySelector(".submit");
    const input=document.querySelector(".inp");
    const list1=document.querySelector(".list");
    let tasks= JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(task=>insertA(task));//rebuild the list on reload
    function insertA(taskText){
        const del=document.createElement("button");
        del.textContent="Delete";
        const edit=document.createElement("button");
        edit.textContent="Edit";
        const li=document.createElement("li");
        //now to put taks delete and edit key in one line use span
        const tspan=document.createElement("span");
        const x=taskText||input.value.trim();
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
            input.value="";

        }
        if(!taskText){
            tasks.push(x);
            localStorage.setItem("tasks",JSON.stringify(tasks));
        }
        del.addEventListener("click",()=>{
            li.remove();
            tasks= tasks.filter(task=>task!==x);//return task not deleted
            localStorage.setItem("tasks",JSON.stringify(tasks));
        })
        edit.addEventListener("click",()=>{
            const newI=prompt("Enter new string");
            if(!newI) return;
            const oldText=tspan.textContent;
            const index=tasks.indexOf(oldText);
            if(index!== -1){
                tspan.textContent=newI;
                tasks[index]=newI;
                localStorage.setItem("tasks",JSON.stringify(tasks));
            }
        })
    }
    btn.addEventListener("click",()=>{
        insertA();
    });
    input.addEventListener("keydown",function(event)
    {   
        if (event.key === "Enter")
        {
            insertA();
        }
    });//for event key instead of clicking

    function saveTask(){
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
});