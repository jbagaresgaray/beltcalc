(function() {
    'use strict';

    angular.module('starter')
        .controller('DashCalcCtrl', DashCalcCtrl);

    DashCalcCtrl.$inject = ['_', '$scope', '$state', '$ionicHistory', '$ionicViewSwitcher', 'TwoPullyCalculator'];

    function DashCalcCtrl(_, $scope, $state, $ionicHistory, $ionicViewSwitcher, TwoPullyCalculator) {
        $scope.pulleyCenter = 0;
        $scope.smallDiameter = 0;
        $scope.largeDiameter = 0;
        $scope.beltLength = 0;


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

        $scope.prevPage = function() {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $ionicViewSwitcher.nextDirection('back');

            TwoPullyCalculator.setPulleyCenterDistance(0);
            TwoPullyCalculator.setLargePulleyDiameter(0);
            TwoPullyCalculator.setSmallPulleyDiameter(0);

            $state.go('tab');
        };
    }
})();
