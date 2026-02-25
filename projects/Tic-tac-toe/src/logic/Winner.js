export function checkWinner(board) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i * 3] &&
      board[i * 3] == board[i * 3 + 1] &&
      board[i * 3] == board[i * 3 + 2]
    ) {
      return board[i * 3];
    }

    if (board[i] && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return board[i];
    }
  }

  if (board[0] && board[0] === board[4] && board[0] === board[8]) {
    return board[0];
  }

  if (board[2] && board[2] === board[4] && board[2] === board[6]) {
    return board[2];
  }

  return null;
}
// every = todas las celdas
export function checkEndGame(board) {
  return board.every((cell) => cell !== null);
}
