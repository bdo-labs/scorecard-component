
/**
 * Module dependencies.
 */
require('angular');
require('services');
require('filters');

/**
 * Expose scorecard.
 */
module.exports = angular.module('scorecard', ['services', 'filters']);

require('./scorecardModule.js');