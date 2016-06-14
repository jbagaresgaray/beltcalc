(function() {
    'use strict';

    angular.module('starter', ['ionic', 'LocalStorageModule'])
        .run(['$ionicPlatform', '$rootScope', '$state', '$ionicPopup', 'TwoPullyCalculator', 'ThreePullyCalculator',
            function($ionicPlatform, $rootScope, $state, $ionicPopup, TwoPullyCalculator, ThreePullyCalculator) {
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

                $ionicPlatform.registerBackButtonAction(function(event) {
                    if ($state.current.name == "app.tab") {
                        navigator.app.exitApp();
                    } else {
                        navigator.app.backHistory();
                    }
                }, 100);

            }
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.backButton.text('').icon('ion-chevron-left');

            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                    controller: 'MenuCtrl'
                })
                .state('app.tab', {
                    url: '/tab',
                    cache:false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/tabs.html',
                            controller: 'AppCtrl'
                        }
                    }
                })
                .state('app.settings', {
                    url: '/settings',
                    cache:false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/settings.html',
                            controller: 'SettingsCtrl'
                        }
                    }
                })
                .state('app.info', {
                    url: '/appinfo',
                    cache:false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/appinfo.html'
                        }
                    }
                })
                .state('info', {
                    url: '/info',
                    cache:false,
                    templateUrl: 'templates/info.html',
                    controller: 'StartCtrl'
                });

            $urlRouterProvider.otherwise('/info');

        }])
        .controller('StartCtrl', ['$scope', '$state', 'localStorageService', function($scope, $state, localStorageService) {

            $scope.$on('$ionicView.loaded', function() {
                $scope.showFooter = true;

                var settings = localStorageService.get('isAgree');
                if (settings === 1) {
                    console.log('settings: ', settings);
                    $state.go('app.tab');
                }
            });


            $scope.agreeBtn = function() {
                localStorageService.set('isAgree', 1);
                $state.go('app.tab');
            };
        }])
        .controller('MenuCtrl', ['$scope', '$state', 'localStorageService', '$ionicPlatform', function($scope, $state, localStorageService, $ionicPlatform) {

            $ionicPlatform.onHardwareBackButton(function() {
                event.preventDefault();
                event.stopPropagation();
                alert('going back now yall');
            });

            $scope.gotoTwoPulleys = function() {
                var settings = localStorageService.get('isResult');
                if (settings == 'result') {
                    $state.go('app.twopulleys-calculation', { recal: false });
                } else {
                    $state.go('app.twopulleys-02');
                }
            };

            $scope.gotoThreePulleys = function() {
                var settings = localStorageService.get('isResult');
                if (settings == 'result') {
                    $state.go('app.threepulleys-calculation', { recal: false });
                } else {
                    $state.go('app.threepulleys-02');
                }
            };

        }])
        .controller('AppCtrl', ['$scope', '$state', 'localStorageService', '$ionicPopup', function($scope, $state, localStorageService, $ionicPopup) {

            // var resultPage = localStorageService.get('isResult'),
            //     isResult = resultPage ? resultPage : null;

            // if (!isResult) {
            //     var confirmPopup = $ionicPopup.confirm({
            //         title: 'Set default calculation view',
            //         template: 'Would like to set default calculation view'
            //     });

            //     confirmPopup.then(function(res) {
            //         if (res) {
            //             $state.go('app.settings');
            //         }
            //     });
            // }

            $scope.$on("$ionicView.enter", function(scopes, states) {
                localStorageService.set('pulleyCenter', 0);

                localStorageService.set('pulleyCenter1', 0);
                localStorageService.set('pulleyCenter2', 0);
                localStorageService.set('pulleyCenter3', 0);

                localStorageService.set('smallDiameter', 0);
                localStorageService.set('mediumDiameter', 0);
                localStorageService.set('largeDiameter', 0);
            });

            $scope.gotoTwoPulleys = function() {
                var settings = localStorageService.get('isResult');
                if (settings == 'result') {
                    $state.go('app.twopulleys-calculation', { recal: false });
                } else {
                    $state.go('app.twopulleys-02');
                }
            };


            $scope.gotoThreePulleys = function() {
                var settings = localStorageService.get('isResult');
                if (settings == 'result') {
                    $state.go('app.threepulleys-calculation', { recal: false });
                } else {
                    $state.go('app.threepulleys-02');
                }
            };
        }]);

})();
