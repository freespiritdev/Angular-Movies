'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */

//not working quite right
angular.module('clientApp')
  app.controller('MoviesCtrl', function ($scope, Movie) {
    $scope.movies = Movie.getList().$object;
});


/*angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope) {
    $scope.movies = [
    {
      title: 'Guardians of the Galaxy',
      url: 'htttp://youtube.com'
    },
    {
      title: 'Guardians of the Galaxy',
      url: 'htttp://youtube.com'
    }
  ];
});
*/

