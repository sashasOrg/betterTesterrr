var app = angular.module('apitest', [])

app.controller('mainCtrl', function($scope, mainService) {
  $scope.getDaetailedObject = function() {
    mainService.getDetailedObject().then(function(response) {
      console.log(response);
    })
  }
  $scope.detailedObject();
})

app.service('mainService', function($http) {
  this.getDetailedObject = function() {
    return $http.get('http://finance.yahoo.com/webservice/v1/symbols/ABM/quote?format=json&view=detail');
  }
})
