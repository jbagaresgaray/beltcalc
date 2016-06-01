(function() {
    'use strict';

    angular.module('starter')
        .controller('DashCalcCtrl', DashCalcCtrl);

    DashCalcCtrl.$inject = ['_', '$scope', '$state', '$ionicHistory', '$ionicViewSwitcher', 'TwoPullyCalculator', 'localStorageService'];

    function DashCalcCtrl(_, $scope, $state, $ionicHistory, $ionicViewSwitcher, TwoPullyCalculator, localStorageService) {

        $scope.$on("$ionicView.enter", function(scopes, states) {
            $scope.pulleyCenter = 0;
            $scope.smallDiameter = 0;
            $scope.largeDiameter = 0;
            $scope.beltLength = 0;

            $scope.measuringUnits = localStorageService.get('isMeasure');
            $scope.showCalculate = ($state.params.recal == 'true') ? true : false;
        });

        $scope.pulleyCenterChange = function(newValue) {
            $scope.pulleyCenter = newValue;

            if (!$scope.showCalculate) {
                $scope.calculateResult();
            }
        };

        $scope.smallDiameterChange = function(newValue) {
            $scope.smallDiameter = newValue;

            if (!$scope.showCalculate) {
                $scope.calculateResult();
            }
        };

        $scope.largeDiameterChange = function(newValue) {
            $scope.largeDiameter = newValue;

            if (!$scope.showCalculate) {
                $scope.calculateResult();
            }
        };

        $scope.calculateResult = function() {
            var pulleyCenter = TwoPullyCalculator.calculatePulleyCenter($scope.pulleyCenter);
            var largeDiameter = TwoPullyCalculator.calculatePulleyDiameter($scope.largeDiameter);
            var smallDiameter = TwoPullyCalculator.calculatePulleyDiameter($scope.smallDiameter);

            $scope.beltLength = TwoPullyCalculator.calculateBeltLength(pulleyCenter, largeDiameter, smallDiameter);

            console.log('beltLength: ', $scope.beltLength);
        };

        $scope.prevPage = function() {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $ionicViewSwitcher.nextDirection('back');

            TwoPullyCalculator.setPulleyCenterDistance(0);
            TwoPullyCalculator.setLargePulleyDiameter(0);
            TwoPullyCalculator.setSmallPulleyDiameter(0);

            $state.go('app.tab');
        };
    }
})();
