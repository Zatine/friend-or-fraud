var app = angular.module('app', ['firebase', 'ui.router'])
          .constant('FirebaseRef', new Firebase('https://friend-or-fraud.firebaseio.com/'))
          .constant('Mobile', isMobile())
          .service('Error', function(){ this.message = '' })
          .config(config)
          .service('UserState', function(){this.state = 'start'; });

function isMobile(){
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("main");

    $stateProvider
        .state('main', {
        url: "",
        templateUrl: "../views/main.html",
        controller: "MainController"
        })
        .state('set-answer', {
        templateUrl: "../views/set-answer.html",
        controller: 'GameController'
        })
        .state('guess-answer', {
        templateUrl: "../views/guess-answer.html",
        controller: 'GameController'
        })
        .state('display-answer', {
        templateUrl: "../views/display-answer.html",
        controller: 'GameController'
        })
        .state('result', {
        templateUrl: "../views/result.html",
        controller: "ResultController"
        })
}

var app = angular.module('app', ['firebase', 'ui.router'])
          .constant('FirebaseRef', new Firebase('https://friend-or-fraud.firebaseio.com/'))
          .constant('Mobile', isMobile())
          .service('Error', function(){ this.message = '' })
          .config(config)
          .service('UserState', function(){this.state = 'start'; });

function isMobile(){
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("main");

    $stateProvider
        .state('main', {
        url: "",
        templateUrl: "../views/main.html",
        controller: "MainController"
        })
        .state('set-answer', {
        templateUrl: "../views/set-answer.html",
        controller: 'GameController'
        })
        .state('guess-answer', {
        templateUrl: "../views/guess-answer.html",
        controller: 'GameController'
        })
        .state('display-answer', {
        templateUrl: "../views/display-answer.html",
        controller: 'GameController'
        })
        .state('result', {
        templateUrl: "../views/result.html",
        controller: "ResultController"
        })
}

var app = angular.module('app', ['firebase', 'ui.router'])
          .constant('FirebaseRef', new Firebase('https://friend-or-fraud.firebaseio.com/'))
          .constant('Mobile', isMobile())
          .service('Error', function(){ this.message = '' })
          .config(config)
          .service('UserState', function(){this.state = 'start'; });

function isMobile(){
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("main");

    $stateProvider
        .state('main', {
        url: "",
        templateUrl: "../views/main.html",
        controller: "MainController"
        })
        .state('set-answer', {
        templateUrl: "../views/set-answer.html",
        controller: 'GameController'
        })
        .state('guess-answer', {
        templateUrl: "../views/guess-answer.html",
        controller: 'GameController'
        })
        .state('display-answer', {
        templateUrl: "../views/display-answer.html",
        controller: 'GameController'
        })
        .state('result', {
        templateUrl: "../views/result.html",
        controller: "ResultController"
        })
}

app.controller('GameController', GameController)

function GameController($scope, $interval, Mobile, $state, $timeout, Game, CurrentUser){
    $scope.onMobile = Mobile;
    $scope.game = Game;
    $scope.user = CurrentUser;
  
        //Timer funktion
        if($state.is('guess-answer')) {
            //$scope.count = 7;
            if(!Mobile) var counter = $interval(timer, 1000); // kör varje sekund

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
            
            var time = $timeout(function () {
                if(!Mobile) Game.nextQuestion();
                $state.go('set-answer');
                $timeout.cancel(time);
            }, 5000);
        }


        $scope.chooseAnswer = function (answer) {
            $scope.chosenAnswer = answer;
            if(Mobile) CurrentUser.chooseAnswer(answer);
        }

        $scope.setAnswer = function (answer){
            Game.setCurrentQuestionAnswer(answer);          
        }
}

app.controller('MainController', MainController);

function MainController($scope, Error, CurrentUser, UserState, Game, Mobile){
    $scope.user = CurrentUser;
    $scope.game = Game;
    $scope.validationError = Error;
    $scope.onMobile = Mobile;
    $scope.state = UserState;
    $scope.howToPlayButton = false;

    if(!$scope.onMobile) {
      Game.createNew();
    }

    $scope.howToPlay = function(){
        $scope.howToPlayButton = !$scope.howToPlayButton;
    }

    $scope.connectToGame = function (id){
        if(!id) {Error.message = "You need to enter an ID."; return;}
        if(id.length !== 6) {Error.message = "The ID should be 6 characters long."; return;}

        id = id.toUpperCase();
        Game.connectTo(id);
    }

    $scope.setUser = function(name){
        if(!name) {Error.message = "You need to enter a name."; return;}
        Error.message = "";
        CurrentUser.setUser(name);
    }


    $scope.toggleReady = function(){
      $scope.user.ready = !$scope.user.ready;
      CurrentUser.toggleReady($scope.user.ready);
    }

}

