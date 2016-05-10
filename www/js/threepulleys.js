'use strict';
angular.module('starter')
    .config(function($stateProvider) {
        $stateProvider
            .state('threepulleys-01', {
                url: '/threepulleys1',
                templateUrl: 'templates/three_pulley/threepulleys-01.html',
                controller: 'ChatsCtrl'
            })
            .state('threepulleys-02', {
                url: '/threepulleys2',
                templateUrl: 'templates/three_pulley/threepulleys-02.html',
                controller: 'ChatsCtrl'
            })
            .state('threepulleys-03', {
                url: '/threepulleys3',
                templateUrl: 'templates/three_pulley/threepulleys-03.html',
                controller: 'ChatsCtrl'
            })
            .state('threepulleys-04', {
                url: '/threepulleys4',
                templateUrl: 'templates/three_pulley/threepulleys-04.html',
                controller: 'ChatsCtrl'
            })
            .state('threepulleys-05', {
                url: '/threepulleys5',
                templateUrl: 'templates/three_pulley/threepulleys-05.html',
                controller: 'ChatsCtrl'
            });
    });
