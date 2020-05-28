var timeLeft;

var timer = document.getElementById("timer");

var questionText = document.getElementById("questionText");

var answer1Btn = document.getElementById("answer1Btn");
var answer2Btn = document.getElementById("answer2Btn");
var answer3Btn = document.getElementById("answer3Btn");
var answer4Btn = document.getElementById("answer4Btn");

var totalPointsContent = document.getElementById("totalPoints");
var answerStatus = document.getElementById("answerStatus");

var table = document.getElementById("#table");

var userName = document.getElementById("userName");

var qC = 0;
var aC = 0;

var answerPoints = 0;
var totalPoints;

var ranking = [];


var questions = ["1. Which of these artists is known for the making of 'Joe's Garage'?",
    "2. Which of these artists is known for the making of 'Moving Pictures'?",
    "3. Which of these artists is known for the making of 'Animals'?",
    "4. Which of these artists is known for the making of 'L.A. Woman'?",
    "5. Which of these artists is known for the making of 'Exile on Main Street'?",
    "6. Which of these artists is known for the making of 'Jar of Flies'?",
    "7. Which of these artists is known for the making of 'Core'?",
    "8. Which of these artists is known for the making of 'Angel Dust'?",
    "9. Which of these artists is known for the making of 'Young Americans'?",
    "10. Which of these artists is known for the making of 'Thick as a Brick'?"
];

var answers = ["David Bowie", "Frank Zappa", "Pink Floyd", "Jimi Hendrix",
    "Rush", "Grateful Dead", "Yes", "Jethro Tull",
    "The Beatles", "Pink Floyd", "Stevie Wonder", "Santana",
    "Frank Sinatra", "The Doors", "Chuck Berry", "Tupac",
    "The Kinks", "Creedence Clearwater Revival", "The Rolling Stones", "Eric Clapton",
    "Nirvana", "Pearl Jam", "Alice in Chains", "Soundgarden",
    "Soundgarden", "Nirvana", "Neil Young", "Stone Temple Pilots",
    "James Brown", "Faith No More", "Alice in Chains", "Soundgarden",
    "David Bowie", "Lou Reed", "Joy Division", "The Smiths",
    "Camel", "Jethro Tull", "Renaissance", "Emerson, Lake & Palmer"
];

var correctAnswers = ["Frank Zappa",
    "Rush",
    "Pink Floyd",
    "The Doors",
    "The Rolling Stones",
    "Alice in Chains",
    "Stone Temple Pilots",
    "Faith No More",
    "David Bowie",
    "Jethro Tull"
];


//! start button 
document.getElementById("startQuizBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("welcomeCard").style.display = "none";
    document.getElementById("questionsCard").style.display = "block";
    timeLeft = 50;
    // questionText.textContent = questions[qC]
    renderStuff();
    startQuiz();
})

//! answers buttons
answer1Btn.addEventListener("click", function (event) {

    event.preventDefault();

    if (answer1Btn.textContent === correctAnswers[qC]) {
        answerPoints = answerPoints + 2;
        answerStatus.textContent = "Correct!"
        answerStatus.style.color = "green";
    } else {
        answerStatus.textContent = "Wrong!"
        answerStatus.style.color = "red";
        timeLeft = timeLeft - 4;
    }

    qC++;

    if (qC > 9) {
        totalPoints = timeLeft * answerPoints;
        totalPointsContent.textContent = "Total points: " + totalPoints;
        document.getElementById("welcomeCard").style.display = "none";
        document.getElementById("questionsCard").style.display = "none";
        document.getElementById("resultsCard").style.display = "block";
        renderScore();
    } else {
        renderStuff();
    }
    // document.getElementById("questionsCard").style.display = "none";
    // document.getElementById("resultsCard").style.display = "block";
})

answer2Btn.addEventListener("click", function (event) {

    event.preventDefault();

    if (answer2Btn.textContent === correctAnswers[qC]) {
        answerPoints = answerPoints + 2;
        answerStatus.textContent = "Correct!"
        answerStatus.style.color = "green";
    } else {
        answerStatus.textContent = "Wrong!"
        answerStatus.style.color = "red";
        timeLeft = timeLeft - 4;
    }

    qC++;

    if (qC > 9) {
        totalPoints = timeLeft * answerPoints;
        totalPointsContent.textContent = "Total points: " + totalPoints;
        document.getElementById("welcomeCard").style.display = "none";
        document.getElementById("questionsCard").style.display = "none";
        document.getElementById("resultsCard").style.display = "block";
        renderScore();
    } else {
        renderStuff();
    }
    // document.getElementById("questionsCard").style.display = "none";
    // document.getElementById("resultsCard").style.display = "block";
})