app.controller('ResultController', ResultController)

function ResultController($scope, Game, CurrentUser, Mobile){
    $scope.game = Game;
    $scope.user = CurrentUser;
    $scope.onMobile = Mobile;
}

app.service('CurrentUser', CurrentUser);

function CurrentUser(UserState, Game, FirebaseRef, $firebaseAuth, Error, $rootScope){
    var self = this,
        colors = ['pink', 'green', 'blue', 'red', 'orange'],
        avatars = ['fish', 'cat', 'bird', 'snail'],
        color = colors[Math.floor(Math.random() * colors.length)],
        avatar = avatars[Math.floor(Math.random() * avatars.length)];


    function setDetails(name, id){
        var user = {};
        self.name = user.name = name;
        self.score = user.score = 0;
        self.ready = user.ready = false;
        self.color = user.color = color;
        self.id = user.id = id;
        self.avatar = user.avatar = avatar;
        return user;
    }




    this.toggleReady = function(status){
        this.ready = status;
        this.ref.update({ready: status});
    }

    this.setUser = function(name){
        $firebaseAuth(FirebaseRef).$authAnonymously().then(function(authData) {
            var user = setDetails(name, authData.uid);

            // Försöka göra så att man inte kan få samma avatar + färg som nån annan
            // var index = colors.indexOf(user.color);
            // colors.splice(index, 1);
            // console.log(colors);
            //
            // var index2 = avatars.indexOf(user.avatar);
            // avatars.splice(index2, 1);
            // console.log(avatars);

            console.log("Logged in as:", authData.uid);
            self.ref = Game.ref.child('players').child(authData.uid);
            self.ref.set(user);
            self.ref.onDisconnect().remove();

            UserState.state = 'registered';
        })
         .catch(function(error) {
          console.error("Authentication failed:", error);
          Error.message = "Could not register user. Please try again.";
          if(!$rootScope.$$phase) $rootScope.$apply();
        });
    }

    this.chooseAnswer = function(answer){
        self.answer = answer;
        self.ref.update({answer: answer});
    };

    this.addScore = function(points){
        self.score += points;
        self.ref.update({score: self.score});
    }

    this.ref = null;
}

app.service('Game', Game);

