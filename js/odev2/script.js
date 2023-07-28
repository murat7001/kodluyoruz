const task = document.querySelector("#task");
const addToDo = document.querySelector("#liveToastBtn");
const toDoList = document.querySelector("#list");
const taskAll = document.querySelectorAll("#list li");




addToDo.addEventListener('click', () =>{
    let inptVal = task.value.trim();
    console.log(inptVal);
    if(inptVal == 0){
        console.log('eror');
        task.value="";
    }
    else{
        let liT = document.createElement('li');
        let content = document.createTextNode(`${inptVal}`);
        liT.appendChild(content);
        toDoList.insertAdjacentElement("afterbegin", liT);
        liT.setAttribute(`onclick`,`chechked(event)`);

        var spanNode = document.createElement(`span`);
        liT.appendChild(spanNode); 
        spanNode.innerHTML= "&times;";
        spanNode.setAttribute(`class`,`close`);
        spanNode.setAttribute(`onclick`,`deleteElement(event)`);

        task.value="";


        
        // let liTag= `<li>
        //     ${inptVal}
        // </li>`;

        // toDoList.insertAdjacentHTML("afterbegin", liTag);
        // task.value="";
    }
});

function chechked(e){
    let node = e.target;
    node.classList.toggle(`checked`);
}


function deleteElement(event){
    let node = event.target; 

    node.parentNode.remove(); 
}
