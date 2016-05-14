(function() {
    'use strict';

    angular.module('starter')
        .factory('_', ['$window', function($window) {
            return $window._;
        }])
        .factory('TwoPullyCalculator', ['localStorageService', function(localStorageService) {
            return {
                pagesArr: function() {
                    return [
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
                    console.log('center: ', center);
                    console.log('large: ', large);
                    console.log('small: ', small);

                    center = parseFloat(center);
                    large = parseFloat(large);
                    small = parseFloat(small);

                    var sumTotal = (center + large + small);

                    return Math.max(0, parseFloat((sumTotal - 2))).toFixed(4);
                }
            };
        }])
        .factory('ThreePullyCalculator', ['localStorageService', function(localStorageService) {
            return {
                pagesArr: function() {
                    return [
                        'threepulleys-02',
                        'threepulleys-03',
                        'threepulleys-04',
                        'threepulleys-05',
                        'threepulleys-06',
                        'threepulleys-07',
                        'threepulleys-08',
                    ];
                },
                setPulleyCenterDistance1: function(value) {
                    localStorageService.set('pulleyCenter1', value);
                },
                setPulleyCenterDistance2: function(value) {
                    localStorageService.set('pulleyCenter2', value);
                },
                setPulleyCenterDistance3: function(value) {
                    localStorageService.set('pulleyCenter3', value);
                },
                getPulleyCenterDistance1: function() {
                    return localStorageService.get('pulleyCenter1') || 0;
                },
                getPulleyCenterDistance2: function() {
                    return localStorageService.get('pulleyCenter2') || 0;
                },
                getPulleyCenterDistance3: function() {
                    return localStorageService.get('pulleyCenter3') || 0;
                },
                setSmallPulleyDiameter: function(value) {
                    localStorageService.set('smallDiameter', value);
                },
                getSmallPulleyDiameter: function() {
                    return localStorageService.get('smallDiameter') || 0;
                },
                setMediumPulleyDiameter: function(value) {
                    localStorageService.set('mediumDiameter', value);
                },
                getMediumPulleyDiameter: function() {
                    return localStorageService.get('mediumDiameter') || 0;
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
                calculateBeltLength: function(center1, center2, center3, large, medium, small) {
                    console.log('center1: ', center1);
                    console.log('center2: ', center2);
                    console.log('center3: ', center3);

                    console.log('large: ', large);
                    console.log('medium: ', medium);
                    console.log('small: ', small);

                    center1 = parseFloat(center1);
                    center2 = parseFloat(center2);
                    center3 = parseFloat(center3);

                    large = parseFloat(large);
                    medium = parseFloat(medium);
                    small = parseFloat(small);

                    var sumCenterTotal = (center1 + center2 + center3);
                    var sumTotal = (large + medium + small);

                    return Math.max(0, parseFloat(((sumCenterTotal + sumTotal) - 2))).toFixed(4);
                }
            };
        }]);

})();
