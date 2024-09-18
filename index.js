//Author  : Khaleel
//Date    : 17-09-2024 9:50 PM
//Js -- Code by Khaleel_op 😎😉

const one=document.getElementById("one");
const allboxes=document.querySelectorAll(".boxes");
const result=document.getElementById("result");
let x=true;
let count=0;

function main(value){
    console.log(count);
    if(x==true){  
        count++;
        player1(value);
        if(count==9){
            resultstatement();
        }
    }
    else{
        count++;
        player2(value);
        if(count==9){
            resultstatement();
        }
    }
    

}

function player1(value){
    allboxes[value-1].innerHTML=`X`;
    allboxes[value-1].disabled=true;
    checkwinner();
    x=false;
}
function player2(value){
    allboxes[value-1].innerHTML=`O`;
    allboxes[value-1].disabled=true;
    checkwinner();
    x=true;
}

function resultstatement(){
    if(result.textContent=="---"){
        result.textContent="It's a Tie!!";
    }
}

function checkwinner(){
    // for checking "X" as winner
    if(allboxes[0].innerHTML=="X"){
        if(allboxes[1].innerHTML=="X" && allboxes[2].innerHTML=="X"){
                result.textContent=`Player X Won!!`;
        }
        if(allboxes[3].innerHTML=="X" && allboxes[6].innerHTML=="X"){
            result.textContent="Player X Won!!";
        } 
        if(allboxes[4].innerHTML=="X" && allboxes[8].innerHTML=="X"){
            result.textContent="Player X Won!!";      
        }      
    }
    if(allboxes[1].innerHTML=="X"){
        if(allboxes[4].innerHTML=="X" && allboxes[7].innerHTML=="X"){
                result.textContent=`Player X Won!!`;
        }      
    }
    if(allboxes[2].innerHTML=="X"){
        if(allboxes[5].innerHTML=="X" && allboxes[8].innerHTML=="X"){
                result.textContent=`Player X Won!!`;
        }      
        if(allboxes[4].innerHTML=="X" && allboxes[6].innerHTML=="X"){
                result.textContent=`Player X Won!!`;
        }      
    }
    if(allboxes[3].innerHTML=="X"){
        if(allboxes[4].innerHTML=="X" && allboxes[5].innerHTML=="X"){
                result.textContent=`Player X Won!!`;
        }      
    }
    if(allboxes[6].innerHTML=="X"){
        if(allboxes[7].innerHTML=="X" && allboxes[8].innerHTML=="X"){
                result.textContent=`Player X Won!!`;
        }      
    }

    // for checking "O" as winner
    
    if(allboxes[0].innerHTML=="O"){
        if(allboxes[1].innerHTML=="O" && allboxes[2].innerHTML=="O"){
                result.textContent=`Player O Won!!`;
        }
        if(allboxes[3].innerHTML=="O" && allboxes[6].innerHTML=="O"){
            result.textContent="Player O Won!!";
        } 
        if(allboxes[4].innerHTML=="O" && allboxes[8].innerHTML=="O"){
            result.textContent="Player O Won!!";      
        }      
    }
    if(allboxes[1].innerHTML=="O"){
        if(allboxes[4].innerHTML=="O" && allboxes[7].innerHTML=="O"){
                result.textContent=`Player O Won!!`;
        }      
    }
    if(allboxes[2].innerHTML=="O"){
        if(allboxes[5].innerHTML=="O" && allboxes[8].innerHTML=="O"){
                result.textContent=`Player O Won!!`;
        }      
        if(allboxes[4].innerHTML=="O" && allboxes[6].innerHTML=="O"){
                result.textContent=`Player O Won!!`;
        }      
    }
    if(allboxes[3].innerHTML=="O"){
        if(allboxes[4].innerHTML=="O" && allboxes[5].innerHTML=="O"){
                result.textContent=`Player O Won!!`;
        }      
    }
    if(allboxes[6].innerHTML=="O"){
        if(allboxes[7].innerHTML=="O" && allboxes[8].innerHTML=="O"){
                result.textContent=`Player O Won!!`;
        }      
    }

}
