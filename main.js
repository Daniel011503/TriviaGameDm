var panel = $("quiz-area");

var countStartNumber = 30;

// Question set
var questions = [
    
    {
        question: "What is the creator of smash bros race",
        answers : ["Black", "white", "Japanese"],
        correctAnswer : "Japanese",
        image: "assets\C:\Users\0193605\Desktop\TriviaGameDm\assets\The-Rock-clapping-Clapping.gif",
     }

    {
        question: "How many major bosses are there in Breath of the wild base game",
        answers : ["4", "5", "6"],
        correctAnswer : "5",
        image: "assets\C:\Users\0193605\Desktop\TriviaGameDm\assets\gamer.gif",

    }

]

// Variable to hold our setInterval
var timer;

var game = {

    question: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect:0,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("YOU DIDN't CHANGE SOCIETY GAMER");
            game.timeUp();
        }
    },

    loadQuestion: function()  {
        timer = setInterval(game.countdown, 1000);
        panel.html("<h2>" + question[this.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.answer.Length; i++)
        {
            panel.append("<button class='answer-button' id='button' data-names=' " + 
            questions[this.currentQuestion].answer[i] +
        "'>" + questions[this.currentQuestion].answer[i] + "</button>");
        } 
    },

    nextQuestion: funtion() {
        game.counter = countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function() {

        clearInterval(timer);

        $("#counter-number").html(game.counter);

        panel.html(<h2>"out of time"</h2>);
        panel.appeal(<h3>"The Correct Answer was : " + questions[this.currentQuestion].correcrAnswer</h3>);
        panel.appeal("<img src='" + questions[this.currentQuestion].image + "'/>");

        if (game.currentQuestion === question.Length - 1)
        {
            setTimeout(game.results, 3 * 1000)
        }

    }

}