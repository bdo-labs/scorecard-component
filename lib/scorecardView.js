angular.module('scorecardView').directive('scorecardView',
	['$compile', 'scorecardService', 'aggregationService',
	function ($compile, scorecardService, aggregationService) {

		return {
			scope: {
				scorecardType: '=',
				scorecardId: '=',
				date: '=?'
			},

			link: function (scope, element, attributes) {
				if (!scope.date) {
					scope.date = new Date(Date.now());
				}
				scope.getCurrent = function(list) {
					var next = aggregationService.getNext(list, scope.date, 'period');

					if (next) {
						return next;
					}
					return aggregationService.getPrevious(list, scope.date, 'period');
				}


				scope.scorecard = scorecardService.get(scope.scorecardId);

				scope.$watch(scope.scorecardType, function () {
					var tmpl;

					if (scope.scorecardType === 'overview') {
						element.addClass('small breaking-box');
						tmpl = require('./partials/scorecard-overview.html');
					} else {
						element.addClass('large');
						tmpl = require('./partials/scorecard-full.html');
					}

					var elements = $compile(tmpl)(scope);
					element.empty().append(elements);
				});
			}
		}
	}
]);