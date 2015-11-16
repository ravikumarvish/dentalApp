'use strict'

var home = angular.module('dentalApp.home',['ui.router']);

home.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    controller: 'homectrl',
    templateUrl: 'home/home.html'
  });
});

home.controller('homectrl',function homectrl($scope) {

console.log("this: "+this);

$scope.hello = function() {
	console.log("Hello Home");
}

});


