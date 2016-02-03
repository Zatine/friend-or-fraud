app.controller('GameController', GameController)

function GameController($scope, $interval, Mobile, $state, $timeout, Game, CurrentUser){
    $scope.onMobile = Mobile;
    $scope.game = Game;
    $scope.user = CurrentUser;
  
        //Timer funktion
        if($state.is('guess-answer')) {
            
            if(!Mobile) var counter = $interval(timer, 1000);

            function timer() {
                Game.timerTick();
                var answers = Game.currentQuestion.answers ? Game.currentQuestion.answers.total : 0;
                if (Game.time <= 0 || (Game.numOfPlayers - 1) == answers) {
                    $interval.cancel(counter);
                    Game.timerTick(true);
                    return;
                }
            }
        }

        if($state.is('display-answer')) {
            var answers = Game.currentQuestion.answers ? Game.currentQuestion.answers.correct : false;
            if(CurrentUser.answer === Game.currentQuestion.selectedAnswer && CurrentUser.id !== Game.currentPlayer.id){
                CurrentUser.addScore(1);
            }
            else if(CurrentUser.id === Game.currentPlayer.id && answers){
                CurrentUser.addScore(1);
            }
            
            if(!Mobile) $timeout(function(){Game.nextQuestion();}, 8000);
            
        }


        $scope.chooseAnswer = function (answer) {
            $scope.chosenAnswer = answer;
            if(Mobile) CurrentUser.chooseAnswer(answer);
        }

        $scope.setAnswer = function (answer){
            Game.setCurrentQuestionAnswer(answer);          
        }
}
