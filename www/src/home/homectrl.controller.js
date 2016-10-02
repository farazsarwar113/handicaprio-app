(function () {

  'use strict';

  angular
    .module('app.home')
    .controller('homeCtrl', homeCtrl);

  /* @ngInject */
  function homeCtrl( $state,$scope,$timeout,ionicMaterialMotion,ionicMaterialInk) {
    var vm = this;

    vm.goToItemPage = goToItemPage;

    vm.isExpanded = true;

    //ionicMaterialMotion.ripple();

    // ionicMaterialMotion.fadeSlideInRight({
    //   selector: '.animate-fade-slide-in .row'
    // });
    ionicMaterialInk.displayEffect();

    
  /*  $scope.CompletedEvent = function (scope) {
        console.log("Completed Event called");
    };

    $scope.ExitEvent = function (scope) {
        console.log("Exit Event called");
    };

    $scope.ChangeEvent = function (targetElement, scope) {
        console.log("Change Event called");
        console.log(targetElement);  //The target element
        console.log(this);  //The IntroJS object
    };

    $scope.BeforeChangeEvent = function (targetElement, scope) {
        console.log("Before Change Event called");
        console.log(targetElement);
    };

    $scope.AfterChangeEvent = function (targetElement, scope) {
        console.log("After Change Event called");
        console.log(targetElement);
    };

    $scope.IntroOptions = {
        steps:[
        {
            element: document.querySelector('#step1'),
            intro: "This is the first tooltip."
        },
        {
            element: document.querySelectorAll('#step2')[0],
            intro: "<strong>You</strong> can also <em>include</em> HTML",
            position: 'bottom'
        },
        {
            element: '#step3',
            intro: 'More features, more fun.',
            position: 'bottom'
        },
        {
            element: '#step4',
            intro: "Another step.",
            position: 'bottom'
        },
        {
            element: '#step5',
            intro: 'Get it, use it.'
        }
        ],
        showStepNumbers: false,
        exitOnOverlayClick: true,
        exitOnEsc:true,
        nextLabel: '<strong>NEXT!</strong>',
        prevLabel: '<span style="color:green">Previous</span>',
        skipLabel: 'Exit',
        doneLabel: 'Thanks'
    };

    $scope.ShouldAutoStart = true; */
    

   // $timeout(function(){
   //     introJs().start()
   // },2000);
      
    function goToItemPage($event) {
      $event.stopPropagation();
      $state.go("main.itempage1");
    }
  }
}());
