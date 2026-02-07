Rock Paper Scissors



Declare a gameOptions Variable with a list of "rock", "paper" and "scissors"

Declare a dict computerBeats and give it the key value pair of the combinations which leads the user to a loss against the computer. Like userChoice: "computerChoice"
Get an input from user and lowercase that input

--Lowercase the input after verifying that an input is entered, otherwise return an error.
Generate a random rock paper scissor for the computer

--By combining math.random and math.floor functions and my multiplying this with the length of the gameOptions list.

Compare the two values from user and computer

--In a function compare the values and return 1)invalid-if no input is prevailed- 2)draw-if the user and computer input are the same- 3)loss - if the user's input matches with the key of computerBeats and the computer's input also matches with the value of the computerBeats. 4)win- if any of this doesn't happen.



Take the return value from the compared value and give an appropriate console.log

--If the return is invalid then log the invalid message

--If return is draw then log draw-ish message 

--If return is win then log win-ish message

--If return is loss then log loss-ish message

Play 5 rounds hence completing one game.

TODO: 