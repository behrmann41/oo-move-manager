function MoveManager() {
  this.board = [
      ['x','x','x'],
      ['x','x','x'],
      ['x','x','x']
      ];
}

MoveManager.prototype.insert = function(row,col) {
  this.board[row][col] = 'o';
  return this.board;
};

MoveManager.prototype.movePlayer = function(row, col, dir) {
  if (this.board[row][col] != 'o') { throw new Error('Piece does not exist')};
    if ((dir == 'right' && col == 2) ||
      (dir == 'left' && col == 0) ||
      (dir == 'up' && row == 0) ||
      (dir) == 'down' && row == 2){
      throw new Error('Invalid Move')
    }

    this.board[row][col] = 'x';

    if (dir == 'right') {
      col += 1;
    } else if (dir == 'left') {
      col -= 1;
    } else if (dir == 'up') {
      row -= 1;
    } else if (dir == 'down') {
      row += 1;
    }

    this.board[row][col] = 'o'
    return this.board
}
module.exports = MoveManager;

// this.board = [
//     ['x','x','x'],
//     ['x','x','x'],
//     ['x','x','x']
//     ];
// if (dir === 'right'){
//   this.board[row][col + 1] = 'o'
//   return this.board;
// } else if (dir === 'left'){
//   this.board[row][col - 1] = 'o'
//   return this.board;
// } else if (dir === 'down'){
//   this.board[row + 1][col] = 'o'
//   return this.board
// } else if (dir === 'up'){
//   this.board[row - 1][col] = 'o'
//   return this.board
// }