const generatePlayerBoard = (numberOfRows, numberOfColumns) =>{
let board =[];
for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
let row =[];
for ( let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
	row.push(' ');
}
board.push(row);
}
return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) =>{
let board =[];
for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
let row =[];
for ( let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
	row.push(null);
}
board.push(row);
}


let numberOfBombsPlaced=0;
while (numberOfBombsPlaced < numberOfBombs){
	const randomRowIndex = Math.floor(Math.random()* numberOfRows);
	const randomColumnIndex = Math.floor(Math.random()* numberOfRows);
	
if (board [randomRowIndex][randomColumnIndex]==! 'B'){
	board [randomRowIndex][randomColumnIndex] = 'B';
	numberOfBombsPlaced ++;
}
}

getNumberOfNeighborBombs= (bombBoard, rowIndex, columnIndex)=>{
const neighborOffsets = [
  [-1,-1],
  [-1,0],
  [-1,1],
  [1,0],
  [1,1],
  [1,-1],
  [0,1],
  [1,-1]
];
const numberOfRows = bombBoard.length;
const numberOfColumns = bombBoard[0].length;
let numberOfBombs= 0
}

return board;
};




const printBoard = board =>{
 console.log(board.map(row=> row.join(' | ')).join('\n'));
};



const playerBoard= generatePlayerBoard(5, 5);
const bombBoard = generateBombBoard(3, 3, 9);

console.log ('Player Board:');
printBoard(playerBoard);
console.log ('Bomb Board:');
printBoard(bombBoard);







