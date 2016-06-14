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
                        'app.twopulleys-02',
                        'app.twopulleys-03',
                        'app.twopulleys-04',
                        'app.twopulleys-05'
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
                    var measuringUnits = localStorageService.get('isMeasure');
                    console.log('measuringUnits: ',measuringUnits);

                    if (measuringUnits == 'standard') {
                        return parseFloat((center * 2)).toFixed(4);
                    } else {
                        return parseFloat(((center * 2) * 25.4)).toFixed(4);
                    }
                },
                calculatePulleyDiameter: function(diameter) {
                    var measuringUnits = localStorageService.get('isMeasure');
                    if (measuringUnits == 'standard') {
                        return parseFloat(((Math.PI * diameter) / 2)).toFixed(4);
                    } else {
                        return parseFloat(((diameter * 25.4) * Math.PI) / 2).toFixed(4);
                    }
                },
                calculateBeltLength: function(center, large, small) {
                    var measuringUnits = localStorageService.get('isMeasure');

                    console.log(':======================: ',measuringUnits);
                    console.log('center: ', center);
                    console.log('large: ', large);
                    console.log('small: ', small);

                    center = parseFloat(center);
                    large = parseFloat(large);
                    small = parseFloat(small);

                    var sumTotal = (center + large + small);

                    console.log('allTotal: ', sumTotal);
                   
                    if (measuringUnits == 'standard') {
                        console.log('BeltLength: ', Math.max(0, parseFloat((sumTotal - 2))).toFixed(3));
                        console.log(':======================:');
                        return Math.max(0, parseFloat((sumTotal - 2))).toFixed(3);
                    } else {
                        console.log('BeltLength: ', Math.max(0, parseFloat((sumTotal - 50.8) / 10)).toFixed(3));
                        console.log(':======================:');
                        return Math.max(0, parseFloat((sumTotal - 50.8) / 10)).toFixed(3);
                    }
                }
            };
        }])
        .factory('ThreePullyCalculator', ['localStorageService', function(localStorageService) {
            return {
                pagesArr: function() {
                    return [
                        'app.threepulleys-02',
                        'app.threepulleys-03',
                        'app.threepulleys-04',
                        'app.threepulleys-05',
                        'app.threepulleys-06',
                        'app.threepulleys-07',
                        'app.threepulleys-08',
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
                    var measuringUnits = localStorageService.get('isMeasure');
                    if (measuringUnits == 'standard') {
                        return parseFloat((center * 2)).toFixed(4);
                    } else {
                        return parseFloat(((center * 2) * 25.4)).toFixed(4);
                    }
                },
                calculatePulleyDiameter: function(diameter) {
                    var measuringUnits = localStorageService.get('isMeasure');
                    if (measuringUnits == 'standard') {
                        return parseFloat(((Math.PI * diameter) / 2)).toFixed(4);
                    } else {
                        return parseFloat(((diameter * 25.4) * Math.PI) / 2).toFixed(4);
                    }
                },
                calculateBeltLength: function(center1, center2, center3, large, medium, small) {
                    var measuringUnits = localStorageService.get('isMeasure');
                    console.log(':======================:');
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

                    var sumCenterTotal = (center1 + center2 + center3) + (large + medium + small);

                    console.log('allTotal: ', sumCenterTotal);
                    console.log(':======================:');

                    if (measuringUnits == 'standard') {
                        return Math.max(0, parseFloat((sumCenterTotal - 2))).toFixed(3);
                    } else {
                        return Math.max(0, parseFloat((sumCenterTotal - 50.8) / 10)).toFixed(3);
                    }
                }
            };
        }]);

})();
