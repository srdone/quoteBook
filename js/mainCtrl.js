var app = angular.module('quoteBook');

app.controller('mainCtrl', function ($scope, dataService) {
	$scope.quotes = dataService.getData();

	$scope.status = {
		filter: true,
		add: false,
		remove: false
	}

	var clearModel = function () {
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
	}

	clearModel();

	$scope.removeData = function (text) {
		dataService.removeData(text);
		clearModel();
	};

	$scope.addData = function (obj) {
		dataService.addData(obj);
		clearModel();
	};

	$scope.toggleAdd = function () {
		$scope.status.filter = false;
		$scope.status.add = true;
		$scope.status.remove = false;
		clearModel();
	};

	$scope.toggleRemove = function () {
		$scope.status.filter = false;
		$scope.status.add = false;
		$scope.status.remove = true;
		clearModel();
	};

	$scope.toggleFilter = function () {
		$scope.status.filter = true;
		$scope.status.add = false;
		$scope.status.remove = false;
		clearModel();
	};
});