import $ from 'jquery'

function LikeController($scope){
  console.log("well hello there!");

  $scope.like = 0;
  $scope.name = 'likes'
  $scope.toggle = false;

  $scope.addLike = function () {
    if ($scope.toggle === false){
      $scope.like += 1;
      $scope.name = 'likes'
      if ($scope.like === 1){
        $scope.name = 'like'
      }
    }
    else if ($scope.toggle === true){
      $scope.like -= 1;
    }
  }

  $scope.switch = function () {
    if ($scope.toggle === false){
      $scope.toggle = true
    }
    else if ($scope.toggle === true){
      $scope.toggle = false
    }
  }
}

export default LikeController;
