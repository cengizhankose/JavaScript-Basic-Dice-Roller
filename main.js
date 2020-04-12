const visuals = ["<pre> _____<br>|     |<br>|     |<br>|_____|<br></pre>",
                "<pre> _____<br>|     |<br>|  *  |<br>|_____|<br></pre>",
                "<pre> _____<br>|  *  |<br>|  *  |<br>|_____|<br></pre>",
                "<pre> _____<br>|  *  |<br>|*   *|<br>|_____|<br></pre>",
                "<pre> _____<br>|*   *|<br>|*   *|<br>|_____|<br></pre>",
                "<pre> _____<br>|*   *|<br>|* * *|<br>|_____|<br></pre>",
                "<pre> _____<br>|* * *|<br>|* * *|<br>|_____|<br></pre>"]

const max = 6
const min = 1

function rollDice(minDice,maxDice){
    return newDice = Math.floor(Math.random() * (maxDice - minDice + 1)) + minDice
}

var dice1 = rollDice(min,max)
var dice2 = rollDice(min,max)

console.log(dice1,dice2)
document.write(visuals[dice1] + "First Dice")
document.write(visuals[dice2] + "Second Dice")