function Game(UserState, FirebaseRef, $firebaseAuth, $firebaseArray, Error, $state, $rootScope, Mobile, $timeout){
  var self = this,
      currentPlayerIndex = 0,
      currentQuestionIndex = 0;

  this.ref = null;
  this.inProgress = false;
  this.numOfPlayers = 0;
  this.id = '...';
  this.playerOrder = [];
  this.time = 9;

  this.createNew = function(){
    var id = generateGameCode();

    FirebaseRef.child('Games').child(id).once('value', function(snapshot) {
        if (snapshot.val() === null) addToFirebase(id);
        else self.createGame();
    });

    function addToFirebase(id){
        self.id = id;
        self.ref = FirebaseRef.child('Games').child(id);
        self.ref.set({numOfPlayers: self.numOfPlayers, inProgress: self.inProgress, time: self.time});

        $firebaseAuth(FirebaseRef).$authAnonymously().then(function(authData) {
              console.log("Logged in as:", authData.uid);
              self.ref.onDisconnect().remove();
            }, {remember: "sessionOnly"})
             .catch(function(error) {
              console.error("Authentication failed:", error);
              Error.message = "Could not create game. Please refresh the page to try again.";
              if(!$rootScope.$$phase) $rootScope.$apply();
        });

        self.ref.on('value', function(snapshot){
              var update = checkPlayers(snapshot.val().players);
              self.numOfPlayers = update.numOfPlayers;
              self.inProgress = update.inProgress;
              self.playerOrder = update.playerOrder;
              self.players = snapshot.val().players;

              self.ref.update(update);
              if(update.inProgress) {self.ref.off('value'); setupGame();}
              if(!$rootScope.$$phase) $rootScope.$apply();
        });
      }

  }; 

  this.connectTo = function(id){
    FirebaseRef.child('Games').child(id).once('value', function(snapshot) {
          var exists = (snapshot.val() !== null);
          if (!exists) {Error.message = "Game could not be found. Check your ID.";  if(!$rootScope.$$phase) {$rootScope.$apply();} return; }

          Error.message = '';
          self.ref = FirebaseRef.child('Games').child(id);
          self.id = id;
          self.inProgress = snapshot.val().inProgress;
          self.numOfPlayers = snapshot.val().numOfPlayers;
          UserState.state = 'connected';

          self.ref.on('value', function(snapshot){
              setGameParameters(snapshot.val());
              if(self.inProgress) {self.ref.off('value'); startGame();}
          });

          if(!$rootScope.$$phase) $rootScope.$apply();
    });
  }

  this.nextQuestion = function(){
      if(Mobile) return;
      /*self.questions[currentQuestionIndex] = self.currentQuestion;
      self.ref.update({questions: self.questions});*/
      resetTimer();
      resetAnswers(self.players);
      self.ref.child('currentQuestion').remove();
      self.ref.child('currentPlayer').remove();

      currentQuestionIndex++;
      currentPlayerIndex = currentPlayerIndex == (self.numOfPlayers - 1) ? 0 : currentPlayerIndex + 1;

      if(currentQuestionIndex > (self.questions.length - 1)) {
          endGame();
          return;
      }

      self.currentQuestion = self.questions[currentQuestionIndex];
      self.ref.child('currentQuestion').set(self.currentQuestion);
      setCurrentPlayer(self.playerOrder[currentPlayerIndex]);
  }

  this.setCurrentQuestionAnswer = function(answer){
    self.ref.child('currentQuestion').update({selectedAnswer: answer});
  }

  this.timerTick = function(end){
    end = end || false;
    self.time = end ? 0 : self.time - 1;
    self.ref.update({time: self.time});
  }

  function resetTimer(){
    self.time = 9;
    self.ref.update({time: 9});
  }

  function setCurrentPlayer(id){
       self.ref.child('players').once('value', function(snapshot) {
          self.currentPlayer = snapshot.val()[id];
          self.ref.update({currentPlayer: self.currentPlayer});
       });
  }

  function setupGame(){
    FirebaseRef.child('Questions').once('value', function(snapshot) {
        self.questions = shuffleArray(snapshot.val()).splice(0, 5);

        self.playerOrder = shuffleArray(self.playerOrder);

        self.currentQuestion = self.questions[currentQuestionIndex];

        setCurrentPlayer(self.playerOrder[currentPlayerIndex]);

        self.ref.update({playerOrder: self.playerOrder, questions: self.questions, currentQuestion : self.currentQuestion});

        startGame();
    });
  }

  function startGame(){
    self.ref.on('value', function(snapshot){
       setGameParameters(snapshot.val());
       if(self.time === 0 && $state.is('guess-answer')) $state.go('display-answer');
       if(!self.inProgress /*&& !self.currentPlayer && !self.currentQuestion*/){
          self.ref.child('players').off('value');
          self.ref.child('currentQuestion').off('value');
          endGame();
          $timeout(function(){
            $state.go('result');
          });
       }
       if(!$rootScope.$$phase) $rootScope.$apply();
    });
    self.ref.child('players').on('value', function(snapshot){
        if(snapshot.val() === null) return;
        var answers = correctAnswers(snapshot.val());
        self.ref.child('currentQuestion').update(answers);
    });
    self.ref.child('currentQuestion').on('value', function (snapshot){
      if(snapshot.val()) self.selectedAnswer = snapshot.val().selectedAnswer;
      if(self.selectedAnswer && $state.is('set-answer') && self.time > 0) $state.go('guess-answer');
    });
    $state.go('set-answer');
  }

  function endGame(){
    var update = {};
    self.inProgress = update.inProgress = false;
    self.currentQuestion = update.currentQuestion = {};
    self.currentPlayer = update.currentPlayer = {};
    self.ref.update(update);
  }

  function setGameParameters(snapshotVal){
    self.inProgress = snapshotVal.inProgress;
    self.players = snapshotVal.players;
    self.playerOrder = snapshotVal.playerOrder;
    self.numOfPlayers = snapshotVal.numOfPlayers;
    self.currentPlayer = snapshotVal.currentPlayer;
    self.questions = snapshotVal.questions;
    self.currentQuestion = snapshotVal.currentQuestion;
    self.time = snapshotVal.time;
  }

  function checkPlayers(players){
      var size = 0, ready = [], play = false, order = [];

      for (key in players) {
         if (players.hasOwnProperty(key)) size++;
         order.push(players[key].id);
         ready.push(players[key].ready);
      }
      if(ready.indexOf(false) === -1 && ready.length && self.numOfPlayers > 1) play = true;
      return {numOfPlayers: size, inProgress: play, playerOrder: order};
  }

  function correctAnswers(players){
    var correct = [], wrong = [];
    for (key in players) {
         if(players[key].answer && players[key].answer == self.currentQuestion.selectedAnswer){
            correct.push({answer: players[key].answer, name: players[key].name, color: players[key].color, avatar: players[key].avatar});
         }
        else if(players[key].answer){
            wrong.push({answer: players[key].answer, name: players[key].name, color: players[key].color, avatar: players[key].avatar});
        }
    }
    return {answers:{correct:correct, wrong:wrong, total:(correct.length + wrong.length)}};
  }

  function resetAnswers(players){
    for (key in players) {
         if(players[key].answer){
            players[key].answer = {};
         }
    }
    self.ref.child('players').update(players);
  }

  function generateGameCode(){
      var finalCode = [],
          possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for(var i = 0; i < 6; i++){
        finalCode.push(possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length)));
      }
      return finalCode.join('');
  }

  function shuffleArray(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

}

