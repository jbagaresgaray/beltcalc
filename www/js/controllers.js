'use strict';

angular.module('starter')
    .controller('DashCtrl', function($scope, $state, localStorageService) {
        var totalPage = 4;

        if (parseInt(localStorageService.get('currentPage')) > 5) {
            localStorageService.set('currentPage', 0);
        }

        var currentPage = localStorageService.get('currentPage') || 0;

        var pagesArr = [
            'twopulleys-01',
            'twopulleys-02',
            'twopulleys-03',
            'twopulleys-04',
            'twopulleys-05',
        ];

        $scope.nextPage = function() {
            if (parseInt(localStorageService.get('currentPage')) > 5) {
                localStorageService.set('currentPage', 0);
            }

            currentPage++;
            localStorageService.set('currentPage', currentPage);
            if (currentPage <= 5) {
                $state.go(pagesArr[currentPage]);
            }
        };

        $scope.prevPage = function() {
            if (currentPage > 0) {
                currentPage--;
                localStorageService.set('currentPage', currentPage);
                $state.go(pagesArr[currentPage]);
            }
        };
    })
    .controller('ChatsCtrl', function($scope) {

    });
