angular.module('app.books').controller('AuthorModalController', function($scope, $modalInstance) {
	'use strict';
	$scope.additionalAuthor = {firstName: '', lastName: ''}
	
	$scope.addAuthor = function() {
		$scope.authors.push($scope.additionalAuthor);
		$modalInstance.close();
	};
});