app.controller('GameController', GameController)

function GameController($scope, $interval, Mobile, $state, $timeout, Game, CurrentUser){
    $scope.onMobile = Mobile;
    $scope.game = Game;
    $scope.user = CurrentUser;
  
        //Timer funktion
        if($state.is('guess-answer')) {
            //$scope.count = 7;
            if(!Mobile) var counter = $interval(timer, 1000); // kör varje sekund

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
            
            var time = $timeout(function () {
                if(!Mobile) Game.nextQuestion();
                $state.go('set-answer');
                $timeout.cancel(time);
            }, 5000);
        }


        $scope.chooseAnswer = function (answer) {
            $scope.chosenAnswer = answer;
            if(Mobile) CurrentUser.chooseAnswer(answer);
        }

        $scope.setAnswer = function (answer){
            Game.setCurrentQuestionAnswer(answer);          
        }
}

app.controller('MainController', MainController);

function MainController($scope, Error, CurrentUser, UserState, Game, Mobile){
    $scope.user = CurrentUser;
    $scope.game = Game;
    $scope.validationError = Error;
    $scope.onMobile = Mobile;
    $scope.state = UserState;
    $scope.howToPlayButton = false;

    if(!$scope.onMobile) {
      Game.createNew();
    }

    $scope.howToPlay = function(){
        $scope.howToPlayButton = !$scope.howToPlayButton;
    }

    $scope.connectToGame = function (id){
        if(!id) {Error.message = "You need to enter an ID."; return;}
        if(id.length !== 6) {Error.message = "The ID should be 6 characters long."; return;}

        id = id.toUpperCase();
        Game.connectTo(id);
    }

    $scope.setUser = function(name){
        if(!name) {Error.message = "You need to enter a name."; return;}
        Error.message = "";
        CurrentUser.setUser(name);
    }


    $scope.toggleReady = function(){
      $scope.user.ready = !$scope.user.ready;
      CurrentUser.toggleReady($scope.user.ready);
    }

}

app.controller('ResultController', ResultController)

function ResultController($scope, Game, CurrentUser, Mobile){
    $scope.game = Game;
    $scope.user = CurrentUser;
    $scope.onMobile = Mobile;
}

app.service('CurrentUser', CurrentUser);

function CurrentUser(UserState, Game, FirebaseRef, $firebaseAuth, Error, $rootScope){
    var self = this,
        colors = ['pink', 'green', 'blue', 'red', 'orange'],
        avatars = ['fish', 'cat', 'bird', 'snail'],
        color = colors[Math.floor(Math.random() * colors.length)],
        avatar = avatars[Math.floor(Math.random() * avatars.length)];


    function setDetails(name, id){
        var user = {};
        self.name = user.name = name;
        self.score = user.score = 0;
        self.ready = user.ready = false;
        self.color = user.color = color;
        self.id = user.id = id;
        self.avatar = user.avatar = avatar;
        return user;
    }




    this.toggleReady = function(status){
        this.ready = status;
        this.ref.update({ready: status});
    }

    this.setUser = function(name){
        $firebaseAuth(FirebaseRef).$authAnonymously().then(function(authData) {
            var user = setDetails(name, authData.uid);

            // Försöka göra så att man inte kan få samma avatar + färg som nån annan
            // var index = colors.indexOf(user.color);
            // colors.splice(index, 1);
            // console.log(colors);
            //
            // var index2 = avatars.indexOf(user.avatar);
            // avatars.splice(index2, 1);
            // console.log(avatars);

            console.log("Logged in as:", authData.uid);
            self.ref = Game.ref.child('players').child(authData.uid);
            self.ref.set(user);
            self.ref.onDisconnect().remove();

            UserState.state = 'registered';
        })
         .catch(function(error) {
          console.error("Authentication failed:", error);
          Error.message = "Could not register user. Please try again.";
          if(!$rootScope.$$phase) $rootScope.$apply();
        });
    }

    this.chooseAnswer = function(answer){
        self.answer = answer;
        self.ref.update({answer: answer});
    };

    this.addScore = function(points){
        self.score += points;
        self.ref.update({score: self.score});
    }

    this.ref = null;
}

app.service('Game', Game);

