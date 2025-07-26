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

        const x=input.value.trim();
        span.textContent=x;
        li.appendChild(span);
        li.appendChild(edit);
        li.appendChild(del);
        if(!taskText && x==="")//if no input and no local storage
        {
            return;//do nothing
        }
        list1.appendChild(li);
        if(!taskText){//inseeert
            tasks.push(x);
            read();
        }

        l
    }
    function delT(x){
        li.remove();
        tasks=tasks.filter(t=>t!==x);//removes the deleted tasks
        read();
    }

    function insT(x){
        const index=tasks.indexOf(x);
        const newTask=prompt("enter new tasks");
        tasks[index]=newTask;
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
            
            if(e.target.textContent==="Delete"){
                //del function
                delT();
            }
            if(e.target.textContent==="Edit"){
                //edit/update function
                insT();
            }
        }
    });

});
