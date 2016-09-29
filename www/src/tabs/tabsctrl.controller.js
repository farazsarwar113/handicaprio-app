(function () {

  'use strict';

  angular
    .module('app.tabs')
    .controller('tabCtrl', tabCtrl);

  /* @ngInject */
  function tabCtrl( $state) {
    var vm = this;

    vm.goToPage = goToPage;
    vm.currentPath = $state.current.name;
    console.log(vm.currentPath);

    function goToPage($event,state) {
      $event.stopPropagation();
      $state.go(state);
    }
  }
}());
