
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
 const board = [];
 for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
 	const row = [];
 	for(columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
 	row.push(' ');
}
 board.push(row);
 }
 return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
 const board = [];
 for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
 	const row = [];
 	for(columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
 	row.push(null);
}
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
const neighborOffsets.forEach(offset =>{
const nieghborRowIndex = rowIndex + offset[0];
const neighborColumnIndex = columnIndex + offset[]
});
[
[-1,-1],
[0,-1],
[1.-1],
[-1.0],
[1,0],
[-1,1],
[0,1],
[1,1]
];
const numberOfRows = bombBoard.length;
const numberOfColumns= bombBoard[0].length
let numberOfBombs=0

};
board.push(row);
 }
 let numberOfBombsPlaced = 0;
 while(numberOfBombsPlaced < numberOfBombs){
 	let randomRowIndex = Math.floor(Math.random() * numberOfRows);
 	let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
 	

 	if (board [randomRowIndex][randomColumnIndex] !=='B'){
        board [randomRowIndex][randomColumnIndex] ='B';
        numberOfBombsPlaced++;
 	}
 }
 return board;
};

const printBoard = board => {
console.log(board.map (row => row.join (' | ')).join('\n'));
};


let playerBoard = generatePlayerBoard (3,4);
let bombBoard = generateBombBoard (2,2,2);

console.log ("Player Board:\n");
printBoard(playerBoard);
console.log ("Bomb Board:\n");
printBoard(bombBoard);