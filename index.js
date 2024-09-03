const gameBoard = document.getElementById('game-board')
const boardCells = document.getElementsByClassName('board-cell')
const wrapper = document.getElementById('container')
const greeting = document.createElement('h2')
const startBtn = document.getElementById('start-btn')
const choosetBtn = document.getElementById('choose-btn')
const turn = document.createElement('p')

// let counter = 0

let randomNum = function(){Math.floor((Math.random() * 2) + 1)};

function chooseTurn() {

   wrapper.insertBefore(turn, gameBoard)
   
   randomNum = Math.floor((Math.random() * 2) + 1)
   
   turn.classList.add('turn')
   if(randomNum % 2 === 0) {
      turn.textContent = 'Zeroes turn'
   } else {
      turn.textContent = 'Crosses turn'
   }

   if(turn.textContent !== null) {
      choosetBtn.removeEventListener('click', chooseTurn)
   }   

   if(turn.textContent !== null) {
      arrfromBoardCells.forEach(cell => {
         cell.addEventListener('click', playGame)
      })
   } else {
      // arrfromBoardCells.forEach(cell => {
      //    cell.removeEventListener('click', playGame)
      // })
   }

   turn.textContent === 'Zeroes turn' ? turn.style.color = 'green' : turn.style.color = 'red'
}

choosetBtn.addEventListener('click', chooseTurn)

startBtn.addEventListener('click', () => {
   arrfromBoardCells.forEach(cell => {
      cell.textContent = ''
      cell.style.backgroundColor = 'inherit'
      cell.addEventListener('click', playGame)
   })

   greeting.textContent = ''
   wrapper.removeChild(turn)
   
})