function Game(UserState, FirebaseRef, $firebaseAuth, $firebaseArray, Error, $state, $rootScope, Mobile, $timeout){
  var self = this,
      currentPlayerIndex = 0,
      currentQuestionIndex = 0;

  this.ref = null;
  this.inProgress = false;
  this.numOfPlayers = 0;
  this.id = '...';
  this.playerOrder = [];
  this.time = 9;

  this.createNew = function(){
    var id = generateGameCode();

    FirebaseRef.child('Games').child(id).once('value', function(snapshot) {
        if (snapshot.val() === null) addToFirebase(id);
        else self.createGame();
    });

    function addToFirebase(id){
        self.id = id;
        self.ref = FirebaseRef.child('Games').child(id);
        self.ref.set({numOfPlayers: self.numOfPlayers, inProgress: self.inProgress, time: self.time});

        $firebaseAuth(FirebaseRef).$authAnonymously().then(function(authData) {
              console.log("Logged in as:", authData.uid);
              self.ref.onDisconnect().remove();
            }, {remember: "sessionOnly"})
             .catch(function(error) {
              console.error("Authentication failed:", error);
              Error.message = "Could not create game. Please refresh the page to try again.";
              if(!$rootScope.$$phase) $rootScope.$apply();
        });

        self.ref.on('value', function(snapshot){
              var update = checkPlayers(snapshot.val().players);
              self.numOfPlayers = update.numOfPlayers;
              self.inProgress = update.inProgress;
              self.playerOrder = update.playerOrder;
              self.players = snapshot.val().players;

              self.ref.update(update);
              if(update.inProgress) {self.ref.off('value'); setupGame();}
              if(!$rootScope.$$phase) $rootScope.$apply();
        });
      }

  }; 

  this.connectTo = function(id){
    FirebaseRef.child('Games').child(id).once('value', function(snapshot) {
          var exists = (snapshot.val() !== null);
          if (!exists) {Error.message = "Game could not be found. Check your ID.";  if(!$rootScope.$$phase) {$rootScope.$apply();} return; }

          Error.message = '';
          self.ref = FirebaseRef.child('Games').child(id);
          self.id = id;
          self.inProgress = snapshot.val().inProgress;
          self.numOfPlayers = snapshot.val().numOfPlayers;
          UserState.state = 'connected';

          self.ref.on('value', function(snapshot){
              setGameParameters(snapshot.val());
              if(self.inProgress) {self.ref.off('value'); startGame();}
          });

          if(!$rootScope.$$phase) $rootScope.$apply();
    });
  }

  this.nextQuestion = function(){
      if(Mobile) return;
      /*self.questions[currentQuestionIndex] = self.currentQuestion;
      self.ref.update({questions: self.questions});*/
      resetTimer();
      resetAnswers(self.players);
      self.ref.child('currentQuestion').remove();
      self.ref.child('currentPlayer').remove();

      currentQuestionIndex++;
      currentPlayerIndex = currentPlayerIndex == (self.numOfPlayers - 1) ? 0 : currentPlayerIndex + 1;

      if(currentQuestionIndex > (self.questions.length - 1)) {
          endGame();
          return;
      }

      self.currentQuestion = self.questions[currentQuestionIndex];
      self.ref.child('currentQuestion').set(self.currentQuestion);
      setCurrentPlayer(self.playerOrder[currentPlayerIndex]);
  }

  this.setCurrentQuestionAnswer = function(answer){
    self.ref.child('currentQuestion').update({selectedAnswer: answer});
  }

  this.timerTick = function(end){
    end = end || false;
    self.time = end ? 0 : self.time - 1;
    self.ref.update({time: self.time});
  }

  function resetTimer(){
    self.time = 9;
    self.ref.update({time: 9});
  }

  function setCurrentPlayer(id){
       self.ref.child('players').once('value', function(snapshot) {
          self.currentPlayer = snapshot.val()[id];
          self.ref.update({currentPlayer: self.currentPlayer});
       });
  }

  function setupGame(){
    FirebaseRef.child('Questions').once('value', function(snapshot) {
        self.questions = shuffleArray(snapshot.val()).splice(0, 5);

        self.playerOrder = shuffleArray(self.playerOrder);

        self.currentQuestion = self.questions[currentQuestionIndex];

        setCurrentPlayer(self.playerOrder[currentPlayerIndex]);

        self.ref.update({playerOrder: self.playerOrder, questions: self.questions, currentQuestion : self.currentQuestion});

        startGame();
    });
  }

  function startGame(){
    self.ref.on('value', function(snapshot){
       setGameParameters(snapshot.val());
       if(self.time === 0 && $state.is('guess-answer')) $state.go('display-answer');
       if(!self.inProgress /*&& !self.currentPlayer && !self.currentQuestion*/){
          self.ref.child('players').off('value');
          self.ref.child('currentQuestion').off('value');
          endGame();
          $timeout(function(){
            $state.go('result');
          });
       }
       if(!$rootScope.$$phase) $rootScope.$apply();
    });
    self.ref.child('players').on('value', function(snapshot){
        if(snapshot.val() === null) return;
        var answers = correctAnswers(snapshot.val());
        self.ref.child('currentQuestion').update(answers);
    });
    self.ref.child('currentQuestion').on('value', function (snapshot){
      if(snapshot.val()) self.selectedAnswer = snapshot.val().selectedAnswer;
      if(self.selectedAnswer && $state.is('set-answer') && self.time > 0) $state.go('guess-answer');
    });
    $state.go('set-answer');
  }

  function endGame(){
    var update = {};
    self.inProgress = update.inProgress = false;
    self.currentQuestion = update.currentQuestion = {};
    self.currentPlayer = update.currentPlayer = {};
    self.ref.update(update);
  }

  function setGameParameters(snapshotVal){
    self.inProgress = snapshotVal.inProgress;
    self.players = snapshotVal.players;
    self.playerOrder = snapshotVal.playerOrder;
    self.numOfPlayers = snapshotVal.numOfPlayers;
    self.currentPlayer = snapshotVal.currentPlayer;
    self.questions = snapshotVal.questions;
    self.currentQuestion = snapshotVal.currentQuestion;
    self.time = snapshotVal.time;
  }

  function checkPlayers(players){
      var size = 0, ready = [], play = false, order = [];

      for (key in players) {
         if (players.hasOwnProperty(key)) size++;
         order.push(players[key].id);
         ready.push(players[key].ready);
      }
      if(ready.indexOf(false) === -1 && ready.length && self.numOfPlayers > 1) play = true;
      return {numOfPlayers: size, inProgress: play, playerOrder: order};
  }

  function correctAnswers(players){
    var correct = [], wrong = [];
    for (key in players) {
         if(players[key].answer && players[key].answer == self.currentQuestion.selectedAnswer){
            correct.push({answer: players[key].answer, name: players[key].name, color: players[key].color, avatar: players[key].avatar});
         }
        else if(players[key].answer){
            wrong.push({answer: players[key].answer, name: players[key].name, color: players[key].color, avatar: players[key].avatar});
        }
    }
    return {answers:{correct:correct, wrong:wrong, total:(correct.length + wrong.length)}};
  }

  function resetAnswers(players){
    for (key in players) {
         if(players[key].answer){
            players[key].answer = {};
         }
    }
    self.ref.child('players').update(players);
  }

  function generateGameCode(){
      var finalCode = [],
          possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for(var i = 0; i < 6; i++){
        finalCode.push(possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length)));
      }
      return finalCode.join('');
  }

  function shuffleArray(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

}

