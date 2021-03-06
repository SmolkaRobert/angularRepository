angular.module('app.books').factory('bookService', function (bookRestService) {
    'use strict';

    return {
        search: function (titlePrefix) {
            return bookRestService.search(titlePrefix);
        },
        deleteBook: function (bookId) {
            return bookRestService.deleteBook(bookId);
        },
        saveBook: function(bookTo) {
        	return bookRestService.saveBook(bookTo);
        },
        updateBook: function(bookTo) {
        	return bookRestService.updateBook(bookTo);
        }
    };
});
