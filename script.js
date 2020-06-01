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
var qCtext;

var randomQnumber = 0;

var answerPoints = 0;
var totalPoints;

var ranking = [];
var randomQarray = [];


var questions = [   "Which of these artists is known for the making of 'Joe's Garage'?",
                    "Which of these artists is known for the making of 'Moving Pictures'?",
                    "Which of these artists is known for the making of 'Animals'?",
                    "Which of these artists is known for the making of 'L.A. Woman'?",
                    "Which of these artists is known for the making of 'Exile on Main Street'?",
                    "Which of these artists is known for the making of 'Jar of Flies'?",
                    "Which of these artists is known for the making of 'Core'?",
                    "Which of these artists is known for the making of 'Angel Dust'?",
                    "Which of these artists is known for the making of 'Young Americans'?",
                    "Which of these artists is known for the making of 'Thick as a Brick'?"
];

var answers = [     "David Bowie", "Frank Zappa", "Pink Floyd", "Jimi Hendrix",
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

var correctAnswers = [  "Frank Zappa",
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

    renderStuff();
    startQuiz();
})

//! answers buttons
answer1Btn.addEventListener("click", function (event) {

    event.preventDefault();

    if (answer1Btn.textContent === correctAnswers[randomQnumber]) {
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

    if (answer2Btn.textContent === correctAnswers[randomQnumber]) {
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

    if (answer3Btn.textContent === correctAnswers[randomQnumber]) {
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

    if (answer4Btn.textContent === correctAnswers[randomQnumber]) {
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
        timeLeft--; 
        document.getElementById("timer").style.display = "block";
        timer.textContent = timeLeft; 

        if (timeLeft === 0) {
            clearInterval(timerInterval);

            document.getElementById("welcomeCard").style.display = "none";
            document.getElementById("questionsCard").style.display = "none";
            document.getElementById("resultsCard").style.display = "block";

        }
    }, 1000);

}

function renderStuff() {


    for (let i = 0; i < 1; i++) {
        
        randomQnumber = Math.floor(Math.random() * 10);

        if(randomQarray.includes(randomQnumber)){
            i--;
        } else {
            randomQarray.push(randomQnumber);
            qCtext = qC+1;
            questionText.textContent = qCtext + ". " + questions[randomQnumber];
        }
    }

    var randomArray = [];

    var random1, random2, random3, random4;

    for (let i = 0; i < 4; i++) {
        var randomN = Math.floor(Math.random() * 4);

        if(randomArray.includes(randomN) && randomArray.length === 4) {
            i++;
        } else if (randomArray.includes(randomN)) {
            i--;
        } else {
            randomArray.push(randomN);
        }
    }

    var aC = randomQnumber*4;

    random1 = aC + randomArray[0];
    answer1Btn.textContent = answers[random1];

    random2 = aC + randomArray[1];
    answer2Btn.textContent = answers[random2];
    
    random3 = aC + randomArray[2];
    answer3Btn.textContent = answers[random3];
    
    random4 = aC + randomArray[3];
    answer4Btn.textContent = answers[random4];

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