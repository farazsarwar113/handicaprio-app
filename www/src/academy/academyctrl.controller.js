(function () {

  'use strict';

  angular
    .module('app.academy')
    .controller('academyCtrl', academyCtrl);

  /* @ngInject */
  function academyCtrl( $state,$ionicModal,$scope,$timeout,$window,$ionicScrollDelegate) {
    var vm = this;

    vm.goToItemPage = goToItemPage;
    vm.openModal = openModal;
    vm.closeModal = closeModal;
    vm.dragDown = dragDown;
    vm.resetPosition = resetPosition;
      
    $ionicModal.fromTemplateUrl('src/academy/modal/academy-modal.html', {
      scope: $scope,
      animation: 'slide-in-up',
      
    }).then(function(modal) {
      vm.modal = modal;
      vm.modalDragStart = { active: true, value: 0 }
    });
/*
    $scope.$on('$destroy', function() {
      vm.popover.remove();
    });
*/
      
    function openModal($event) {
      vm.modal.show($event);
    }
    function closeModal($event) {
      vm.modal.hide($event);
    }

    function goToItemPage($event) {
      $event.stopPropagation();
      $state.go("main.itempage1");
    }
    
      
    function dragDown (event) {
        console.log(vm.modalDragStart);
        if (vm.modalDragStart.active) {
            vm.modalDragStart = { active: false, value: event.gesture.center.pageY };
            
        }
        var element = angular.element('#modal'),
            windowHeight = $window.innerHeight,
            y = event.gesture.center.pageY - vm.modalDragStart.value;
        if (y >= 0 && y <= windowHeight) {
            element.css({
                webkitTransform: 'translate3d(0,' + y + 'px,0)',
                transform: 'translate3d(0,' + y + 'px,0)'
            });
            
        }
        $ionicScrollDelegate.resize();
    }
        console.log(vm.dragDown);
    function resetPosition (event) {
        vm.modalDragStart = { active: true, value: 0 }
        var element = angular.element('#modal'),
            y = event.gesture.center.pageY,
            windowHeight = $window.innerHeight;
        if (y >= (windowHeight * 0.5)) {
            element.css({
                transform: 'translate3d(0,' + windowHeight + 'px,0)'
            });
            $timeout(function () {
                vm.closeModal().then(function () {
                    element.removeAttr('style');
                });
            }, 100);
        }
        else {
            $timeout(function () {
                element.removeAttr('style');
            }, 100);
        }

     
    }
  }
}());
