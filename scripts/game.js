let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbol = ["x", "o"];
let winStatus = false;

function playerMove(position) {
  if (winStatus) {
    //se houver vencedor, acaba o jogo
    return
  }



  //se a posição clicada não é vazia, coloca o simbolo no board(game.js)
  if (board[position] == "" || board[position] == " ") {
    board[position] = symbol[playerTime];
    win();



    //alterna a vez
    if (playerTime == 0) {
      playerTime = 1;
    } else {
      playerTime = 0;
    }

  }

}

function win() {
  let winPossibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //varre todas as possibilidades de vitória verificando se há um vencedor
  for (let i = 0; i < winPossibilities.length; i++) {
    let sequence = winPossibilities[i];
    let sequencePosition1 = sequence[0];
    let sequencePosition2 = sequence[1];
    let sequencePosition3 = sequence[2];

    if (board[sequencePosition1] != "" && board[sequencePosition1] != " ") {
      if (
        board[sequencePosition1] == board[sequencePosition2] &&
        board[sequencePosition1] == board[sequencePosition3]
      ) {
        //se houver vencedor, atualiza o status do game para terminar a partida
        winStatus = true;
        winner();

        //atualiza o placar e dá mensagem de vitória

      }




    }



  }

}

