(function () {

  'use strict';

  angular
    .module('app.settings')
    .controller('settingsCtrl', settingsCtrl);

  /* @ngInject */
  function settingsCtrl( $state) {
    var vm = this;

    vm.goTo = goTo;

    function goTo($event) {
      $event.stopPropagation();
      $state.go("main.itempage1");
    }
  }
}());
