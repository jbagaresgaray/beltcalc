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

        $scope.largeDiameter = 0;
        $scope.mediumDiameter = 0;
        $scope.smallDiameter = 0;

        $scope.beltLength = 0;


        if (currentStateName == 'threepulleys-02') {
            $scope.pulleyCenter1 = ThreePullyCalculator.getPulleyCenterDistance1();
            $scope.nextTitle = 'Next';

        } else if (currentStateName == 'threepulleys-03') {
            $scope.pulleyCenter2 = ThreePullyCalculator.getPulleyCenterDistance2();
            $scope.nextTitle = 'Next';

        } else if (currentStateName == 'threepulleys-04') {
            $scope.pulleyCenter3 = ThreePullyCalculator.getPulleyCenterDistance3();
            $scope.nextTitle = 'Next';

        } else if (currentStateName == 'threepulleys-05') {
            $scope.largeDiameter = ThreePullyCalculator.getLargePulleyDiameter();
            $scope.nextTitle = 'Next';

        } else if (currentStateName == 'threepulleys-06') {
            $scope.mediumDiameter = ThreePullyCalculator.getMediumPulleyDiameter();
            $scope.nextTitle = 'Next';

        } else if (currentStateName == 'threepulleys-07') {
            $scope.smallDiameter = ThreePullyCalculator.getSmallPulleyDiameter();
            $scope.nextTitle = 'Next';

        } else if (currentStateName == 'threepulleys-08') {
            $scope.pulleyCenter1 = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance1());
            $scope.pulleyCenter2 = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance2());
            $scope.pulleyCenter3 = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance3());

            $scope.largeDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getLargePulleyDiameter());
            $scope.mediumDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getMediumPulleyDiameter());
            $scope.smallDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getSmallPulleyDiameter());

            $scope.beltLength = ThreePullyCalculator.calculateBeltLength($scope.pulleyCenter1, $scope.pulleyCenter2, $scope.pulleyCenter3,
                $scope.largeDiameter, $scope.mediumDiameter, $scope.smallDiameter);

            $scope.nextTitle = 'Re-Calculate';
        }


        $scope.pulleyCenterChange1 = function(newValue) {
            $scope.pulleyCenter1 = newValue;
        };

        $scope.pulleyCenterChange2 = function(newValue) {
            $scope.pulleyCenter2 = newValue;
        };

        $scope.pulleyCenterChange3 = function(newValue) {
            $scope.pulleyCenter3 = newValue;
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


        $scope.nextPage = function() {
            if ($ionicHistory.currentStateName() !== ThreePullyCalculator.pagesArr()[6]) {

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
                // $ionicHistory.nextViewOptions({
                //     disableBack: true
                // });
                // $ionicViewSwitcher.nextDirection('back');

                // ThreePullyCalculator.setPulleyCenterDistance1(0);
                // ThreePullyCalculator.setPulleyCenterDistance2(0);
                // ThreePullyCalculator.setPulleyCenterDistance3(0);
                // ThreePullyCalculator.setLargePulleyDiameter(0);
                // ThreePullyCalculator.setMediumPulleyDiameter(0);
                // ThreePullyCalculator.setSmallPulleyDiameter(0);

                // $state.go('threepulleys-02');

                $scope.calculateResult();
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

                ThreePullyCalculator.setPulleyCenterDistance1(0);
                ThreePullyCalculator.setPulleyCenterDistance2(0);
                ThreePullyCalculator.setPulleyCenterDistance3(0);
                ThreePullyCalculator.setLargePulleyDiameter(0);
                ThreePullyCalculator.setMediumPulleyDiameter(0);
                ThreePullyCalculator.setSmallPulleyDiameter(0);

                $state.go('tab');
            }
        };
    }

})();
