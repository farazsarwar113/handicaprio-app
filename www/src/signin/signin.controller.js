(function () {

  'use strict';

  angular
    .module('app.signin')
    .controller('signInCtrl', signInCtrl);

  /* @ngInject */
  function signInCtrl( $state, $ionicHistory ,dataService) {
    var vm = this;
    vm.signIn = signIn;

    function signIn(){
    	$state.go('home');
    }
  }
}());
