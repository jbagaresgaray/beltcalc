(function() {
    'use strict';

    angular.module('starter')
        .config(['$stateProvider', function($stateProvider) {
            $stateProvider
                .state('twopulleys-01', {
                    url: '/twopulleys1',
                    templateUrl: 'templates/two_pulley/twopulleys-01.html',
                    controller: 'DashCtrl',
                    cache: false
                })
                .state('twopulleys-02', {
                    url: '/twopulleys2',
                    templateUrl: 'templates/two_pulley/twopulleys-02.html',
                    controller: 'DashCtrl',
                    cache: false
                })
                .state('twopulleys-03', {
                    url: '/twopulleys3',
                    templateUrl: 'templates/two_pulley/twopulleys-03.html',
                    controller: 'DashCtrl',
                    cache: false
                })
                .state('twopulleys-04', {
                    url: '/twopulleys4',
                    templateUrl: 'templates/two_pulley/twopulleys-04.html',
                    controller: 'DashCtrl',
                    cache: false
                })
                .state('twopulleys-05', {
                    url: '/twopulleys5',
                    templateUrl: 'templates/two_pulley/twopulleys-05.html',
                    controller: 'DashCtrl',
                    cache: false
                })
                .state('twopulleys-calculation', {
                    url: '/twopulleyscalculation',
                    templateUrl: 'templates/two_pulley/calculation.html',
                    controller: 'DashCalcCtrl',
                    cache: false
                });
        }]);

})();
