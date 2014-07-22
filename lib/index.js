
/**
 * Module dependencies.
 */
require('angular');
require('services');
require('filters');

/**
 * Expose scorecardView.
 */
module.exports = angular.module('scorecardView', ['services', 'filters']);

require('./scorecardView.js');