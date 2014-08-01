angular.module('scorecardView').directive('scorecardView',
	['$compile', 'scorecardService', 'aggregationService', 'indicatorService',
	function ($compile, scorecardService, aggregationService, indicatorService) {

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

				scope.getStatus = function(indicator) {
					if (indicator.measurements.length === 0 || indicator.goals.length === 0) return;
					return indicatorService.getStatus(
						indicator, scope.getCurrent(indicator.measurements), scope.getCurrent(indicator.goals)
					);
				}


				scope.scorecard = scorecardService.get(scope.scorecardId);

				scope.$watchCollection('scorecard.categories', function (categories) {
					for (var i = 0; i < categories.length; i++) {
						var category = categories[i];
						var trend = 0;
						for (var j = 0; j < category.indicators.length; j++) {
							trend += category.indicators[j].trend;
						}
						trend /= category.indicators.length;
						category.trend = trend;
					}
				})

				scope.$watch(scope.scorecardType, function () {
					var tmpl;

					if (scope.scorecardType === 'overview') {
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