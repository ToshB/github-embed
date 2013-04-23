(function() {
  'use strict';
  var appDev;

  appDev = angular.module('github-widget-dev', ['github-widget', 'ngMockE2E']);

  appDev.run(function($httpBackend) {
    $httpBackend.whenGET(/.*/).respond({
      data: 'hello'
    });
  });

}).call(this);
