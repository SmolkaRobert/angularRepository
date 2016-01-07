angular.module('app.books').controller('BookModalController', function($scope, $modal, 	$modalInstance, bookService) {
	'use strict';
	
	$scope.bookTitle = '';
	$scope.authors = [{firstName:'', lastName:''}];
	
	$scope.saveBook = function() {
		bookService.saveBook({title: $scope.bookTitle, authors: convertAuthorsToString()});
		$modalInstance.close();
	};

	$scope.prepareAdditionalAuthor = function() {
		var additionalAuthorModal = $modal.open({
			templateUrl : 'books/html/author-modal.html',
			controller : 'AuthorModalController',
			size : 'lg',
			scope: $scope
		});
	};
	
	var convertAuthorsToString = function(){
		var authorsString = '';
		$scope.authors.forEach(function(author) {
			authorsString += author.firstName + ' ' + author.lastName + ', ';
		})
		return authorsString;
	};
});