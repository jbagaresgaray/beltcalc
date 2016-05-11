'use strict';

angular.module('starter')
    .factory('_', ['$window', function($window) {
        return $window._;
    }])
    .factory('TwoPullyCalculator', function(localStorageService) {
        return {
            pagesArr: function() {
                return [
                    'twopulleys-01',
                    'twopulleys-02',
                    'twopulleys-03',
                    'twopulleys-04',
                    'twopulleys-05'
                ];
            },
            setPulleyCenterDistance: function(value) {
                localStorageService.set('pulleyCenter', value);
            },
            getPulleyCenterDistance: function() {
                return localStorageService.get('pulleyCenter') || 0;
            },
            setSmallPulleyDiameter: function(value) {
                localStorageService.set('smallDiameter', value);
            },
            getSmallPulleyDiameter: function() {
                return localStorageService.get('smallDiameter') || 0;
            },
            setLargePulleyDiameter: function(value) {
                localStorageService.set('largeDiameter', value);
            },
            getLargePulleyDiameter: function() {
                return localStorageService.get('largeDiameter') || 0;
            },
            calculatePulleyCenter: function(center) {
                return parseFloat((center * 2)).toFixed(4);
            },
            calculatePulleyDiameter: function(diameter) {
                return parseFloat(((Math.PI * diameter) / 2)).toFixed(4);
            },
            calculateBeltLength: function(center, large, small) {
                center = parseFloat(center);
                large = parseFloat(large);
                small = parseFloat(small);

                var sumTotal = (center + large + small);

                return parseFloat((sumTotal - .250)).toFixed(4);
            }
        };
    });
