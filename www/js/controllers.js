'use strict';

angular.module('starter')
    .controller('DashCtrl', function(_, $scope, $state, $ionicHistory) {
        var pagesArr = [
            'twopulleys-01',
            'twopulleys-02',
            'twopulleys-03',
            'twopulleys-04',
            'twopulleys-05',
        ];

        var currentStateName = $ionicHistory.currentStateName();
        var currentPage = _.findIndex(pagesArr, function(o) {
            return o == currentStateName;
        });

        $scope.nextPage = function() {
            if ($ionicHistory.currentStateName() !== pagesArr[4]) {
                $state.go(pagesArr[currentPage + 1]);
            }
        };

        $scope.prevPage = function() {
            if ($ionicHistory.currentStateName() !== pagesArr[0]) {
                $state.go(pagesArr[currentPage - 1]);
            } else if ($ionicHistory.currentStateName() == pagesArr[0]) {
                $state.go('tab');
            }
        };
    })
    .controller('ChatsCtrl', function(_, $scope, $state, $ionicHistory) {
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

        $scope.nextPage = function() {
            if ($ionicHistory.currentStateName() !== pagesArr[7]) {
                $state.go(pagesArr[currentPage + 1]);
            }
        };

        $scope.prevPage = function() {
            if ($ionicHistory.currentStateName() !== pagesArr[0]) {
                $state.go(pagesArr[currentPage - 1]);
            } else if ($ionicHistory.currentStateName() == pagesArr[0]) {
                $state.go('tab');
            }
        };
    });