app.controller('GameController', GameController)

function GameController($scope, $interval, Mobile, $state, $timeout, Game, CurrentUser){
    $scope.onMobile = Mobile;
    $scope.game = Game;
    $scope.user = CurrentUser;
  
        //Timer funktion
        if($state.is('guess-answer')) {
            //$scope.count = 7;
            if(!Mobile) var counter = $interval(timer, 1000); // kör varje sekund

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
            
            var time = $timeout(function () {
                if(!Mobile) Game.nextQuestion();
                $state.go('set-answer');
                $timeout.cancel(time);
            }, 5000);
        }


        $scope.chooseAnswer = function (answer) {
            $scope.chosenAnswer = answer;
            if(Mobile) CurrentUser.chooseAnswer(answer);
        }

        $scope.setAnswer = function (answer){
            Game.setCurrentQuestionAnswer(answer);          
        }
}

app.controller('MainController', MainController);

function MainController($scope, Error, CurrentUser, UserState, Game, Mobile){
    $scope.user = CurrentUser;
    $scope.game = Game;
    $scope.validationError = Error;
    $scope.onMobile = Mobile;
    $scope.state = UserState;
    $scope.howToPlayButton = false;

    if(!$scope.onMobile) {
      Game.createNew();
    }

    $scope.howToPlay = function(){
        $scope.howToPlayButton = !$scope.howToPlayButton;
    }

    $scope.connectToGame = function (id){
        if(!id) {Error.message = "You need to enter an ID."; return;}
        if(id.length !== 6) {Error.message = "The ID should be 6 characters long."; return;}

        id = id.toUpperCase();
        Game.connectTo(id);
    }

    $scope.setUser = function(name){
        if(!name) {Error.message = "You need to enter a name."; return;}
        Error.message = "";
        CurrentUser.setUser(name);
    }


    $scope.toggleReady = function(){
      $scope.user.ready = !$scope.user.ready;
      CurrentUser.toggleReady($scope.user.ready);
    }

}

app.controller('ResultController', ResultController)

function ResultController($scope, Game, CurrentUser, Mobile){
    $scope.game = Game;
    $scope.user = CurrentUser;
    $scope.onMobile = Mobile;
}

app.service('CurrentUser', CurrentUser);

