angular.module('scorecardView').directive('scorecardView',
	['$compile', 'scorecardService', 'aggregationService',
	function ($compile, scorecardService, aggregationService) {

		return {
			scope: {
				scorecardType: '=',
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

				attributes.$observe('scorecardId', function (id) {
					var scorecardId = id;

					scope.scorecard = scorecardService.get(
						isNaN(scorecardId) ?
						scorecardId : Number(scorecardId)
						);

					var indicatorWatchers = [];
					scope.$watchCollection(scope.scorecard.indicators,
							function () {
								indicatorWatchers.forEach(function (watcher) {
									watcher();
								});

								indicatorWatchers = [];

								scope.scorecard.indicators.forEach(function (indicator) {
									indicatorWatchers.push(scope.$watch(function(){return indicator.category;}, function () {
										scope.indicatorGroups = scorecardService
											.getIndicatorGroups(scope.scorecard.indicators);
									}));
								});
					});
				});

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