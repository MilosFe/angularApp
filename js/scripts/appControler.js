(function () {
     'use strict';
     angular
          .module('app')
          .controller('main', main);

     function main(GitApi) {
          var vm = this;
          vm.title = "Hello";
          vm.logUsername = function(username){
               GitApi.getUser(username)
               .then(function(data){
               vm.users = data;
               return vm.users;
          })   
          }
          vm.users = [];
          
     }
})();
