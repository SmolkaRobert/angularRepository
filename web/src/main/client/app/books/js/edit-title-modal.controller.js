angular.module('app.books').controller('EditTitleModalController', function($scope, $modalInstance, bookService, bookToEdit) {
	'use strict';
	$scope.updatedBook = angular.copy(bookToEdit);
	
	$scope.saveTitle = function() {
		bookService.updateBook($scope.updatedBook)
		$modalInstance.close();
	};
});
