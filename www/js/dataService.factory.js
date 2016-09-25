"use strict";
angular.module('app').factory('dataService', function (Restangular, $rootScope, $http) {

  
  var translator = {
    translate: function(data){
      return Restangular.one('translation').post('',data);
    }
  }

  return {
    translator: translator
  };


});
