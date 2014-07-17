
/**
 * Module dependencies.
 */
require('angular');
require('services');
require('filters');

/**
 * Expose scorecard.
 */
var scorecard = module.exports = angular.module('scorecard', ['services', 'filters']);

require('./scorecardModule.js');