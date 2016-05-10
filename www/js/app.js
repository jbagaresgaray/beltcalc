'use strict';
angular.module('starter', ['ionic'])
    .run(function($ionicPlatform) {
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
    })
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.backButton.text('Back').icon('ion-chevron-left');

        $stateProvider
            .state('tab', {
                url: '/tab',
                templateUrl: 'templates/tabs.html'
            })
            .state('dash', {
                url: '/dash',
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            })
            .state('chats', {
                url: '/chats',
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
            })
            .state('chat-detail', {
                url: '/detail',
                templateUrl: 'templates/chat-detail.html',
                controller: 'ChatDetailCtrl'

            })
            .state('account', {
                url: '/account',
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
            });

        $urlRouterProvider.otherwise('/tab/dash');

    });
