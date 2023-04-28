import { WINNER_COMBOS } from "../constants"
export const checkWinnerFrom = (boardToCheck) =>{
    // revisamos las combinaciones ganadoras para ver si x u o ganó
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] && // 0 --> x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
        ){
          return boardToCheck[a] // x u o
        }
    }
    // si no hay ganador
    return null
  }


 export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    //si no hay mas espacios vacios en el tablero
 return newBoard.every((square) => square !== null)
  }