// array com 15 perguntas e respostas //
var qEa = [

    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },
    { q: "What year was Frank Zappa born?", a: "1940" },

    ];
    var seconds = 60;

// loop que mostra na tela em h2 e h3
    for (let i = 0; i < qEa.length; i++) {
        var newdiv = $("<h2>")
        var newdiv2 = $("<h3>")
        newdiv.text("Q: " + qEa[i].q)
        newdiv2.text("A: " + qEa[i].a)
        // $("#start").append(newdiv);
        // $("#start").append(newdiv2);
    }

// start button + Welcome intro
// creating button and title
    function welcome() {
        var startbutton = $("<button>")
        var newH2 = $("<h2>")

        // adding content
        newH2.text("This is the useless weird knowledge quiz! Try your best.")
        startbutton.text("START!")

        // appending to the quiz div
        $("#start").append(newH2)
        $("#start").append(startbutton)

        // adding functions "setTime" and "startQuiz" on click
        $("#start").on("click", function() {
            startQuiz()
        });
    }

// timer = 60s
    function setTime() {
        var timerInterval = setInterval(function() {
    // continuamente muda o texto de #timer
        $("#timer").text(seconds)
        seconds--;
    // para o timer e aciona result() se o tempo chegar a zero
            if(seconds === 0) {
                clearInterval(timerInterval);
                result();
            }
    }, 1000);
    }

// START QUIZ
// loop com 15 perguntas e 60 respostas, armazenar em variavel os acertos, mostrar resultado, 
// subtrair do timer 4 segundos a cada erro
    function startQuiz(){
        clean()
        setTime()
        
    }

// Result (respondendo todas perguntas ou acabando o timer), FINAL SCORE, salvar usuario (probably local storage)
    function result(){

    }

// funcao para limpar a tela
    function clean(){
        $("#start").empty()
        $("#timer").empty()
        $("#quiz").empty()
        $("#results").empty()
    }

// welcome
    welcome();