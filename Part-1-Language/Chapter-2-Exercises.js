// Looping a Triangle
for(let pound = "#"; pound.length <= 7; pound = pound + "#") {
    console.log(pound);
}

// FizzBuzz
for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else console.log(i);
}

// Chessboard
function chessboard(size) {
    let board = "";
    for(let y = 0; y < size; y++) {
        for(let x = 0; x < size; x++) {
            if((x + y) % 2 == 0) {
                board += " ";
            } else board += "#";
        } board += "\n";
    }
    console.log(board);
}

chessboard(8);