
/**
 * Module dependencies.
 */
var angular = require('angular');
var services = require('services');
var filters = require('filters');

/**
 * Expose scorecard.
 */
var scorecard = module.exports = angular.module('scorecard', ['services', 'filters']);

require('./scorecardModule.js');