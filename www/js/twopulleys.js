(function() {
    'use strict';

    angular.module('starter')
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('app.twopulleys-01', {
                    url: '/twopulleys1',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/two_pulley/twopulleys-01.html',
                            controller: 'DashCtrl'
                        }
                    }
                })
                .state('app.twopulleys-02', {
                    url: '/twopulleys2',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/two_pulley/twopulleys-02.html',
                            controller: 'DashCtrl'
                        }
                    }
                })
                .state('app.twopulleys-03', {
                    url: '/twopulleys3',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/two_pulley/twopulleys-03.html',
                            controller: 'DashCtrl'
                        }
                    }
                })
                .state('app.twopulleys-04', {
                    url: '/twopulleys4',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/two_pulley/twopulleys-04.html',
                            controller: 'DashCtrl'
                        }
                    }
                })
                .state('app.twopulleys-05', {
                    url: '/twopulleys5',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/two_pulley/twopulleys-05.html',
                            controller: 'DashCtrl'
                        }
                    }
                })
                .state('app.twopulleys-calculation', {
                    url: '/twopulleyscalculation?recal',
                    cache: false,
                    views: {
                        'menuContent': {
                            templateUrl: 'templates/two_pulley/calculation.html',
                            controller: 'DashCalcCtrl'
                        }
                    }
                });
        }]);

})();
