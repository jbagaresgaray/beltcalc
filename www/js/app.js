(function() {
    'use strict';

    angular.module('starter', ['ionic', 'LocalStorageModule'])
        .run(['$ionicPlatform', '$rootScope', function($ionicPlatform, $rootScope) {
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
        }])
        .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

            $ionicConfigProvider.backButton.text('Back').icon('ion-chevron-left');

            $stateProvider
                .state('tab', {
                    url: '/tab',
                    templateUrl: 'templates/tabs.html',
                    controller: 'AppCtrl'
                });

            $urlRouterProvider.otherwise('/tab');

        }])
        .controller('AppCtrl', ['$scope', function($scope) {}]);

})();
