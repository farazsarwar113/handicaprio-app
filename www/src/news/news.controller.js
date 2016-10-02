(function () {

  'use strict';

  angular
    .module('app.news')
    .controller('newsCtrl', newsCtrl);

  /* @ngInject */
  function newsCtrl( $state, $ionicHistory ,ionicMaterialInk) {
    var vm = this;
    
    vm.goTo = goTo;

    function goTo(){
      $state.go('home');
    }
    ionicMaterialInk.displayEffect();
  }
}());
