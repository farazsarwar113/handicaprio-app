(function () {

  'use strict';

  angular
    .module('app.signTranslator')
    .controller('signTranslatorCtrl', signTranslatorCtrl);

  /* @ngInject */
  function signTranslatorCtrl( $state, $ionicHistory ,dataService) {
    var vm = this;
    
    vm.showVideo = false;

    vm.goTo = goTo;
    vm.closeVideo = closeVideo;
    vm.ok = ok;
    
    

    window.onload = function () {
      var myvid = document.getElementById('myvideo');
      myvid.addEventListener('ended', function(e) {
        // get the active source and the next video source.
        // I set it so if there's no next, it loops to the first one
        var activesource = document.querySelector("#myvideo source.active");
        var nextsource = document.querySelector("#myvideo source.active + source") || document.querySelector("#myvideo source:first-child");
        
        // deactivate current source, and activate next one
        activesource.className = "";
        nextsource.className = "active";
        
        // update the video source and play
        myvid.src = nextsource.src;
        myvid.play();
      });
    };

    

    function goTo($event) {
      $event.stopPropagation();
      $ionicHistory.goBack();
    }
      
    function ok($event){
      vm.sentence = {
        word: vm.sentence.word
      };
      console.log(vm.sentence);

      dataService.translator.translate(vm.sentence).then(function(res){
        console.log(res.data);
        if(res.data.warning){
          
          vm.warnings = res.data.warning;
        }
        vm.tokens = res.data.tokens;
        vm.pos = res.data.pos;
        vm.videos = [];
        for(var i=0; i< vm.tokens.length; i++){
          console.log(vm.tokens[i]);
          
          vm.videos.push('https://s3-eu-west-1.amazonaws.com/handicaprio/videos/'+vm.tokens[i]+'.mp4');

        }
        vm.showVideo = true;
        console.log(vm.videos);

      },function(err){
        console.log(err);
      });
    }
      
    function closeVideo($event){
        vm.showVideo = false;
    }
  }
}());
