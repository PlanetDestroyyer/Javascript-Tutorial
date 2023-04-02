var count = 0;

function cardCount(card){
  
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "K":
        case "Q":
        case "A":
            count--;
            break;
    }

 
    var holdbet = "Hold"
 
    if (count > 0){
 
        holdbet = "bet";
 
    }
 
    return count + holdbet;

}


cardCount(2);cardCount(3);cardCount(7);cardCount('K');cardCount('A');
console.log(cardCount("K"));