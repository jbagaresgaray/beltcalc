'use strict';

angular.module('starter')	
    .controller('ChatsCtrl', function(_, $scope, $state, $ionicHistory,$ionicViewSwitcher) {
        var pagesArr = [
            'threepulleys-01',
            'threepulleys-02',
            'threepulleys-03',
            'threepulleys-04',
            'threepulleys-05',
            'threepulleys-06',
            'threepulleys-07',
            'threepulleys-08',
        ];

        var currentStateName = $ionicHistory.currentStateName();
        var currentPage = _.findIndex(pagesArr, function(o) {
            return o == currentStateName;
        });

        if(currentStateName == 'threepulleys-08'){
            $scope.nextTitle = 'Re-Calculate';
        }else{
            $scope.nextTitle = 'Next';
        }

        $scope.nextPage = function() {
            if ($ionicHistory.currentStateName() !== pagesArr[7]) {
                $state.go(pagesArr[currentPage + 1]);
            }else{
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $ionicViewSwitcher.nextDirection('back');
                $state.go('threepulleys-01');
            }
        };

        $scope.prevPage = function() {
            if ($ionicHistory.currentStateName() !== pagesArr[0]) {
                $state.go(pagesArr[currentPage - 1]);
            } else if ($ionicHistory.currentStateName() == pagesArr[0]) {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $ionicViewSwitcher.nextDirection('back');
                $state.go('tab');
            }
        };
    })