function CurrentUser(UserState, Game, FirebaseRef, $firebaseAuth, Error, $rootScope){
    var self = this,
        colors = ['pink', 'green', 'blue', 'red', 'orange'],
        avatars = ['fish', 'cat', 'bird', 'snail'],
        color = colors[Math.floor(Math.random() * colors.length)],
        avatar = avatars[Math.floor(Math.random() * avatars.length)];


    function setDetails(name, id){
        var user = {};
        self.name = user.name = name;
        self.score = user.score = 0;
        self.ready = user.ready = false;
        self.color = user.color = color;
        self.id = user.id = id;
        self.avatar = user.avatar = avatar;
        return user;
    }




    this.toggleReady = function(status){
        this.ready = status;
        this.ref.update({ready: status});
    }

    this.setUser = function(name){
        $firebaseAuth(FirebaseRef).$authAnonymously().then(function(authData) {
            var user = setDetails(name, authData.uid);

            // Försöka göra så att man inte kan få samma avatar + färg som nån annan
            // var index = colors.indexOf(user.color);
            // colors.splice(index, 1);
            // console.log(colors);
            //
            // var index2 = avatars.indexOf(user.avatar);
            // avatars.splice(index2, 1);
            // console.log(avatars);

            console.log("Logged in as:", authData.uid);
            self.ref = Game.ref.child('players').child(authData.uid);
            self.ref.set(user);
            self.ref.onDisconnect().remove();

            UserState.state = 'registered';
        })
         .catch(function(error) {
          console.error("Authentication failed:", error);
          Error.message = "Could not register user. Please try again.";
          if(!$rootScope.$$phase) $rootScope.$apply();
        });
    }

    this.chooseAnswer = function(answer){
        self.answer = answer;
        self.ref.update({answer: answer});
    };

    this.addScore = function(points){
        self.score += points;
        self.ref.update({score: self.score});
    }

    this.ref = null;
}

app.service('Game', Game);

