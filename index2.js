let head =['a','b','c','d','f','g','h'];
function game(){

    const l= head.join( ' - ') ;
    
      console.log(l);
}
const chBoard=[
[' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' '],
[' ',' ',' ',' ',' ',' ',' '],
];
function printBoard(){
  for(const row of chBoard)
  {const line = row.join(' | ') ;
      console.log(line);
      console.log(' ---------------------');
   }
  }
  game();
  printBoard();