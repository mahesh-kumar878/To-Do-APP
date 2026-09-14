 let todo =[];
 let req = prompt("please enetr your choice");
 while(true){
    if(req=="quit"){
        console.log("quiting app");
        break;
    }

    if(req== "list"){
        console.log("_______");
        for(let i = 0; i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("_______");
    }
    else if(req=="add"){
      let task =  prompt("please enter the  task you want to add ");
      todo.push(task);
      console.log("task added");

    }
    else if (req=="delete"){
        let idx= prompt("plese enter the task index ");
        todo.splice(idx,1);
        console.log("tasked deleted");
    }

    else {
        console.log("wrong request");
    }

    req = prompt("please enetr your choice");
 }
