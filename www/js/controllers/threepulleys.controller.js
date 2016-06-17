(function() {
    'use strict';

    angular.module('starter')
        .controller('ChatsCtrl', ChatsCtrl);


    ChatsCtrl.$inject = ['_', '$scope', '$state', '$ionicHistory', '$ionicViewSwitcher', 'ThreePullyCalculator', 'localStorageService'];

    function ChatsCtrl(_, $scope, $state, $ionicHistory, $ionicViewSwitcher, ThreePullyCalculator, localStorageService) {
        var currentStateName = $ionicHistory.currentStateName();
        var currentPage;

        $scope.$on("$ionicView.beforeEnter", function(scopes, states) {
            console.log('beforeEnter: ');

            currentPage = _.findIndex(ThreePullyCalculator.pagesArr(), function(o) {
                return o == currentStateName;
            });

            $scope.measuringUnits = localStorageService.get('isMeasure');
            console.log('currentStateName: ',currentStateName);

            if (currentStateName != 'app.threepulleys-08') {
                $scope.pulleyCenter1 = '';
                $scope.pulleyCenter2 = '';
                $scope.pulleyCenter3 = '';

                $scope.largeDiameter = '';
                $scope.mediumDiameter = '';
                $scope.smallDiameter = '';

                $scope.beltLength = '';
            }

            if (currentStateName == 'app.threepulleys-02') {
                ThreePullyCalculator.setPulleyCenterDistance1($scope.pulleyCenter1 || '');
                ThreePullyCalculator.setPulleyCenterDistance2($scope.pulleyCenter2 || '');
                ThreePullyCalculator.setPulleyCenterDistance3($scope.pulleyCenter3 || '');

                ThreePullyCalculator.setLargePulleyDiameter($scope.largeDiameter || '');
                ThreePullyCalculator.setMediumPulleyDiameter($scope.mediumDiameter || '');
                ThreePullyCalculator.setSmallPulleyDiameter($scope.smallDiameter || '');
            }
        });

        $scope.$on("$ionicView.afterEnter", function(scopes, states) {
            console.log('afterEnter: ');

            currentPage = _.findIndex(ThreePullyCalculator.pagesArr(), function(o) {
                return o == currentStateName;
            });
            console.log('currentStateName: ',currentStateName);

            if (currentStateName == 'app.threepulleys-02') {
                $scope.pulleyCenter1 = ThreePullyCalculator.getPulleyCenterDistance1();
                $scope.nextTitle = 'Next';
                console.log('$scope.pulleyCenter1: ',$scope.pulleyCenter1);
            } else if (currentStateName == 'app.threepulleys-03') {
                $scope.pulleyCenter2 = ThreePullyCalculator.getPulleyCenterDistance2();
                $scope.nextTitle = 'Next';

            } else if (currentStateName == 'app.threepulleys-04') {
                $scope.pulleyCenter3 = ThreePullyCalculator.getPulleyCenterDistance3();
                $scope.nextTitle = 'Next';

            } else if (currentStateName == 'app.threepulleys-05') {
                $scope.largeDiameter = ThreePullyCalculator.getLargePulleyDiameter();
                $scope.nextTitle = 'Next';

            } else if (currentStateName == 'app.threepulleys-06') {
                $scope.mediumDiameter = ThreePullyCalculator.getMediumPulleyDiameter();
                $scope.nextTitle = 'Next';

            } else if (currentStateName == 'app.threepulleys-07') {
                $scope.smallDiameter = ThreePullyCalculator.getSmallPulleyDiameter();
                $scope.nextTitle = 'Next';

            } else if (currentStateName == 'app.threepulleys-08') {
                $scope.pulleyCenter1 = ThreePullyCalculator.getPulleyCenterDistance1();
                $scope.pulleyCenter2 = ThreePullyCalculator.getPulleyCenterDistance2();
                $scope.pulleyCenter3 = ThreePullyCalculator.getPulleyCenterDistance3();

                $scope.largeDiameter = ThreePullyCalculator.getLargePulleyDiameter();
                $scope.mediumDiameter = ThreePullyCalculator.getMediumPulleyDiameter();
                $scope.smallDiameter = ThreePullyCalculator.getSmallPulleyDiameter();

                var pulleyCenter1 = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance1());
                var pulleyCenter2 = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance2());
                var pulleyCenter3 = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance3());

                var largeDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getLargePulleyDiameter());
                var mediumDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getMediumPulleyDiameter());
                var smallDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getSmallPulleyDiameter());


                $scope.beltLength = ThreePullyCalculator.calculateBeltLength(pulleyCenter1, pulleyCenter2, pulleyCenter3,
                    largeDiameter, mediumDiameter, smallDiameter);

                $scope.nextTitle = 'Re-Calculate';
            }
        });

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

            var pulleyCenter1 = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance1());
            var pulleyCenter2 = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance2());
            var pulleyCenter3 = ThreePullyCalculator.calculatePulleyCenter(ThreePullyCalculator.getPulleyCenterDistance3());

            var largeDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getLargePulleyDiameter());
            var mediumDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getMediumPulleyDiameter());
            var smallDiameter = ThreePullyCalculator.calculatePulleyDiameter(ThreePullyCalculator.getSmallPulleyDiameter());

            $scope.beltLength = ThreePullyCalculator.calculateBeltLength(pulleyCenter1, pulleyCenter2, pulleyCenter3,
                largeDiameter, mediumDiameter, smallDiameter);

            console.log('beltLength: ', $scope.beltLength);
        };


        $scope.nextPage = function() {
            if ($ionicHistory.currentStateName() !== ThreePullyCalculator.pagesArr()[6]) {

                if (currentStateName == 'app.threepulleys-02') {
                    ThreePullyCalculator.setPulleyCenterDistance1($scope.pulleyCenter1);

                } else if (currentStateName == 'app.threepulleys-03') {
                    ThreePullyCalculator.setPulleyCenterDistance2($scope.pulleyCenter2);

                } else if (currentStateName == 'app.threepulleys-04') {
                    ThreePullyCalculator.setPulleyCenterDistance3($scope.pulleyCenter3);

                } else if (currentStateName == 'app.threepulleys-05') {
                    ThreePullyCalculator.setLargePulleyDiameter($scope.largeDiameter);

                } else if (currentStateName == 'app.threepulleys-06') {
                    ThreePullyCalculator.setMediumPulleyDiameter($scope.mediumDiameter);

                } else if (currentStateName == 'app.threepulleys-07') {
                    ThreePullyCalculator.setSmallPulleyDiameter($scope.smallDiameter);
                }

                $state.go(ThreePullyCalculator.pagesArr()[currentPage + 1]);
            } else {
                // $scope.calculateResult();

                var pulleyCenter1 = ThreePullyCalculator.calculatePulleyCenter($scope.pulleyCenter1);
                var pulleyCenter2 = ThreePullyCalculator.calculatePulleyCenter($scope.pulleyCenter2);
                var pulleyCenter3 = ThreePullyCalculator.calculatePulleyCenter($scope.pulleyCenter3);

                var largeDiameter = ThreePullyCalculator.calculatePulleyDiameter($scope.largeDiameter);
                var mediumDiameter = ThreePullyCalculator.calculatePulleyDiameter($scope.mediumDiameter);
                var smallDiameter = ThreePullyCalculator.calculatePulleyDiameter($scope.smallDiameter);

                $scope.beltLength = ThreePullyCalculator.calculateBeltLength(pulleyCenter1, pulleyCenter2, pulleyCenter3,
                    largeDiameter, mediumDiameter, smallDiameter);

                console.log('beltLength: ', $scope.beltLength);
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

                $state.go('app.tab');
            }
        };
    }

})();
