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

  .state('home', {
    url: '/home',
    templateUrl: 'src/home/home_page.html',
    controller: 'homeCtrl as vm'
    
  })

  .state('signin', {
    url: '/signin',
    templateUrl: 'src/signin/signin.html',
    controller: 'signInCtrl as vm'
    
  })

  .state('news', {
    url: '/news',
    templateUrl: 'src/news/news.html',
    controller: 'newsCtrl as vm'
    
  })

  .state('tabs.academy', {
    url: '/academy',
    views: {
      'academy-view': {
        templateUrl: 'src/academy/academy.html',
        controller: 'academyCtrl as vm'
      },
      'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-assertive"><i class="icon ion-search"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
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
