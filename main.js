const visuals = ["<pre> _____<br>|     |<br>|     |<br>|_____|<br></pre>", //text base dice photos
                "<pre> _____<br>|     |<br>|  *  |<br>|_____|<br></pre>",  //dice with the number 1 is visuals[1] 
                "<pre> _____<br>|  *  |<br>|  *  |<br>|_____|<br></pre>",  //dice with the number 2 is visuals[2]
                "<pre> _____<br>|  *  |<br>|*   *|<br>|_____|<br></pre>",  //goes on until 6
                "<pre> _____<br>|*   *|<br>|*   *|<br>|_____|<br></pre>",  //visuals[0] is empty dice
                "<pre> _____<br>|*   *|<br>|* * *|<br>|_____|<br></pre>",
                "<pre> _____<br>|* * *|<br>|* * *|<br>|_____|<br></pre>"]

const max = 6 //maximum and minimum random number values because we are rolling dices its min 1 to max 6
const min = 1

function randomNumber(minNum,maxNum){ //Random number generator function
    return randomNum = Math.floor(Math.random() * (maxDice - minDice + 1)) + minDice //maths of the random number generator
}

var dice1 = randomNumber(min,max) //rolling dices 
var dice2 = randomNumber(min,max)

console.log(dice1,dice2) //console printing the dices as int
document.write(visuals[dice1] + "First Dice") //visuals of the dices
document.write(visuals[dice2] + "Second Dice")