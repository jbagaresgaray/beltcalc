'use strict';

angular.module('starter')
    .controller('DashCtrl', function(_, $scope, $state, $ionicHistory, $ionicViewSwitcher, TwoPullyCalculator) {
        var currentStateName = $ionicHistory.currentStateName();
        var currentPage = _.findIndex(TwoPullyCalculator.pagesArr(), function(o) {
            return o == currentStateName;
        });

        $scope.pulleyCenter = 0;
        $scope.smallDiameter = 0;
        $scope.largeDiameter = 0;
        $scope.beltLength = 0;

        if (currentStateName == 'twopulleys-01') {
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'twopulleys-02') {
            $scope.pulleyCenter = TwoPullyCalculator.getPulleyCenterDistance();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'twopulleys-03') {
            $scope.largeDiameter = TwoPullyCalculator.getLargePulleyDiameter();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'twopulleys-04') {
            $scope.smallDiameter = TwoPullyCalculator.getSmallPulleyDiameter();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'twopulleys-05') {
            $scope.pulleyCenter = TwoPullyCalculator.calculatePulleyCenter(TwoPullyCalculator.getPulleyCenterDistance());
            $scope.largeDiameter = TwoPullyCalculator.calculatePulleyDiameter(TwoPullyCalculator.getLargePulleyDiameter());
            $scope.smallDiameter = TwoPullyCalculator.calculatePulleyDiameter(TwoPullyCalculator.getSmallPulleyDiameter());

            $scope.beltLength = TwoPullyCalculator.calculateBeltLength($scope.pulleyCenter,$scope.largeDiameter,$scope.smallDiameter);

            $scope.nextTitle = 'Re-Calculate';
        }

        $scope.pulleyCenterChange = function(newValue) {
            $scope.pulleyCenter = newValue;
        };

        $scope.smallDiameterChange = function(newValue) {
            $scope.smallDiameter = newValue;
        };

        $scope.largeDiameterChange = function(newValue) {
            $scope.largeDiameter = newValue;
        };

        $scope.nextPage = function() {
            if ($ionicHistory.currentStateName() !== TwoPullyCalculator.pagesArr()[4]) {
                if (currentStateName == 'twopulleys-02') {
                    TwoPullyCalculator.setPulleyCenterDistance($scope.pulleyCenter);
                } else if (currentStateName == 'twopulleys-03') {
                    TwoPullyCalculator.setLargePulleyDiameter($scope.largeDiameter);
                } else if (currentStateName == 'twopulleys-04') {
                    TwoPullyCalculator.setSmallPulleyDiameter($scope.smallDiameter);
                }

                $state.go(TwoPullyCalculator.pagesArr()[currentPage + 1]);
            } else {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $ionicViewSwitcher.nextDirection('back');

                TwoPullyCalculator.setPulleyCenterDistance(0);
                TwoPullyCalculator.setLargePulleyDiameter(0);
                TwoPullyCalculator.setSmallPulleyDiameter(0);

                $state.go('twopulleys-01');
            }
        };

        $scope.prevPage = function() {
            if ($ionicHistory.currentStateName() !== TwoPullyCalculator.pagesArr()[0]) {
                $state.go(TwoPullyCalculator.pagesArr()[currentPage - 1]);
            } else if ($ionicHistory.currentStateName() == TwoPullyCalculator.pagesArr()[0]) {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $ionicViewSwitcher.nextDirection('back');

                TwoPullyCalculator.setPulleyCenterDistance(0);
                TwoPullyCalculator.setLargePulleyDiameter(0);
                TwoPullyCalculator.setSmallPulleyDiameter(0);

                $state.go('tab');
            }
        };
    });
