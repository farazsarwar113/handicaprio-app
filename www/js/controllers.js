angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('academyCtrl', function($scope) {

})
   
.controller('settingsCtrl', function($scope) {

})
      
.controller('onBoardingCtrl', function($scope,$state) {
    $scope.goTo = function(state){
        $state.go(state);
    }

})
 