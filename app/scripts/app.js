(function() {
  'use strict';
  var app;

  app = angular.module('github-widget', []);

  app.config(function($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

  app.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when(null, {
      templateUrl: 'github-widget-template.html',
      controller: 'MainCtrl'
    });
  });

  app.factory('UserRepos', function($http) {
    var baseUrl = 'https://api.github.com';

    var UserRepos = function(data) {
      return angular.extend(this, data);
    };
    UserRepos.get = function(username) {
      return $http.get(baseUrl + '/users/' + username + '/repos').then(function(response) {
        return new UserRepos(response.data);
      });
    };
    return UserRepos;
  });

  app.controller('MainCtrl', function($scope, UserRepos) {
    var userRepos = UserRepos.get('toshb');
    $scope.data = userRepos;
  });

}).call(this);
