(function () {

  'use strict';

  angular
    .module('app.translator')
    .controller('translatorCtrl', translatorCtrl);

  /* @ngInject */
  function translatorCtrl( $state) {
    var vm = this;

    vm.goToItemPage = goToItemPage;

    function goToItemPage($event) {
      $event.stopPropagation();
      $state.go("main.itempage1");
    }
  }
}());
