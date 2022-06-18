
function computerPlay(){
    let x = Math.floor(Math.random()* 3);
    if (x == 0) {
        result = "Rock";
    }
    if (x == 1) {
        result = 'Paper';
    }
    if (x == 2) {
        result = 'Scissors';
    }
    return result
}