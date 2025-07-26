document.addEventListener("DOMContentLoaded",()=>{//to ensure there is no error 
    const input=document.querySelector(".inp");
    const submit=document.querySelector(".submit");  
    let tasks= JSON.parse(localStorage.getItem("tasks")) || [];//for local storage to print taks even if site change
    const list1=document.querySelector(".list");
    tasks.forEach(task=>insertA(task));

    //to read localstorage
    function read(){
        localStorage.setItem("tasks",JSON.stringify(tasks));//stores array
    }

    function insertA(taskText){
        const li=document.createElement("li");
        const span=document.createElement("span");
        const del=document.createElement("button");
        del.textContent="Delete";
        const edit=document.createElement("button");
        edit.textContent="Edit";  

        const x=taskText || input.value.trim();//checks for stored value or inp
        if(x==="") return;
        span.textContent=x;
        li.appendChild(span);
        li.appendChild(edit);
        li.appendChild(del);
        li.style.cssText="display:flex; gap:20px;";
        if(!taskText && x==="")//if no input and no local storage
        {
            return;//do nothing
        }
        list1.appendChild(li);
        if(!taskText){//inseeert
            tasks.push(x);
            read();
        }        
    }
    function delT(ele){
        let y=ele.querySelector("span").textContent;
        ele.remove();
        tasks=tasks.filter(t=>t!==y);//removes the deleted tasks
        read();
    }

    function insT(ele){//here ele means li or the main div or container where delete and edit are there
        let y=ele.querySelector("span").textContent;
        const index=tasks.indexOf(y);
        const newTask=prompt("enter new tasks");
        if(newTask!=="")
        {
            tasks[index]=newTask;
            ele.querySelector("span").textContent=newTask;
        }
        read();
    }
    submit.addEventListener("click",()=>{
        insertA();
        input.value="";
    });
    //so here use insertA function to insert the task to list
    input.addEventListener("keydown",(e)=>
    {
        if(e.key==="Enter"){
            insertA();
            input.value="";
        }
    });
    //event bubbling for many eventlistener to one single one
    list1.addEventListener("click",(e)=>{
        if(e.target.tagName === "BUTTON"){
            liEle=e.target.parentElement;//here e is btn but we need the parent ele ie the li 
            if(e.target.textContent==="Delete"){
                //del function
                delT(liEle);
            }
            if(e.target.textContent==="Edit"){
                //edit/update function
                insT(liEle);
            }
        }
    });
    console.log(Array.isArray(tasks));//checks if tasks is array so i can use 
});
