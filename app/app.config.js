(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];

    function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });

        $urlRouterProvider.when('', '/login');
        $urlRouterProvider.otherwise('/login');

        var resolve_dep = function (config) {

            if (window.app_path) {
                $.each(config, function(i) {
                    config[i] = window.app_path + config[i];
                });
            }

            return {
                load: [
                    '$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(config);
                    }
                ]
            };
        };

        $stateProvider
            .state('login', {
                url: '/login',
                controller: 'login_ctrl',
                templateUrl: 'app/login/login.html',
                resolve: resolve_dep([
                    'app/login/login_ctrl.js',
                    'app/login/login_svr.js'
                ])
            })
            .state('dashboard', {
                url: '/dashboard',
                controller: 'dashboard_ctrl',
                templateUrl: 'app/dashboard/dashboard.html',
                resolve: resolve_dep([
                    'app/dashboard/dashboard_ctrl.js',
                    'app/controller/datepicker_ctrl.js',
                    'app/controller/modal_ctrl.js'
                ])
            });
    }
})();