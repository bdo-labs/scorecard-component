module.exports = angular.module('scorecard').directive('scorecardModule', ['$templateCache', '$compile', '$http', 'scorecardService',
	function ($templateCache, $compile, $http, scorecardService) {

		return {
			scope: {
				scorecardType: '=',
				departmentId: '='
			},

			link: function (scope, element, attributes) {
				scope.categories = scorecardService.getScorecard(scope.departmentId).categories;
				
				scope.$watch(scope.scorecardType, function () {
					var tmpl;

					if (scope.scorecardType === 'summary') {
						element.addClass('medium');
						tmpl = require('./partials/scorecard-summary.html');
					} else if (scope.scorecardType === 'overview') {
						element.addClass('small fun-fact-box');
						tmpl = require('./partials/scorecard-overview.html');
					} else {
						element.addClass('xlarge');
						tmpl = require('./partials/scorecard-full.html');
					}
					
					var elements = $compile(tmpl)(scope);
					element.empty().append(elements);
				});

				
			}
		}
	}
]);