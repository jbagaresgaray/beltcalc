(function() {
    'use strict';

    angular.module('starter')
        .controller('ChatsCtrl', ChatsCtrl);


    ChatsCtrl.$inject = ['_', '$scope', '$state', '$ionicHistory', '$ionicViewSwitcher', 'ThreePullyCalculator'];

    function ChatsCtrl(_, $scope, $state, $ionicHistory, $ionicViewSwitcher, ThreePullyCalculator) {

        var currentStateName = $ionicHistory.currentStateName();
        var currentPage = _.findIndex(ThreePullyCalculator.pagesArr(), function(o) {
            return o == currentStateName;
        });

        $scope.pulleyCenter1 = 0;
        $scope.pulleyCenter2 = 0;
        $scope.pulleyCenter3 = 0;

        $scope.smallDiameter = 0;
        $scope.mediumDiameter = 0;
        $scope.largeDiameter = 0;

        $scope.beltLength = 0;


        if (currentStateName == 'threepulleys-01') {
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'threepulleys-02') {
            $scope.pulleyCenter1 = ThreePullyCalculator.getPulleyCenterDistance1();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'threepulleys-03') {
            $scope.pulleyCenter2 = ThreePullyCalculator.getPulleyCenterDistance2();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'threepulleys-04') {
            $scope.pulleyCenter3 = ThreePullyCalculator.getPulleyCenterDistance3();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'threepulleys-05') {
            $scope.smallDiameter = ThreePullyCalculator.getSmallPulleyDiameter();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'threepulleys-06') {
            $scope.smallDiameter = ThreePullyCalculator.getSmallPulleyDiameter();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'threepulleys-07') {
            $scope.smallDiameter = ThreePullyCalculator.getSmallPulleyDiameter();
            $scope.nextTitle = 'Next';
        } else if (currentStateName == 'threepulleys-08') {
            $scope.pulleyCenter = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance());
            $scope.largeDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getLargePulleyDiameter());
            $scope.smallDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getSmallPulleyDiameter());

            $scope.beltLength = ThreePullyCalculator.calculateBeltLength($scope.pulleyCenter, $scope.largeDiameter, $scope.smallDiameter);

            $scope.nextTitle = 'Re-Calculate';
        }


        $scope.pulleyCenterChange1 = function(newValue) {
            $scope.pulleyCenter1 = newValue;
            console.log('pulleyCenter1: ', $scope.pulleyCenter1);
        };

        $scope.pulleyCenterChange2 = function(newValue) {
            $scope.pulleyCenter2 = newValue;
        };

        $scope.pulleyCenterChange2 = function(newValue) {
            $scope.pulleyCenter2 = newValue;
        };

        $scope.smallDiameterChange = function(newValue) {
            $scope.smallDiameter = newValue;
        };

        $scope.mediumDiameterChange = function(newValue) {
            $scope.mediumDiameter = newValue;
        };

        $scope.largeDiameterChange = function(newValue) {
            $scope.largeDiameter = newValue;
        };




        $scope.nextPage = function() {
            if ($ionicHistory.currentStateName() !== ThreePullyCalculator.pagesArr()[7]) {

                if (currentStateName == 'threepulleys-02') {
                    ThreePullyCalculator.setPulleyCenterDistance1($scope.pulleyCenter1);
                } else if (currentStateName == 'threepulleys-03') {
                    ThreePullyCalculator.setPulleyCenterDistance2($scope.pulleyCenter2);
                } else if (currentStateName == 'threepulleys-04') {
                    ThreePullyCalculator.setPulleyCenterDistance3($scope.pulleyCenter3);
                } else if (currentStateName == 'threepulleys-05') {
                    ThreePullyCalculator.setLargePulleyDiameter($scope.largeDiameter);
                } else if (currentStateName == 'threepulleys-06') {
                    ThreePullyCalculator.setMediumPulleyDiameter($scope.mediumDiameter);
                } else if (currentStateName == 'threepulleys-07') {
                    ThreePullyCalculator.setSmallPulleyDiameter($scope.smallDiameter);
                }

                $state.go(ThreePullyCalculator.pagesArr()[currentPage + 1]);
            } else {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $ionicViewSwitcher.nextDirection('back');
                $state.go('threepulleys-01');
            }
        };

        $scope.prevPage = function() {
            if ($ionicHistory.currentStateName() !== ThreePullyCalculator.pagesArr()[0]) {
                $state.go(ThreePullyCalculator.pagesArr()[currentPage - 1]);
            } else if ($ionicHistory.currentStateName() == ThreePullyCalculator.pagesArr()[0]) {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $ionicViewSwitcher.nextDirection('back');
                $state.go('tab');
            }
        };
    }

})();
