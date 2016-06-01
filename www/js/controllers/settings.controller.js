(function() {
    'use strict';

    angular.module('starter')
        .controller('SettingsCtrl', ['$scope', '$state', 'localStorageService', '$ionicPopup',
            function($scope, $state, localStorageService, $ionicPopup) {

                $scope.clientSideList = [{
                    text: 'Step by Step',
                    value: 'step'
                }];

                $scope.data = {
                    clientSide: localStorageService.get('isResult') ? localStorageService.get('isResult') : 'step',
                    clientSide2: localStorageService.get('isMeasure') ? localStorageService.get('isMeasure') : 'metric'
                };

                $scope.clientSideList2 = [{
                    text: 'Metric Units',
                    value: 'metric'
                },{
                    text: 'Standard Units',
                    value: 'standard'
                }];

                $scope.serverSideChange = function(item){
                	localStorageService.set('isResult', $scope.data.clientSide);
                };

                $scope.serverSideChange2 = function(item){
                	localStorageService.set('isMeasure', $scope.data.clientSide2);
                };
            }
        ]);

})();
