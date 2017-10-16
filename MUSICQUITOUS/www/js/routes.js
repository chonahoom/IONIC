angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.mUSICQUITOUS', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mUSICQUITOUS.html',
        controller: 'mUSICQUITOUSCtrl'
      }
    }
  })

  .state('menu.bandChallenge', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bandChallenge.html',
        controller: 'bandChallengeCtrl'
      }
    }
  })

  .state('menu.Ven', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Ven.html',
        controller: 'VenCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.guild', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/guild.html',
        controller: 'guildCtrl'
      }
    }
  })

  .state('menu.page5', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('menu.myAlbum', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myAlbum.html',
        controller: 'myAlbumCtrl'
      }
    }
  })

  .state('menu.Recording', {
    url: '/page7/?boarderId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Recording.html',
        controller: 'RecordingCtrl'
      }
    }
  })

  .state('menu.Video', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Video.html',
        controller: 'VideoCtrl'
      }
    }
  })

  .state('menu.album', {
    url: '/in_album/?album_id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/album.html',
        controller: 'albumCtrl'
      }
    }
  })

  .state('menu.album2', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/album.html',
        controller: 'albumCtrl'
      }
    }
  })

  .state('menu.player', {
    url: '/page11/?album_id/?music_id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/player.html',
        controller: 'playerCtrl'
      }
    }
  })

  .state('menu.laravel', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/laravel.html',
        controller: 'laravelCtrl'
      }
    }
  })

  .state('menu.test', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/test.html',
        controller: 'testCtrl'
      }
    }
  })

  .state('menu.page15', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page15.html',
        controller: 'page15Ctrl'
      }
    }
  })

  .state('menu.page16', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page16.html',
        controller: 'page16Ctrl'
      }
    }
  })

  .state('menu.matchingResult', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matchingResult.html',
        controller: 'matchingResultCtrl'
      }
    }
  })

  .state('menu.center', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/center.html',
        controller: 'centerCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});