function Game(UserState, FirebaseRef, $firebaseAuth, $firebaseArray, Error, $state, $rootScope, Mobile, $timeout){
  var self = this,
      currentPlayerIndex = 0,
      currentQuestionIndex = 0;

  this.ref = null;
  this.inProgress = false;
  this.numOfPlayers = 0;
  this.id = '...';
  this.playerOrder = [];
  this.time = 9;

  this.createNew = function(){
    var id = generateGameCode();

    FirebaseRef.child('Games').child(id).once('value', function(snapshot) {
        if (snapshot.val() === null) addToFirebase(id);
        else self.createGame();
    });

    function addToFirebase(id){
        self.id = id;
        self.ref = FirebaseRef.child('Games').child(id);
        self.ref.set({numOfPlayers: self.numOfPlayers, inProgress: self.inProgress, time: self.time});

        $firebaseAuth(FirebaseRef).$authAnonymously().then(function(authData) {
              console.log("Logged in as:", authData.uid);
              self.ref.onDisconnect().remove();
            }, {remember: "sessionOnly"})
             .catch(function(error) {
              console.error("Authentication failed:", error);
              Error.message = "Could not create game. Please refresh the page to try again.";
              if(!$rootScope.$$phase) $rootScope.$apply();
        });

        self.ref.on('value', function(snapshot){
              var update = checkPlayers(snapshot.val().players);
              self.numOfPlayers = update.numOfPlayers;
              self.inProgress = update.inProgress;
              self.playerOrder = update.playerOrder;
              self.players = snapshot.val().players;

              self.ref.update(update);
              if(update.inProgress) {self.ref.off('value'); setupGame();}
              if(!$rootScope.$$phase) $rootScope.$apply();
        });
      }

  }; 

  this.connectTo = function(id){
    FirebaseRef.child('Games').child(id).once('value', function(snapshot) {
          var exists = (snapshot.val() !== null);
          if (!exists) {Error.message = "Game could not be found. Check your ID.";  if(!$rootScope.$$phase) {$rootScope.$apply();} return; }

          Error.message = '';
          self.ref = FirebaseRef.child('Games').child(id);
          self.id = id;
          self.inProgress = snapshot.val().inProgress;
          self.numOfPlayers = snapshot.val().numOfPlayers;
          UserState.state = 'connected';

          self.ref.on('value', function(snapshot){
              setGameParameters(snapshot.val());
              if(self.inProgress) {self.ref.off('value'); startGame();}
          });

          if(!$rootScope.$$phase) $rootScope.$apply();
    });
  }

  this.nextQuestion = function(){
      if(Mobile) return;
      /*self.questions[currentQuestionIndex] = self.currentQuestion;
      self.ref.update({questions: self.questions});*/
      resetTimer();
      resetAnswers(self.players);
      self.ref.child('currentQuestion').remove();
      self.ref.child('currentPlayer').remove();

      currentQuestionIndex++;
      currentPlayerIndex = currentPlayerIndex == (self.numOfPlayers - 1) ? 0 : currentPlayerIndex + 1;

      if(currentQuestionIndex > (self.questions.length - 1)) {
          endGame();
          return;
      }

      self.currentQuestion = self.questions[currentQuestionIndex];
      self.ref.child('currentQuestion').set(self.currentQuestion);
      setCurrentPlayer(self.playerOrder[currentPlayerIndex]);
  }

  this.setCurrentQuestionAnswer = function(answer){
    self.ref.child('currentQuestion').update({selectedAnswer: answer});
  }

  this.timerTick = function(end){
    end = end || false;
    self.time = end ? 0 : self.time - 1;
    self.ref.update({time: self.time});
  }

  function resetTimer(){
    self.time = 9;
    self.ref.update({time: 9});
  }

  function setCurrentPlayer(id){
       self.ref.child('players').once('value', function(snapshot) {
          self.currentPlayer = snapshot.val()[id];
          self.ref.update({currentPlayer: self.currentPlayer});
       });
  }

  function setupGame(){
    FirebaseRef.child('Questions').once('value', function(snapshot) {
        self.questions = shuffleArray(snapshot.val()).splice(0, 5);

        self.playerOrder = shuffleArray(self.playerOrder);

        self.currentQuestion = self.questions[currentQuestionIndex];

        setCurrentPlayer(self.playerOrder[currentPlayerIndex]);

        self.ref.update({playerOrder: self.playerOrder, questions: self.questions, currentQuestion : self.currentQuestion});

        startGame();
    });
  }

  function startGame(){
    self.ref.on('value', function(snapshot){
       setGameParameters(snapshot.val());
       if(self.time === 0 && $state.is('guess-answer')) $state.go('display-answer');
       if(!self.inProgress /*&& !self.currentPlayer && !self.currentQuestion*/){
          self.ref.child('players').off('value');
          self.ref.child('currentQuestion').off('value');
          endGame();
          $timeout(function(){
            $state.go('result');
          });
       }
       if(!$rootScope.$$phase) $rootScope.$apply();
    });
    self.ref.child('players').on('value', function(snapshot){
        if(snapshot.val() === null) return;
        var answers = correctAnswers(snapshot.val());
        self.ref.child('currentQuestion').update(answers);
    });
    self.ref.child('currentQuestion').on('value', function (snapshot){
      if(snapshot.val()) self.selectedAnswer = snapshot.val().selectedAnswer;
      if(self.selectedAnswer && $state.is('set-answer') && self.time > 0) $state.go('guess-answer');
    });
    $state.go('set-answer');
  }

  function endGame(){
    var update = {};
    self.inProgress = update.inProgress = false;
    self.currentQuestion = update.currentQuestion = {};
    self.currentPlayer = update.currentPlayer = {};
    self.ref.update(update);
  }

  function setGameParameters(snapshotVal){
    self.inProgress = snapshotVal.inProgress;
    self.players = snapshotVal.players;
    self.playerOrder = snapshotVal.playerOrder;
    self.numOfPlayers = snapshotVal.numOfPlayers;
    self.currentPlayer = snapshotVal.currentPlayer;
    self.questions = snapshotVal.questions;
    self.currentQuestion = snapshotVal.currentQuestion;
    self.time = snapshotVal.time;
  }

  function checkPlayers(players){
      var size = 0, ready = [], play = false, order = [];

      for (key in players) {
         if (players.hasOwnProperty(key)) size++;
         order.push(players[key].id);
         ready.push(players[key].ready);
      }
      if(ready.indexOf(false) === -1 && ready.length && self.numOfPlayers > 1) play = true;
      return {numOfPlayers: size, inProgress: play, playerOrder: order};
  }

  function correctAnswers(players){
    var correct = [], wrong = [];
    for (key in players) {
         if(players[key].answer && players[key].answer == self.currentQuestion.selectedAnswer){
            correct.push({answer: players[key].answer, name: players[key].name, color: players[key].color, avatar: players[key].avatar});
         }
        else if(players[key].answer){
            wrong.push({answer: players[key].answer, name: players[key].name, color: players[key].color, avatar: players[key].avatar});
        }
    }
    return {answers:{correct:correct, wrong:wrong, total:(correct.length + wrong.length)}};
  }

  function resetAnswers(players){
    for (key in players) {
         if(players[key].answer){
            players[key].answer = {};
         }
    }
    self.ref.child('players').update(players);
  }

  function generateGameCode(){
      var finalCode = [],
          possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for(var i = 0; i < 6; i++){
        finalCode.push(possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length)));
      }
      return finalCode.join('');
  }

  function shuffleArray(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

}
