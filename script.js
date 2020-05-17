// buttons
var startQuizButton = document.querySelector("#startQuizButton");
var tryAgainButton = document.querySelector("#tryAgain"); 
var clearScoresButton = document.querySelector("#clear-scores");

// stuff
var welcomeContent = document.querySelector("#welcomeContent");
var scoreForm = document.querySelector("#score-form"); 
var submitText = document.querySelector("#submit-text"); 
var timer = document.querySelector("#timer"); 

// scoreboard
var tableBody = document.querySelector("#table-body"); 
var scoreboarDiv = document.querySelector("#scoreboarDiv");
var scoreboard = document.querySelector("#scoreboard");
var scoreboardLink = document.querySelector("#scoreboardLink"); 

var score = 0;
var scoresArr = [];
var timeLeft;

addEventListener("click",function(event) {
    
    event.preventDefault();
    var buttonID = event.target.getAttribute("id"); 
    // preventing other buttons
    if(event.target.matches("button") && buttonID != "submit-scores" && buttonID != "tryAgain" && buttonID != "clear-scores" ) {

        var currentSectionIDBegin = event.target.parentElement.getAttribute("id"); 
        var currentSectionIDQuestions = event.target.parentElement.parentElement.parentElement.getAttribute("id"); 
        // right answer 
        if(event.target.classList.contains("correct")) {
            score++; 
        }
        // wrong answer
        else if(buttonID !="begin-button") {
            if(timeLeft > 8) {
                timeLeft -= 8; 
            }
            else {
                timeLeft = 1; 
            }
        }
        if(currentSectionIDBegin === null) { 
            renderNextSection(currentSectionIDQuestions); 
        }
        else {
            renderNextSection(currentSectionIDBegin); 
        }
    }
    else if(buttonID === "scoreboardLink") {
        renderScoreboard(welcomeContent.getAttribute("id")); 
    }
});

//action listener for begin quiz button 
startQuizButton.addEventListener("click",function(event) {
    //reset seconds left 
    timeLeft = 60; 
    //show on the page
    timer.textContent = timeLeft; 
    //start timer 
    startTime(); 
}); 

//listener for when scores are submitted 
scoreForm.addEventListener("click",function(event) {
    //stop form from default behavior 
    event.preventDefault(); 
    //only want to do anything if submit was clicked 
    if(event.target.matches("button")) {
        var currentSectionID = event.target.parentElement.parentElement.getAttribute("id"); 

        //grab input name 
        var input = submitText.value;

        //make sure array isnt null
        if(scoresArr === null) {
            scoresArr = []; //if it is, make the array 
        }

        scoresArr.push({"name":input,"score":score})
        scoresArr.sort(compare); 

        if(localStorage.getItem("scores") !== null) {
            localStorage.removeItem("scores"); 
        }

        localStorage.setItem("scores",JSON.stringify(scoresArr)); 
        renderScoreboard(currentSectionID); 
    }
}); 

//listener for clear scores button 
clearScoresButton.addEventListener("click",function(event) {
    //empty out array
    scoresArr = []; 

    //remove array from storage
    localStorage.removeItem("scores"); 

    //remove list items from the page 
    tableBody.innerHTML = ""; 
}); 

//listener for start over button 
tryAgainButton.addEventListener("click",function(event) {
    //reset score
    score = 0; 

    //make high scores link visible again 
    scoreboarDiv.classList.toggle("hidden"); 

    //get current section
    var currentSection = event.target.parentElement;
    //hide current section
    currentSection.classList.toggle("hidden"); 
    currentSection.removeAttribute("data-current"); 
    //show original page
    welcomeContent.classList.toggle("hidden"); 
    welcomeContent.setAttribute("data-current","current")
}); 

//renders next section and hides the current one 
function renderNextSection(currentSectionID) {
    var currentSection = document.querySelector("#" + currentSectionID);  
    var nextSection = (((currentSection.parentElement).nextElementSibling).firstElementChild); 
    
    console.log(currentSection); 
    console.log(currentSection.parentElement);
    
    
    //hide current section 
    currentSection.classList.toggle("hidden"); 
    currentSection.removeAttribute("data-current","current");

    //also hide high scores link if it needs to be hidden
    if(!scoreboarDiv.classList.contains("hidden")) {
        scoreboarDiv.classList.toggle("hidden"); 
    }

    //show next section
    nextSection.classList.toggle("hidden"); 
    nextSection.setAttribute("data-current","current")

    //make sure to stop timer if next section is the quiz completed section 
    if(nextSection.getAttribute("id") === "quiz-complete") {
        //set to 1 so timer doesnt go below zero 
        timeLeft = 1; 
    }
}

//renders high scores section and hides current section 
function renderScoreboard(currentSectionID) {
    var currentSection = document.querySelector("#" + currentSectionID); 
    
    //remove current table data from the page 
    tableBody.innerHTML = ""; 

    //grab scores from local storage 
    scoresArr = JSON.parse(localStorage.getItem("scores")); 
    
    if(scoresArr !== null) { //if there are scores to put on the page
        //step through array
        for(var i = 0; i < scoresArr.length; i++) {
            //create row
            var tableRow = document.createElement("tr");
            //create row entry 
            var rankData = document.createElement("td"); 
            rankData.textContent = i + 1;  
            //create name entry
            var nameData = document.createElement("td"); 
            nameData.textContent = scoresArr[i].name; 
            //create scores entry 
            var scoreData = document.createElement("td"); 
            scoreData.textContent = scoresArr[i].score; 
            //add to row
            tableRow.appendChild(rankData); 
            tableRow.appendChild(nameData); 
            tableRow.appendChild(scoreData); 
            //add row to table 
            tableBody.appendChild(tableRow);
        }
    }
    
    //hide current section 
    currentSection.classList.toggle("hidden"); 
    currentSection.removeAttribute("data-current"); 
    //show high scores 
    scoreboard.classList.toggle("hidden"); 
    scoreboard.setAttribute("data-current","current");
}


//for sorting scoresarr - sorts in descending order 
//code modified from https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
function compare(a, b) {
    var A = a.score;
    var B = b.score;
  
    var c = 0;
    if (A > B) {
      c = 1;
    } else if (A < B) {
      c = -1;
    }
    return c*-1;
}

//starts & tracks timer 
function startTime() {
    var timerInterval = setInterval(function() {
        timeLeft--; //decrement time 
        timer.textContent = timeLeft; //display time left  

        //when time runs out 
        if(timeLeft === 0) {
            clearInterval(timerInterval); //stop timer 

            //hide current section
            var currentSection = document.querySelector("[data-current='current']"); 
            currentSection.classList.toggle("hidden"); 
            currentSection.removeAttribute("data-current"); 

            //show submit scores form 
            var submitSection = document.querySelector("#quiz-complete"); 
            submitSection.classList.toggle("hidden"); 
            submitSection.setAttribute("data-current","current"); 
        }
    }, 1000); //interval is 1 second long 
}
