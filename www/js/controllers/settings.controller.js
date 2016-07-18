(function() {
    'use strict';

    angular.module('starter')
        .controller('SettingsCtrl', ['$scope', '$state', 'localStorageService',
            function($scope, $state, localStorageService) {

                $scope.clientSideList = [{
                    text: 'Step by Step',
                    value: 'step'
                }, {
                    text: 'Direct Calculation',
                    value: 'result'
                }];

                $scope.toggleModel = (localStorageService.get('isResult') == 'step') ? true : false;

                $scope.data = {
                    clientSide: localStorageService.get('isResult') ? localStorageService.get('isResult') : 'step',
                    clientSide2: localStorageService.get('isMeasure') ? localStorageService.get('isMeasure') : 'metric'
                };

                $scope.clientSideList2 = [{
                    text: 'Metric Units',
                    value: 'metric'
                }, {
                    text: 'Standard Units',
                    value: 'standard'
                }];

                $scope.toggleOption = function(value) {
                    $scope.toggleModel = value;

                    var isResult = (value == true) ? 'step' : 'result';
                    localStorageService.set('isResult', isResult);
                };

                $scope.serverSideChange = function(item) {
                    localStorageService.set('isResult', $scope.data.clientSide);
                };

                $scope.serverSideChange2 = function(item) {
                    localStorageService.set('isMeasure', $scope.data.clientSide2);
                };
            }
        ]);

})();
