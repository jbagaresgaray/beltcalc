(function() {
    'use strict';

    angular.module('starter')
        .controller('SettingsCtrl', ['$scope', '$state', 'localStorageService', '$ionicPopup',
            function($scope, $state, localStorageService, $ionicPopup) {

                $scope.clientSideList = [{
                    text: 'Step by Step',
                    value: 'step'
                }, {
                    text: 'Direct Calculation',
                    value: 'result'
                }];

                $scope.data = {
                    clientSide: localStorageService.get('isResult') ? localStorageService.get('isResult') : 'result'
                };

                $scope.serverSideChange = function(item){
                	localStorageService.set('isResult', $scope.data.clientSide);
                };
            }
        ]);

})();
