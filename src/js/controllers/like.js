import $ from 'jquery'

function LikeController($scope){
  console.log("well hello there!");

  $scope.like = 0;
  $scope.name = 'likes'

  $scope.addLike = function () {
    $scope.like += 1;
    if ($scope.like === 1){
      $scope.name = 'like'
    }
    else if ($scope.like != 1){
      $scope.name = 'likes'
    }
  }

  $scope.removeLike = function () {
    $scope.like -= 1;
  }
}

export default LikeController;
