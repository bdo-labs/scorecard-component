//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
module.exports = angular.module('scorecard').service('scorecardService', function () {

	this.getScorecard = function () {
		return scorecardObj;
	};

});


var scorecardObj = {
	"categories": [
		{
			"id": 1,
			"name": "Økonomi",
			"tasks": 20,
			"positiveIndicators": 2,
			"totalIndicators": 4,
			"status": "good",
			"trend": "fa-arrow-up",
			"indicators": [
				{ "id": "1", "name": "Omsetning", "tasks": 9, "target": "11.000,-", "value": "10.262,-", "percentage": 100, "low": 10, "mid": 50, "high": 90, "status": "good", "trend": "fa-arrow-up" },
				{ "id": "2", "name": "Resultatmargin", "tasks": 4, "target": "25%", "value": "27,5%", "percentage": 100, "low": 10, "mid": 50, "high": 90, "status": "good", "trend": "fa-arrow-down" },
				{ "id": "3", "name": "Timepris", "tasks": 3, "target": "1250,-", "value": "1131,-", "percentage": 40, "low": 10, "mid": 50, "high": 90, "status": "warning", "trend": "fa-minus" },
				{ "id": "4", "name": "Faktureringsgrad", "tasks": 4, "target": "85%", "value": "82%", "percentage": 95, "low": 10, "mid": 50, "high": 90, "status": "danger", "trend": "fa-minus" }
			]
		},
		{
			"id": 2,
			"name": "HR",
			"tasks": 11,
			"positiveIndicators": 1,
			"totalIndicators": 3,
			"status": "warning",
			"trend": "fa-arrow-down",
			"indicators": [
				{ "id": "1", "name": "Antall arrangement", "tasks": 3, "target": "5", "value": "3", "percentage": 100, "low": 10, "mid": 50, "high": 90, "status": "warning", "trend": "fa-arrow-up" },
				{ "id": "2", "name": "Omtale i studentmedier", "tasks": 4, "target": "5", "value": "5", "percentage": 100, "low": 10, "mid": 50, "high": 90, "status": "good", "trend": "fa-minus" },
				{ "id": "3", "name": "Diplomoppgaver", "tasks": 4, "target": "5", "value": "0", "percentage": 40, "low": 10, "mid": 50, "high": 90, "status": "danger", "trend": "fa-minus" }
			]
		},
		{
			"id": 3,
			"name": "Salg",
			"tasks": 25,
			"positiveIndicators": 3,
			"totalIndicators": 4,
			"status": "good",
			"trend": "fa-minus",
			"indicators": [
				{ "id": "1", "name": "Kundetilfredshet", "tasks": 11, "target": "5", "value": "4,8", "percentage": 100, "low": 10, "mid": 50, "high": 90, "status": "good", "trend": "fa-arrow-up" },
				{ "id": "2", "name": "Antall treff på nett", "tasks": 4, "target": "7500", "value": "5250", "percentage": 100, "low": 10, "mid": 50, "high": 90, "status": "good", "trend": "fa-arrow-up" },
				{ "id": "3", "name": "Medieomtale", "tasks": 6, "target": "15", "value": "4", "percentage": 40, "low": 10, "mid": 50, "high": 90, "status": "warning", "trend": "fa-minus" },
				{ "id": "4", "name": "Aktivitet på Facebook", "tasks": 4, "target": "500", "value": "426", "percentage": 40, "low": 10, "mid": 50, "high": 90, "status": "good", "trend": "fa-arrow-down" }
			]
		},
		{
			"id": 4,
			"name": "Interne prosesser",
			"tasks": 30,
			"positiveIndicators": 3,
			"totalIndicators": 4,
			"status": "good",
			"trend": "fa-minus",
			"indicators": [
				{ "id": "1", "name": "Medarbeidertilfredshet", "tasks": 12, "target": "5,1", "value": "5,1", "percentage": 100, "low": 10, "mid": 50, "high": 90, "status": "good", "trend": "fa-minus" },
				{ "id": "2", "name": "Friskhetsgrad", "tasks": 7, "target": "95%", "value": "87%", "percentage": 100, "low": 10, "mid": 50, "high": 90, "status": "good", "trend": "fa-arrow-up" },
				{ "id": "3", "name": "Medarbeidersamtaler", "tasks": 3, "target": "90%", "value": "95%", "percentage": 40, "low": 10, "mid": 50, "high": 90, "status": "warning", "trend": "fa-arrow-down" },
				{ "id": "4", "name": "FoU andel av omsetning", "tasks": 8, "target": "30%", "value": "25%", "percentage": 40, "low": 10, "mid": 50, "high": 90, "status": "good", "trend": "fa-minus" }
			]
		}
	]
};