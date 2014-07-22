describe('scorecard', function(){

	var MockService = {
		get: function () {
			return {

			};
		}
	}

	beforeEach(module('scorecard'));

	var el,
		scope;

	beforeEach(module(function ($provide) {
		$provide.value('scorecardService', MockService);
	}))

	beforeEach(inject(function ($rootScope, $compile){
		scope = $rootScope.$new();
	}))


	function compileDirective(tpl){
		if (!tpl) tpl = '<div scorecard-module scorecard-type="\'summary\'" scorecard-id="2"></div>';

		inject(function ($compile) {
			el = $compile(tpl)(scope)[0];
		})
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
			expect(el.firstElementChild.classList.contains('scorecard-summary')).toBe(true);
		});

		it('should note the scorecardId', function () {
			expect(angular.element(el).isolateScope().scorecardId).toEqual(2);
		});
	});
});