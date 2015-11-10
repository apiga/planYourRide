angular.module('planYourRide.services', [])

.factory('Directions', function ($http) {
  var getDirections = function () {
    return $http({
      method: 'GET',
      url: '/test'
    })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function (err) {
      return err;
    });
  };

  var postDemand = function (tripData) {
    return $http({
      method: 'POST',
      url: '/trip'
    })
    .then(function (resp) {
      return resp.data;
    })
    .catch(function (err) {
      return err;
    });
  };

  return {
    getDirections: getDirections
  };
});