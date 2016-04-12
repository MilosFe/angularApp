(function (){
     'use strict';
     
     angular.module('app')
                    .factory('GitApi', GitApi);
     

     function GitApi($http){
         
          var services = {
              getUser: getUser
         }
         return services;
          
          function getUser(username){
               return $http.get('https://api.github.com/users/' + username)
                    .then(getUserComplete)
                    .catch(getUserFailed);
          }
          
          function getUserComplete(response){
               return response.data;
          }
          
          function getUserFailed(error){
             return error.data;
          }
          
     }
     
})()