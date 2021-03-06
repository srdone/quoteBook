var app = angular.module('quoteBook');

app.factory('dataService', function ($cookieStore) {

	var myQuotes;

	var cookieData = $cookieStore.get('myQuotes');

	var save = function () {
		console.log('saving...');
		$cookieStore.put('myQuotes', myQuotes);
		console.log('saved:');
		console.log($cookieStore.get('myQuotes'));
	};

	console.log(cookieData);
	if (cookieData) {
		var myQuotes = cookieData;
	} else {
		var myQuotes = [
	    	{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
		    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
		    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
		    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
		    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
		    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
		    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	  	];
	  	save()
  	}

  	var _getData = function () {
  		return myQuotes;
  	};

  	var _addData = function (obj) {
  		if (obj.hasOwnProperty('text') && obj.hasOwnProperty('author')) {
  			myQuotes.push(obj);
  		}
  		save();
  	};

  	var _removeData = function (text) {
  		for (var i = 0; i < myQuotes.length; i++) {
  			if (myQuotes[i].text === text) {
  				myQuotes.splice(i, 1);
  				i--;
  			}
  		};
  		save();
  	};

  	return {
  		'getData': _getData,
  		'addData': _addData,
  		'removeData': _removeData
  	};
});