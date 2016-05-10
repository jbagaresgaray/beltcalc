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
    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };
    })
    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })
    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
