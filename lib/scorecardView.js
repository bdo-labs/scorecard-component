angular.module('scorecardView').directive('scorecardView', ['$compile', 'scorecardService',
	function ($compile, scorecardService) {

		return {
			scope: {
				scorecardType: '=',
				scorecardId: '='
			},

			link: function (scope, element, attributes) {

				scope.scorecard = scorecardService.get(scope.scorecardId);

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