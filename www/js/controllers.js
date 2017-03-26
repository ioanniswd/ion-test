angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MyCtrl', function($scope, $http, MyFactory, ParamTest, GetTest, PostTest) {
  $scope.myVar = "Lavender";
  $scope.msg = MyFactory;
  $scope.paramTest = ParamTest("John");
  GetTest(1,2).success(function(response){
    $scope.getData = response;
    console.log("Get data: ", $scope.getData);
  });
  PostTest(1,2).success(function(response) {
    $scope.postData = response;
    console.log("Post data: ", $scope.postData);
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
