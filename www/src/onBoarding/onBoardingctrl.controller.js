(function () {

  'use strict';

  angular
    .module('app.onBoarding')
    .controller('onBoardingCtrl', onBoardingCtrl);

  /* @ngInject */
  function onBoardingCtrl( $state) {
    var vm = this;

    vm.goToItemPage = goToItemPage;

    function goToItemPage($event) {
      $event.stopPropagation();
      $state.go("home");
    }
  }
}());
