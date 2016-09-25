(function(){

  'use strict';

  angular
    .module('app.tabs', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider, $urlRouterProvider){
      
      $stateProvider
    
  .state('onBoarding', {
    url: '/onBoarding_pg1',
    templateUrl: 'src/onBoarding/onBoarding.html',
    controller: 'onBoardingCtrl as vm'
  })

  .state('tabs.home', {
    url: '/home',
    views: {
      'home-view': {
        templateUrl: 'src/home/home.html',
        controller: 'homeCtrl as vm'
      },
      'side-menu':{
          templateUrl: 'src/sidemenu/sidemenu.html'
      }
    }
  })

  .state('tabs.academy', {
    url: '/academy',
    views: {
      'academy-view': {
        templateUrl: 'src/academy/academy.html',
        controller: 'academyCtrl as vm'
      }
    }
  })

  .state('tabs.settings', {
    url: '/settings',
    views: {
      'settings-view': {
        templateUrl: 'src/settings/settings.html',
        controller: 'settingsCtrl as vm'
      }
    }
  })
      
  .state('tabs.translator', {
    url: '/translator',
    views: {
      'translator-view': {
        templateUrl: 'src/translator/translator.html',
        controller: 'translatorCtrl as vm'
      }
    }
  })
  .state('tabs.signTranslator', {
    url: '/sign-translator',
    views: {
      'translator-view': {
        templateUrl: 'src/translator/sign-translator/sign-translator.html',
        controller: 'signTranslatorCtrl as vm'
      }
    }
  })
  .state('tabs', {
    url: '/main',
    templateUrl: 'src/tabs/tabs.html',
    abstract:true,
    controller: 'tabCtrl as vm'
  })


$urlRouterProvider.otherwise('/onBoarding_pg1')
      
  }


}());