answer3Btn.addEventListener("click", function (event) {

    event.preventDefault();

    if (answer3Btn.textContent === correctAnswers[qC]) {
        answerPoints = answerPoints + 2;
        answerStatus.textContent = "Correct!"
        answerStatus.style.color = "green";
    } else {
        answerStatus.textContent = "Wrong!"
        answerStatus.style.color = "red";
        timeLeft = timeLeft - 4;
    }

    qC++;

    if (qC > 9) {
        totalPoints = timeLeft * answerPoints;
        totalPointsContent.textContent = "Total points: " + totalPoints;
        document.getElementById("welcomeCard").style.display = "none";
        document.getElementById("questionsCard").style.display = "none";
        document.getElementById("resultsCard").style.display = "block";
        renderScore();
    } else {
        renderStuff();
    }
    // document.getElementById("questionsCard").style.display = "none";
    // document.getElementById("resultsCard").style.display = "block";
})

answer4Btn.addEventListener("click", function (event) {

    event.preventDefault();

    if (answer4Btn.textContent === correctAnswers[qC]) {
        answerPoints = answerPoints + 2;
        answerStatus.textContent = "Correct!"
        answerStatus.style.color = "green";
    } else {
        answerStatus.textContent = "Wrong!"
        answerStatus.style.color = "red";
        timeLeft = timeLeft - 4;
    }

    qC++;

    if (qC > 9) {
        totalPoints = timeLeft * answerPoints;
        totalPointsContent.textContent = "Total points: " + totalPoints;
        document.getElementById("welcomeCard").style.display = "none";
        document.getElementById("questionsCard").style.display = "none";
        document.getElementById("resultsCard").style.display = "block";
        renderScore();
    } else {
        renderStuff();
    }
    // document.getElementById("questionsCard").style.display = "none";
    // document.getElementById("resultsCard").style.display = "block";
})


//! try again button
document.getElementById("tryAgainBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("resultsCard").style.display = "none";
    document.getElementById("welcomeCard").style.display = "block";
    location.reload();
})

//! clear button
document.getElementById("clear").addEventListener("click", function(event) {

    ranking = []; 
    localStorage.removeItem("scores"); 
    $("#table").empty(); 
})

//! save score button
document.getElementById("submitResultsBtn").addEventListener("click", function (event) {

    event.preventDefault();

    ranking = JSON.parse(localStorage.getItem("scores"));

    if(ranking === null) {
        ranking = [];
    }

    ranking.push({ "name": userName.value, "score": totalPoints });
    ranking.sort(compare); 


    // console.log(ranking);

    if (localStorage.getItem("scores") !== null) {
        localStorage.removeItem("scores");
    }
    localStorage.setItem("scores", JSON.stringify(ranking));

    // location.reload();
    $("#table").empty();
    renderScore();
})


function startQuiz() {

    var timerInterval = setInterval(function () {
        timeLeft--; //decrement time 
        document.getElementById("timer").style.display = "block";
        timer.textContent = timeLeft; //display time left  

        //when time runs out 
        if (timeLeft === 0) {
            clearInterval(timerInterval); //stop timer 

            //hide current section
            document.getElementById("welcomeCard").style.display = "none";
            document.getElementById("questionsCard").style.display = "none";
            document.getElementById("resultsCard").style.display = "block";

        }
    }, 1000); //interval is 1 second long 

}

function renderStuff() {

    questionText.textContent = questions[qC];

    answer1Btn.textContent = answers[aC];
    aC++;
    answer2Btn.textContent = answers[aC];
    aC++;
    answer3Btn.textContent = answers[aC];
    aC++;
    answer4Btn.textContent = answers[aC];
    aC++;
}

function renderScore() {

    ranking = JSON.parse(localStorage.getItem("scores"));

    $("#table").innerHTML = ""; 

    // var tbody = document.createElement("tbody");
    // tbody.setAttribute("id", "scoreboard");
    // table.appendChild(tbody); 
    
    
    if(ranking !== null) {

        for(var i = 0; i < ranking.length; i++) {

            var tableRow = document.createElement("tr");

            if (i === 0) {
                tableRow.setAttribute("id", "firstPlayer");
            } else if (i === 1) {
                tableRow.setAttribute("id", "secondPlayer")
            } else if (i === 2) {
                tableRow.setAttribute("id", "thirdPlayer")
            }

            if (i % 2 == 0) {
                tableRow.setAttribute("class", "par");
            } else {
                tableRow.setAttribute("class", "impar");
            }

            var rankData = document.createElement("td");
            rankData.textContent = i + 1;  

            var nameData = document.createElement("td"); 
            nameData.textContent = ranking[i].name; 

            var scoreData = document.createElement("td"); 
            scoreData.textContent = ranking[i].score; 

            tableRow.appendChild(rankData); 
            tableRow.appendChild(nameData); 
            tableRow.appendChild(scoreData); 

            // console.log(tableRow);
            // console.log(tableScore);

            $("#table").append(tableRow);
        }
    }

}

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