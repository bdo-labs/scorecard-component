describe('scorecardView', function(){

	var mockData = {
		indicators: []
	},
	deferred,
	el,
	scope;

	var MockService = {
		get: function () {
			return mockData;
		}
	}

	beforeEach(function () {
		module('scorecardView');
		module(function ($provide) {
			$provide.value('scorecardService', MockService);
		});
		inject(function ($rootScope, $compile){
			scope = $rootScope.$new();
		});
		inject(function($q) {
			deferred = $q.defer();
			mockData.$promise = deferred.promise;
		});
	});

	function compileDirective(tpl){
		if (!tpl) tpl = '<div scorecard-view scorecard-type="\'full\'" scorecard-id="2"></div>';

		inject(function ($compile) {
			el = $compile(tpl)(scope)[0];
		})
		scope.$digest();
		deferred.resolve(mockData);
		scope.$digest();
	}


	describe('initialisation', function () {
		beforeEach(function () {
			compileDirective();
		});

		it('should have a child with scorecard class', function () {
			expect(el.firstElementChild.classList.contains('scorecard')).toBe(true);
		});

		it('should choose the right scorecard type', function () {
			expect(el.firstElementChild.classList.contains('scorecard-full')).toBe(true);
		});
	});
});