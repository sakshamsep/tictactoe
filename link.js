
const cells = document.querySelectorAll(".box")
const result = document.querySelector(".result")

let isFull;

function checkBoard() {
    isFull = true;

    for (let i = 0 ; i < cells.length ; i++)
{
    if(cells[i].innerHTML == "")

    {    isFull = false;
        break;
    }

}

return isFull;
    
}






function checkWin() {

    if ( cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML== cells[2].innerHTML && (cells[0].innerHTML == 'X' || cells[0].innerHTML == 'O'))

      {  cells.forEach(element => {
           element.style.pointerEvents = "none";
            
        });
        return cells[0].innerHTML;
}
    if ( cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML== cells[6].innerHTML && (cells[0].innerHTML == 'X' || cells[0].innerHTML == 'O'))
          {  cells.forEach(element => {
           element.style.pointerEvents = "none";
            
        });
        return cells[0].innerHTML;
}

    if ( cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML== cells[8].innerHTML && (cells[6].innerHTML == 'X' || cells[6].innerHTML == 'O'))
          {  cells.forEach(element => {
           element.style.pointerEvents = "none";
            
        });
        return cells[6].innerHTML;
}

    if ( cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML== cells[4].innerHTML && (cells[2].innerHTML == 'X' || cells[2].innerHTML == 'O'))
          {  cells.forEach(element => {
           element.style.pointerEvents = "none";
            
        });
        return cells[2].innerHTML;
}

    if ( cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML== cells[8].innerHTML && (cells[0].innerHTML == 'X' || cells[0].innerHTML == 'O'))
          {  cells.forEach(element => {
           element.style.pointerEvents = "none";
            
        });
        return cells[0].innerHTML;
}

    if ( cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML== cells[2].innerHTML && (cells[1].innerHTML == 'X' || cells[1].innerHTML == 'O'))
          {  cells.forEach(element => {
           element.style.pointerEvents = "none";
            
        });
        return cells[1].innerHTML;
}

    if ( cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML== cells[7].innerHTML && (cells[1].innerHTML == 'X' || cells[1].innerHTML == 'O'))
          {  cells.forEach(element => {
           element.style.pointerEvents = "none";
            
        });
        return cells[1].innerHTML;
}
    
     if ( cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML== cells[5].innerHTML && (cells[3].innerHTML == 'X' || cells[3].innerHTML == 'O'))
          {  cells.forEach(element => {
           element.style.pointerEvents = "none";
            
        });
        return cells[3].innerHTML;
}

    if ( cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML== cells[6].innerHTML && (cells[2].innerHTML == 'X' || cells[2].innerHTML == 'O'))
         {  cells.forEach(element => {
           element.style.pointerEvents = "none";
            
        });
        return cells[2].innerHTML;

 
}


}



function displayResult() {
    const winner = checkWin();
    const isBoardfull = checkBoard();
        
        if (winner)
        {
            result.innerHTML =  ` ${checkWin()}  Wins `;
           result.style.display = "flex"
        }
            
        else if (isBoardfull)
        {
            result.innerHTML = "Draw";
            result.style.display = "flex"
        }
        else
            result.innerHTML = "";
        result.style.display = "none" ;
    
    
}

function playGame()

{
    
    checkWin();
    checkBoard();
   
    displayResult();
    
}

function turn() {
    let current = "O"
    cells.forEach(element => {
   
element.addEventListener('click',()=> {

    if (element.innerHTML == "")
    {element.innerHTML = current;
        element.style.backgroundColor = "red";
    }
    
    if (current == "O")
        current = "X";
    else 
        current = "O"

    playGame();
})
    
});
}
turn();