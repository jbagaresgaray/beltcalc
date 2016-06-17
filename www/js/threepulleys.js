(function() {
    'use strict';

    angular.module('starter')
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('app.threepulleys-01', {
                    url: '/threepulleys1',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/three_pulley/threepulleys-01.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('app.threepulleys-02', {
                    url: '/threepulleys2',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/three_pulley/threepulleys-02.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('app.threepulleys-03', {
                    url: '/threepulleys3',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/three_pulley/threepulleys-03.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('app.threepulleys-04', {
                    url: '/threepulleys4',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/three_pulley/threepulleys-04.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('app.threepulleys-05', {
                    url: '/threepulleys5',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/three_pulley/threepulleys-05.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('app.threepulleys-06', {
                    url: '/threepulleys6',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/three_pulley/threepulleys-06.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('app.threepulleys-07', {
                    url: '/threepulleys7',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/three_pulley/threepulleys-07.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('app.threepulleys-08', {
                    url: '/threepulleys8',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/three_pulley/threepulleys-08.html',
                            controller: 'ChatsCtrl'
                        }
                    }
                })
                .state('app.threepulleys-calculation', {
                    url: '/threepulleyscalculation?recal',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/three_pulley/calculation.html',
                            controller: 'ChatsCalcCtrl'
                        }
                    }
                });
        }]);

})();
