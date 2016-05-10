'use strict';
angular.module('starter', ['ionic','LocalStorageModule'])
    .run(function($ionicPlatform,$rootScope) {
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
    })
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.backButton.text('Back').icon('ion-chevron-left');

        $stateProvider
            .state('tab', {
                url: '/tab',
                templateUrl: 'templates/tabs.html',
                controller: 'DashCtrl'
            })
            .state('twopulleys-01', {
                url: '/twopulleys1',
                templateUrl: 'templates/two_pulley/twopulleys-01.html',
                controller: 'DashCtrl'
            })
            .state('twopulleys-02', {
                url: '/twopulleys2',
                templateUrl: 'templates/two_pulley/twopulleys-02.html',
                controller: 'DashCtrl'
            })
            .state('twopulleys-03', {
                url: '/twopulleys3',
                templateUrl: 'templates/two_pulley/twopulleys-03.html',
                controller: 'DashCtrl'
            })
            .state('twopulleys-04', {
                url: '/twopulleys4',
                templateUrl: 'templates/two_pulley/twopulleys-04.html',
                controller: 'DashCtrl'
            })
            .state('twopulleys-05', {
                url: '/twopulleys5',
                templateUrl: 'templates/two_pulley/twopulleys-05.html',
                controller: 'DashCtrl'
            });

        $urlRouterProvider.otherwise('/tab');

    });
