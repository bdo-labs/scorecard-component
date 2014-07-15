
/**
 * Module dependencies.
 */
var angular = require('angular');
var services = require('services');

/**
 * Expose scorecard.
 */
var scorecard = module.exports = angular.module('scorecard', ['services']);

require('./scorecardModule.js');
require('./scorecardService.js');