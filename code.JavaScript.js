 // functions are a nice way to organize our code and make it reasuable
        // use a descritive name for functions-they do something thus make it a verbaction
        // () can hold function argument - if i need to pass in information to the function.
        //for the dice game
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
            function validateForm(){
           
                let FirstName = document.getElementById("txtFirstName").value.trim();
                console.log("Firstname"+FirstName);
                let LastName = document.getElementById("txtLastName").value.trim();
                console.log("Last name"+LastName);
                let ZipCode = document.getElementById("txtzip").value.trim();
                console.log("Zipcode"+ZipCode);
                //for the user choice assignment
            
            //validation we need to make sure that the first name + " "+ last name is less than 20 characters
            //zip code needs to be exactly 5 digits
            //variable to store message that we will display to user
            //concacinate first and last name with a space between
            let FullName = FirstName +" " + LastName
            if(FullName.length>20||FullName.length==1){
                //an invalide name was entered
                message = "invalid name, please try again"
                console.log("invalid name")
            }
                else if (ZipCode.length != 5){
                    message="invalid zip code, try again"
                }
            
            let message="welcome "+ FirstName+ " the secret message was hi"
            document.getElementById("divMessage").textContent=message;
        }
        //for index image movement
        let yCord=randint()
        // keep track of the interval the image will move
        let intervalID =0;
    //this function will start the movement of a given image around the screen
    function startMove(){
      //create a shortcut (nickname) to the image in te HTML
      let image = document.getElementById("memeImage");
      
      intervalID = setInterval(function(){
        xCord=randint();
        yCord=randint();
        //change coordinate x
      image.style.left = xCord + "px";
      //change coordinate y
      image.style.top = yCord + "px";
       console.log("did image move, was it random in both directions")
      },1000)//this will make the code run every second
     document.getElementById("btnstart").disabled = true;
     document.getElementById("btnstop").disabled=false;
      //function to get a random number
     
    }
    function stopMove(){
      //clears the interval preventing the code from running over and over again
      clearInterval(intervalID);
      document.getElementById("btnstart").disabled = false;
     document.getElementById("btnstop").disabled=true;
    }
    function randint(){
      return Math.floor(Math.random()*800);
    
    }
    // palindrome tester
    function testPalin(){
 
        // grab user input
        let string = document.getElementById("txtInput").value.trim();
        console.log("userInput"+ string)
        
        if (isPalindrome(string)){
            document.getElementById("divResult").textContent="yes, " +
            string + " is a palindrome."
        
        }
        else{
            document.getElementById("divResult").textContent="No, " +
            string + " is not a palindrome"
        }
        
        
        }
        function isPalindrome(wordToTest){
            // checks word for spaces and removes them? No Freaking clue how that end command works but it does.......................................................................................
            let cleanedWord = wordToTest.replace(/\s/g, "");
            cleanedWord=cleanedWord.toLowerCase();
        // convert cleaned string to array
        let arrUsrString = cleanedWord.split("");
        //reverse array content
        arrUsrString=arrUsrString.reverse();
        //take our reversed array and convert back to string
        let reversedWord=arrUsrString.join("")
        console.log("test "+ reversedWord)
        
        return cleanedWord == reversedWord;
        
        }
        // audio assignment
        function addAudio(){
            let audioElem = document.createElement("audio");
            audioElem.setAttribute("id", "myAudio");
            audioElem.setAttribute("src","us-lab-background.mp3")
            // make sure to use your sound file name here you can use the us-lab-background mp3 for testing- make sure the sound file is in the same folder as your html/js files
         // this adds the control dashboard to show that the audio file is working
            audioElem.setAttribute("controls","controls")
        document.getElementById("divAudio").appendChild(audioElem);
        //hide the add audio button
        document.getElementById("btnAddAudio").hidden=true
        document.getElementById("btnPlayAudio").hidden=false
        document.getElementById("btnStopAudio").hidden=false
        
        }
        function PlayAudio(){
            let audio = document.getElementById("myAudio")
            audio.play();
        }
        function stopAudio(){
            let audio = document.getElementById("myAudio")
            audio.pause();
        }