app.controller('ResultController', ResultController)

function ResultController($scope, Game, CurrentUser, Mobile){
    $scope.game = Game;
    $scope.user = CurrentUser;
    $scope.onMobile = Mobile;
}
