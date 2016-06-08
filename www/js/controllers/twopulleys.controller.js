(function() {
    'use strict';

    angular.module('starter')
        .controller('DashCtrl', DashCtrl);

    DashCtrl.$inject = ['_', '$scope', '$state', '$ionicHistory', '$ionicViewSwitcher', 'TwoPullyCalculator', 'localStorageService', '$window'];

    function DashCtrl(_, $scope, $state, $ionicHistory, $ionicViewSwitcher, TwoPullyCalculator, localStorageService, $window) {
        var currentStateName = $ionicHistory.currentStateName();
        var currentPage;


        $scope.$on("$ionicView.enter", function(scopes, states) {
            currentPage = _.findIndex(TwoPullyCalculator.pagesArr(), function(o) {
                return o == currentStateName;
            });

            $scope.measuringUnits = localStorageService.get('isMeasure');

            $scope.dev_height = document.getElementsByTagName('ion-content')[0].clientHeight;
            $scope.dev_width = document.getElementsByTagName('ion-content')[0].clientWidth;

            console.log('dev_height: ', $scope.dev_height);
            console.log('dev_width: ', $scope.dev_width);

            if (currentStateName == 'app.twopulleys-02') {
                $scope.pulleyCenter = 0;
                $scope.smallDiameter = 0;
                $scope.largeDiameter = 0;
                $scope.beltLength = 0;
            }

        });

        if (currentStateName == 'app.twopulleys-02') {
            $scope.pulleyCenter = TwoPullyCalculator.getPulleyCenterDistance();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'app.twopulleys-03') {
            $scope.largeDiameter = TwoPullyCalculator.getLargePulleyDiameter();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'app.twopulleys-04') {
            $scope.smallDiameter = TwoPullyCalculator.getSmallPulleyDiameter();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'app.twopulleys-05') {
            $scope.pulleyCenter = TwoPullyCalculator.calculatePulleyCenter(TwoPullyCalculator.getPulleyCenterDistance());
            $scope.largeDiameter = TwoPullyCalculator.calculatePulleyDiameter(TwoPullyCalculator.getLargePulleyDiameter());
            $scope.smallDiameter = TwoPullyCalculator.calculatePulleyDiameter(TwoPullyCalculator.getSmallPulleyDiameter());

            $scope.beltLength = TwoPullyCalculator.calculateBeltLength($scope.pulleyCenter, $scope.largeDiameter, $scope.smallDiameter);

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

        $scope.calculateResult = function() {
            var pulleyCenter = TwoPullyCalculator.calculatePulleyCenter($scope.pulleyCenter);
            var largeDiameter = TwoPullyCalculator.calculatePulleyDiameter($scope.largeDiameter);
            var smallDiameter = TwoPullyCalculator.calculatePulleyDiameter($scope.smallDiameter);

            $scope.beltLength = TwoPullyCalculator.calculateBeltLength(pulleyCenter, largeDiameter, smallDiameter);

            console.log('beltLength: ', $scope.beltLength);
        };

        $scope.nextPage = function() {
            if ($ionicHistory.currentStateName() !== TwoPullyCalculator.pagesArr()[3]) {
                if (currentStateName == 'app.twopulleys-02') {
                    TwoPullyCalculator.setPulleyCenterDistance($scope.pulleyCenter);
                } else if (currentStateName == 'app.twopulleys-03') {
                    TwoPullyCalculator.setLargePulleyDiameter($scope.largeDiameter);
                } else if (currentStateName == 'app.twopulleys-04') {
                    TwoPullyCalculator.setSmallPulleyDiameter($scope.smallDiameter);
                }

                $state.go(TwoPullyCalculator.pagesArr()[currentPage + 1]);
            } else {
                /*$ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $ionicViewSwitcher.nextDirection('back');

                TwoPullyCalculator.setPulleyCenterDistance(0);
                TwoPullyCalculator.setLargePulleyDiameter(0);
                TwoPullyCalculator.setSmallPulleyDiameter(0);

                $state.go('twopulleys-02');*/

                $scope.calculateResult();
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

                $state.go('app.tab');
            }
        };
    }
})();
