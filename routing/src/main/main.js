angular
    .module('main', [
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('Home', {
                url: '/',
                controller: 'MainController as ctrl',
                templateUrl: 'views/home.html'
            })
            .state('About', {
                url: '/about',
                controller: 'AboutController as ctrl',
                templateUrl: 'views/about.html'
            })
            
        
        $urlRouterProvider.otherwise('/');
    })
    .run(function($rootScope) {
        $rootScope.list = [
            'test',
            '123'
        ]
    })