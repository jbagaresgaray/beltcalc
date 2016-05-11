(function() {
    'use strict';

    angular.module('starter')
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('threepulleys-01', {
                    url: '/threepulleys1',
                    templateUrl: 'templates/three_pulley/threepulleys-01.html',
                    controller: 'ChatsCtrl',
                    cache: false
                })
                .state('threepulleys-02', {
                    url: '/threepulleys2',
                    templateUrl: 'templates/three_pulley/threepulleys-02.html',
                    controller: 'ChatsCtrl',
                    cache: false
                })
                .state('threepulleys-03', {
                    url: '/threepulleys3',
                    templateUrl: 'templates/three_pulley/threepulleys-03.html',
                    controller: 'ChatsCtrl',
                    cache: false
                })
                .state('threepulleys-04', {
                    url: '/threepulleys4',
                    templateUrl: 'templates/three_pulley/threepulleys-04.html',
                    controller: 'ChatsCtrl',
                    cache: false
                })
                .state('threepulleys-05', {
                    url: '/threepulleys5',
                    templateUrl: 'templates/three_pulley/threepulleys-05.html',
                    controller: 'ChatsCtrl',
                    cache: false
                })
                .state('threepulleys-06', {
                    url: '/threepulleys6',
                    templateUrl: 'templates/three_pulley/threepulleys-06.html',
                    controller: 'ChatsCtrl',
                    cache: false
                })
                .state('threepulleys-07', {
                    url: '/threepulleys7',
                    templateUrl: 'templates/three_pulley/threepulleys-07.html',
                    controller: 'ChatsCtrl',
                    cache: false
                })
                .state('threepulleys-08', {
                    url: '/threepulleys8',
                    templateUrl: 'templates/three_pulley/threepulleys-08.html',
                    controller: 'ChatsCtrl',
                    cache: false
                });
        }]);

})();
