(function() {
    'use strict';

    angular.module('starter')
        .controller('ChatsCalcCtrl', ChatsCalcCtrl);


    ChatsCalcCtrl.$inject = ['_', '$scope', '$state', '$ionicHistory', '$ionicViewSwitcher', 'ThreePullyCalculator'];

    function ChatsCalcCtrl(_, $scope, $state, $ionicHistory, $ionicViewSwitcher, ThreePullyCalculator) {

        $scope.pulleyCenter1 = 0;
        $scope.pulleyCenter2 = 0;
        $scope.pulleyCenter3 = 0;

        $scope.largeDiameter = 0;
        $scope.mediumDiameter = 0;
        $scope.smallDiameter = 0;

        $scope.beltLength = 0;

        $scope.showCalculate = ($state.params.recal == 'true') ? true : false;

        $scope.pulleyCenterChange1 = function(newValue) {
            $scope.pulleyCenter1 = newValue;

            if(!$scope.showCalculate){
                $scope.calculateResult();
            }
        };

        $scope.pulleyCenterChange2 = function(newValue) {
            $scope.pulleyCenter2 = newValue;

            if(!$scope.showCalculate){
                $scope.calculateResult();
            }
        };

        $scope.pulleyCenterChange3 = function(newValue) {
            $scope.pulleyCenter3 = newValue;

            if(!$scope.showCalculate){
                $scope.calculateResult();
            }
        };

        $scope.smallDiameterChange = function(newValue) {
            $scope.smallDiameter = newValue;

            if(!$scope.showCalculate){
                $scope.calculateResult();
            }
        };

        $scope.mediumDiameterChange = function(newValue) {
            $scope.mediumDiameter = newValue;

            if(!$scope.showCalculate){
                $scope.calculateResult();
            }
        };

        $scope.largeDiameterChange = function(newValue) {
            $scope.largeDiameter = newValue;

            if(!$scope.showCalculate){
                $scope.calculateResult();
            }
        };

        $scope.calculateResult = function() {

            var pulleyCenter1 = ThreePullyCalculator.calculatePulleyCenter($scope.pulleyCenter1);
            var pulleyCenter2 = ThreePullyCalculator.calculatePulleyCenter($scope.pulleyCenter2);
            var pulleyCenter3 = ThreePullyCalculator.calculatePulleyCenter($scope.pulleyCenter3);

            var largeDiameter = ThreePullyCalculator.calculatePulleyDiameter($scope.largeDiameter);
            var mediumDiameter = ThreePullyCalculator.calculatePulleyDiameter($scope.mediumDiameter);
            var smallDiameter = ThreePullyCalculator.calculatePulleyDiameter($scope.smallDiameter);

            $scope.beltLength = ThreePullyCalculator.calculateBeltLength(pulleyCenter1, pulleyCenter2, pulleyCenter3,
                largeDiameter, mediumDiameter, smallDiameter);

            console.log('beltLength: ', $scope.beltLength);
        };

        $scope.prevPage = function() {
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $ionicViewSwitcher.nextDirection('back');

            ThreePullyCalculator.setPulleyCenterDistance1(0);
            ThreePullyCalculator.setPulleyCenterDistance2(0);
            ThreePullyCalculator.setPulleyCenterDistance3(0);
            ThreePullyCalculator.setLargePulleyDiameter(0);
            ThreePullyCalculator.setMediumPulleyDiameter(0);
            ThreePullyCalculator.setSmallPulleyDiameter(0);

            $state.go('app.tab');
        };
    }

})();
