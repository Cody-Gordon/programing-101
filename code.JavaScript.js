 // functions are a nice way to organize our code and make it reasuable
        // use a descritive name for functions-they do something thus make it a verbaction
        // () can hold function argument - if i need to pass in information to the function.
        function playdice(){

            console.log("playdice() function was called") 
             //roll die 1
                let die1 = rollDice();
                let die2 = rollDice();
                console.log("die1="+die1)
                console.log("die2="+die2)

                //roll calculator
                let sum=die1+die2
        //display roll 1 in the roll 1 div
            let Result ="";
        //to do 
        document.getElementById("sum"),textContent = "sum = "+sum;
                //see if user lost        
                if (sum==21 || sum ==27){
                    console.log("youlost")
                    Result = "you lost tbf odds were never in your favor";
                }
                //modulus is when we do division but only care for the remainder
                else if(die1 % 2==0 && die1==die2){
                    console.log("you win")
                    Result ="you achieved victory against all odds";

                } 
                else{
                Result = "the most common result, you tied"
        
            }      
                document.getElementById("divdie1").textContent= "roll 1: "+ die1;
        document.getElementById("divdie2").textContent ="roll 2: "+ die2;
        document.getElementById("sum").textContent = "sum: "+sum;
        document.getElementById("results").textContent = "results: " + Result;
         }
         //create a function to generate a random number
            function rollDice(){
                //create a variable to hold a random number
                let result = Math.random()*20
                //round the result to whole number and return value
                return Math.ceil(result)
              
            }
            rollDice()
        