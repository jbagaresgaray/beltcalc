'use strict';

angular.module('starter')
    .controller('DashCtrl', function(_, $scope, $state, $ionicHistory,$ionicViewSwitcher) {
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

        if(currentStateName == 'twopulleys-05'){
            $scope.nextTitle = 'Re-Calculate';
        }else{
            $scope.nextTitle = 'Next';
        }

        $scope.nextPage = function() {
            if ($ionicHistory.currentStateName() !== pagesArr[4]) {
                $state.go(pagesArr[currentPage + 1]);
            }else{
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $ionicViewSwitcher.nextDirection('back');
                $state.go('twopulleys-01');
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
    });