function playGame(e) {
      randomNum++

      

      if(randomNum % 2 === 0) {
          e.target.innerHTML = '&times'
          e.target.style.color = 'red'
          e.target.removeEventListener('click', playGame)
      } else {
          e.target.innerHTML = '&#9675'
          e.target.style.color = 'green'
          e.target.removeEventListener('click', playGame)
      }

     
   
      if(boardCells[0].textContent === '\u00D7' && boardCells[1].textContent === '\u00D7' && boardCells[2].textContent === '\u00D7'){
              
              greeting.classList.add('greeting')
              greeting.style.color = 'red'
              
              greeting.textContent = 'Crosses have won'
              gameBoard.prepend(greeting) 
              boardCells[0].style.backgroundColor = 'lightgreen'
              boardCells[1].style.backgroundColor = 'lightgreen' 
              boardCells[2].style.backgroundColor = 'lightgreen' 
           }
   
      if(boardCells[3].textContent === '\u00D7' && boardCells[4].textContent === '\u00D7' && boardCells[5].textContent === '\u00D7'){
              console.log('Хрестики перемогли')
              let greeting = document.createElement('h2')
              greeting.classList.add('greeting')
              greeting.textContent = 'Crosses have won'
              gameBoard.prepend(greeting) 
              boardCells[3].style.backgroundColor = 'lightgreen'
              boardCells[4].style.backgroundColor = 'lightgreen' 
              boardCells[5].style.backgroundColor = 'lightgreen' 
      }
   
      if(boardCells[6].textContent === '\u00D7' && boardCells[7].textContent === '\u00D7' && boardCells[8].textContent === '\u00D7'){
          console.log('Хрестики перемогли')
         
          greeting.classList.add('greeting')
          greeting.textContent = 'Crosses have won'
          gameBoard.prepend(greeting) 
          boardCells[6].style.backgroundColor = 'lightgreen'
          boardCells[7].style.backgroundColor = 'lightgreen' 
          boardCells[8].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[0].textContent === '\u00D7' && boardCells[3].textContent === '\u00D7' && boardCells[6].textContent === '\u00D7'){
         
          
          greeting.classList.add('greeting')
   
          greeting.textContent = 'Crosses have won'
          gameBoard.prepend(greeting) 
          boardCells[0].style.backgroundColor = 'lightgreen'
          boardCells[3].style.backgroundColor = 'lightgreen' 
          boardCells[6].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[1].textContent === '\u00D7' && boardCells[4].textContent === '\u00D7' && boardCells[7].textContent === '\u00D7'){
         
          greeting.classList.add('greeting')
          greeting.textContent = 'Crosses have won'
          gameBoard.prepend(greeting) 
          boardCells[1].style.backgroundColor = 'lightgreen'
          boardCells[4].style.backgroundColor = 'lightgreen' 
          boardCells[7].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[2].textContent === '\u00D7' && boardCells[5].textContent === '\u00D7' && boardCells[8].textContent === '\u00D7'){
         
          greeting.classList.add('greeting')
   
          greeting.textContent = 'Crosses have won'
          gameBoard.prepend(greeting) 
          boardCells[2].style.backgroundColor = 'lightgreen'
          boardCells[5].style.backgroundColor = 'lightgreen' 
          boardCells[8].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[0].textContent === '\u00D7' && boardCells[4].textContent === '\u00D7' && boardCells[8].textContent === '\u00D7'){
          
          greeting.classList.add('greeting')
          greeting.textContent = 'Crosses have won'
          gameBoard.prepend(greeting) 
          boardCells[0].style.backgroundColor = 'lightgreen'
          boardCells[4].style.backgroundColor = 'lightgreen' 
          boardCells[8].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[2].textContent === '\u00D7' && boardCells[4].textContent === '\u00D7' && boardCells[6].textContent === '\u00D7'){
         
          greeting.classList.add('greeting')
          greeting.textContent = 'Crosses have won'
          gameBoard.prepend(greeting)
          boardCells[2].style.backgroundColor = 'lightgreen'
          boardCells[4].style.backgroundColor = 'lightgreen' 
          boardCells[6].style.backgroundColor = 'lightgreen' 
       }
   
   
   
   
   
       if(boardCells[2].textContent === '\u25CB' && boardCells[4].textContent === '\u25CB' && boardCells[6].textContent === '\u25CB'){
         
          greeting.classList.add('greeting')
          greeting.textContent = 'Zeroes have won'
          gameBoard.prepend(greeting)
          boardCells[2].style.backgroundColor = 'lightgreen'
          boardCells[4].style.backgroundColor = 'lightgreen' 
          boardCells[6].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[0].textContent === '\u25CB' && boardCells[4].textContent === '\u25CB' && boardCells[8].textContent === '\u25CB'){
          
          greeting.classList.add('greeting')
          greeting.textContent = 'Zeroes have won'
          gameBoard.prepend(greeting) 
          boardCells[0].style.backgroundColor = 'lightgreen'
          boardCells[4].style.backgroundColor = 'lightgreen' 
          boardCells[8].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[2].textContent === '\u25CB' && boardCells[5].textContent === '\u25CB' && boardCells[8].textContent === '\u25CB'){
         
          greeting.classList.add('greeting')
          greeting.textContent = 'Zeroes have won'
          gameBoard.prepend(greeting) 
          boardCells[2].style.backgroundColor = 'lightgreen'
          boardCells[5].style.backgroundColor = 'lightgreen' 
          boardCells[8].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[1].textContent === '\u25CB' && boardCells[4].textContent === '\u25CB' && boardCells[7].textContent === '\u25CB'){
          
          greeting.classList.add('greeting')
          greeting.textContent = 'Zeroes have won'
          gameBoard.prepend(greeting) 
          boardCells[1].style.backgroundColor = 'lightgreen'
          boardCells[4].style.backgroundColor = 'lightgreen' 
          boardCells[7].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[0].textContent === '\u25CB' && boardCells[3].textContent === '\u25CB' && boardCells[6].textContent === '\u25CB'){
          
          greeting.classList.add('greeting')
          greeting.textContent = 'Zeroes have won'
          gameBoard.prepend(greeting) 
          boardCells[0].style.backgroundColor = 'lightgreen'
          boardCells[3].style.backgroundColor = 'lightgreen' 
          boardCells[6].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[6].textContent === '\u25CB' && boardCells[7].textContent === '\u25CB' && boardCells[8].textContent === '\u25CB'){
         
          greeting.classList.add('greeting')
          greeting.textContent = 'Zeroes have won'
          gameBoard.prepend(greeting) 
          boardCells[6].style.backgroundColor = 'lightgreen'
          boardCells[7].style.backgroundColor = 'lightgreen' 
          boardCells[8].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[3].textContent === '\u25CB' && boardCells[4].textContent === '\u25CB' && boardCells[5].textContent === '\u25CB'){
          
          greeting.classList.add('greeting')
          greeting.textContent = 'Zeroes have won'
          gameBoard.prepend(greeting) 
          boardCells[3].style.backgroundColor = 'lightgreen'
          boardCells[4].style.backgroundColor = 'lightgreen' 
          boardCells[5].style.backgroundColor = 'lightgreen' 
       }
   
       if(boardCells[0].textContent === '\u25CB' && boardCells[1].textContent === '\u25CB' && boardCells[2].textContent === '\u25CB'){
         
          greeting.classList.add('greeting')
          greeting.textContent = 'Zeroes have won'
          gameBoard.prepend(greeting) 
          boardCells[0].style.backgroundColor = 'lightgreen'
          boardCells[1].style.backgroundColor = 'lightgreen' 
          boardCells[2].style.backgroundColor = 'lightgreen' 
       }


      greeting.textContent === 'Zeroes have won' ? greeting.style.color = 'green' :  greeting.style.color = 'red';

      if(greeting.textContent === 'Zeroes have won' || greeting.textContent === 'Crosses have won' ) {
         arrfromBoardCells.forEach(cell => {
            cell.removeEventListener('click', playGame)
         })
      }
      
   }

arrfromBoardCells = Array.from(boardCells)







    

     