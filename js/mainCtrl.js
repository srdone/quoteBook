var app = angular.module('quoteBook');

app.controller('mainCtrl', function ($scope, dataService) {
	$scope.quotes = dataService.getData();

	$scope.status = {
		filter: true,
		add: false,
		remove: false
	}

	$scope.filterQuote = {
		text: '',
		author: ''
	};

	$scope.addQuote = {
		text: '',
		author: ''
	};

	$scope.removeQuote = {
		text: '',
		author: ''
	};

	$scope.removeData = function (text) {
		dataService.removeData(text);
		$scope.removeQuote = {
			text: '',
			author: ''
		};
	};

	$scope.addData = function (obj) {
		dataService.addData(obj);
		$scope.addQuote = {
			text: '',
			author: ''
		};
	};

	$scope.toggleAdd = function () {
		$scope.status.filter = false;
		$scope.status.add = true;
		$scope.status.remove = false;
	};

	$scope.toggleRemove = function () {
		$scope.status.filter = false;
		$scope.status.add = false;
		$scope.status.remove = true;
	};

	$scope.toggleFilter = function () {
		$scope.status.filter = true;
		$scope.status.add = false;
		$scope.status.remove = false;
	};
});