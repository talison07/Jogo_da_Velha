document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    //adiciono a função em todos os quadrados
    square.addEventListener("click", clickPosition);
  });
});

function clickPosition(event) {
  //Identifica o quadrado clicado através do id
  let square = event.target;
  let position = square.id;

  //passa a vez para o próximo jogador
  playerMove(position);
  turn();

  //coloca o simbolo no quadrado clicado
  insertSymbol();
}

function insertSymbol() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    //Se a posição no board(game.js) não é vazia, adiciona o simbolo no quadrado clicado 
    if (symbol !== "") {
      square.innerHTML = `<div class="${symbol}"></div>`;
    }
  });
}

function clean() {
  let winnerScreen = document.getElementsByClassName("winScreen");

  //esvazia o board(game.js)
  board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  winStatus = false;
  insertSymbol();
  //limpa o tabuleiro e então faz a tela de vitória/empate subir
  winnerScreen[0].classList.remove("appear");
}

let resetButton = document.getElementById("reset");

resetButton.addEventListener("click", clean);

function winner() {
  let player1 = document.getElementById("punctuation1");
  let player2 = document.getElementById("punctuation2");

  let scores = document.getElementsByClassName("score");

  let score1 = scores[0];
  let score2 = scores[1];

  //transforma a string em um número para poder realizar operações matemáticas
  let points1 = parseInt(player1.textContent);
  let points2 = parseInt(player2.textContent);

  let winnerScreen = document.getElementsByClassName("winScreen");

  let winner = document.getElementById("winner");

  //verifica o vencedor
  if (winStatus == true) {
    if (playerTime == 0) {
      points1++;
    } else {
      points2++;
    }
  }

  //atualiza o placar
  const updatePoints = (player, point) => {
    player.textContent = point;
  };
  updatePoints(player1, points1);
  updatePoints(player2, points2);

  updatePoints(score1, points1);
  updatePoints(score2, points2);

  //trás a mensagem de vitória
  if (playerTime == 0) {
    winner.textContent = "X Venceu!";
  } else {
    winner.textContent = "O Venceu!";
  }

  winnerScreen[0].classList.add("appear");
}

function draw() {
  let winnerScreen = document.getElementsByClassName("winScreen");
  let winner = document.getElementById("winner");

  winnerScreen[0].classList.add("appear");
  //mensagem de empate
  winner.textContent = "Empate!"

}

function turn() {
  let turn = document.getElementById("turn")

  if (playerTime == 0) {
    turn.textContent = "Vez do jogador: X"
  }
  else {
    turn.textContent = "Vez do jogador: O"
  }

}





