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

                $rootScope.navTitle = '<img class="title-image" src="img/vbeltcalc-logo.png" style="height:35px;">';

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

            $ionicConfigProvider.backButton.text('').icon('ion-chevron-left');

            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/menu.html'
                })
                .state('app.tab', {
                    url: '/tab',
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/tabs.html',
                            controller: 'AppCtrl'
                        }
                    }
                })
                .state('app.settings', {
                    url: '/settings',
                    views:{
                        'menuContent':{
                            templateUrl: 'templates/settings.html',
                            controller: 'SettingsCtrl'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/app/tab');

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
                        $state.go('app.settings');
                    }
                });
            }

            $scope.gotoTwoPulleys = function() {
                var settings = localStorageService.get('isResult');
                if (settings == 'result') {
                    $state.go('app.twopulleys-calculation');
                } else {
                    $state.go('app.twopulleys-02');
                }
            };


            $scope.gotoThreePulleys = function() {
                var settings = localStorageService.get('isResult');
                if (settings == 'result') {
                    $state.go('app.threepulleys-calculation');
                } else {
                    $state.go('app.threepulleys-02');
                }
            };

        }]);

})();
