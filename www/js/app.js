(function() {
    'use strict';

    angular.module('starter', ['ionic', 'LocalStorageModule'])
        .run(['$ionicPlatform', '$rootScope', 'TwoPullyCalculator', 'ThreePullyCalculator',
            function($ionicPlatform, $rootScope, TwoPullyCalculator, ThreePullyCalculator) {
                $ionicPlatform.ready(function() {
                    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        cordova.plugins.Keyboard.disableScroll(true);

                    }
                    if (window.StatusBar) {
                        // org.apache.cordova.statusbar required
                        StatusBar.styleDefault();
                    }
                });

                $rootScope.navTitle = '<img class="title-image" src="img/beltcalc-logo.png">';

                $rootScope.$on("$ionicView.enter", function(scopes, states) {
                    if (states.stateName == 'tab') {
                        TwoPullyCalculator.setPulleyCenterDistance(0);
                        TwoPullyCalculator.setLargePulleyDiameter(0);
                        TwoPullyCalculator.setSmallPulleyDiameter(0);
                    }
                });
            }
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.backButton.text('Back').icon('ion-chevron-left');

            $stateProvider
                .state('tab', {
                    url: '/tab',
                    templateUrl: 'templates/tabs.html',
                    controller: 'AppCtrl'
                })
                .state('settings', {
                    url: '/settings',
                    templateUrl: 'templates/settings.html',
                    controller: 'SettingsCtrl'
                });

            $urlRouterProvider.otherwise('/tab');

        }])
        .controller('AppCtrl', ['$scope', '$state', 'localStorageService', '$ionicPopup', function($scope, $state, localStorageService, $ionicPopup) {

            var resultPage = localStorageService.get('isResult'),
                isResult = resultPage ? resultPage : null;

            if (!isResult) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Set default calculation view',
                    template: 'Would like to set default calculation view'
                });

                confirmPopup.then(function(res) {
                    if (res) {
                        $state.go('settings');
                    }
                });
            }

        }])
        .controller('SettingsCtrl', ['$scope', '$state', 'localStorageService', function($scope, $state, localStorageService) {

            $scope.filter = localStorageService.get('isResult') ? localStorageService.get('isResult') : 'result';


            $scope.$watch('filter', function(newValue) {
                console.info('filter: ', newValue);
            });

            $scope.saveSetting = function() {
                console.info('saveSetting: ', $scope.filter);
                localStorageService.set('isResult', $scope.filter);
            };

        }]);

})();
