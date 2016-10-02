// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic',
                       'ionic-material',
                       'ionic.ion.headerShrink',
                       'angular-intro',
                       'webicon',
                       'restangular',
                       'app.tabs',
                       'app.onBoarding',
                       'app.home',
                       'app.translator',
                       'app.academy',
                       'app.settings',
                       'app.signTranslator',
                       'app.signin',
                       'app.news'
                       ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
//.constant('SERVER_PATH',"http://localhost:3000")
.constant('SERVER_PATH',"http://192.168.137.138:3000")
.config(['RestangularProvider','SERVER_PATH', function (RestangularProvider, SERVER_PATH) {
    RestangularProvider.setBaseUrl(SERVER_PATH+'/api');
  }])

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])
.config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
});
