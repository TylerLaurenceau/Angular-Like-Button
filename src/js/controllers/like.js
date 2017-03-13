function LikeController($scope){
  console.log("well hello there!");

  $scope.like = 0;

  $scope.addLike = function () {
    $scope.like += 1;
  }

  $scope.removeLike = function () {
    $scope.like -= 1;
  }
}

export default LikeController;
