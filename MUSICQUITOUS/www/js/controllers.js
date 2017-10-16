angular.module('app.controllers', [])
  
.controller('mUSICQUITOUSCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$.ajax({
          url: "http://harmony-project-chonahoom.c9users.io/ionic_bandchallenge_record_before",
          type: "GET",
          processData: false,
          contentType: false,
          data: '',
          dataType: 'json',
          success:function($data){
           
              var midiList;
              var boardsList;
              var userList;
              midiList   = $data[0];  //midi
              boardsList = $data[1];  //boards
              userList   = $data[2];  //users

              
           $scope.List = {
            'midiList'         :  midiList,
            'boardsList'       :  boardsList,
            'userList'         :  userList,
           }
           console.log($scope.List);
          },
          error: function () {
              alert('오류가 발생하였습니다.');
          }
      });  
      $scope.doRefresh = function() {
        $scope.$broadcast('scroll.refreshComplete');
 
      };
      
      
}])
   
.controller('bandChallengeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('VenCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('guildCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('myAlbumCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
$.ajax({
          url: "https://harmony-project-chonahoom.c9users.io/ionic/myalbum",
          type: "GET",
          processData: false,
          contentType: false,
          data: '',
          dataType: 'json',
          success:function($data){
           $scope.albums = $data;
           
           console.log($scope.albums);
          },
          error: function () {
              alert('오류가 발생하였습니다.');
          }
      }); 
      $scope.doRefresh = function() {
        $scope.$broadcast('scroll.refreshComplete');
 
      };
}])
   
.controller('RecordingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

          $scope.boarderId = $stateParams.boarderId;
          $.ajax({
          url: "http://harmony-project-chonahoom.c9users.io/ionic_bandchallenge_record_before/"+$scope.boarderId,
          type: "GET",
          processData: false,
          contentType: false,
          data: '',
          dataType: 'json',
          success:function($data){
      
              var boardId;
              var midi_info;
              var board_info;
              var board_audio_info;

              boardId             = $data[0];  //boardId
              midi_info           = $data[1];  //midi_info
              board_info          = $data[2];  //board_info
              board_audio_info    = $data[3];  //board_audio_info

          console.log(boardId);
          console.log(midi_info);
          console.log(board_info);
          console.log(board_audio_info);
         

           $scope.midi_selected_instruments = [];
            
                $scope.midi_selected_instruments = board_info['selected_instruments'].split(',');
            
            $scope.now_play = 0;
           // midi파일 path / midi파일 명 저장 
            var public_midi_url = "https://harmony-project-chonahoom.c9users.io/midi/";
            var public_upload_url = "https://harmony-project-chonahoom.c9users.io/uploads/bandChallenge/audio/";
            var midis_src;
            var upload_src;
            var player = $('.player');
            if(player.find('audio')){
                        player.find('audio').empty();
                    }
            
                for(var i=0; i<$scope.midi_selected_instruments.length; i++){
                
                    midis_src = public_midi_url +midi_info.path+"/"+$scope.midi_selected_instruments[i];
                    //eval("audio" + j + " = " + "new Audio(midis_src[i][j]);");

                    //midis_src[i][j] 은 정확한 mp3의 경로값을 가리키고 있습니다.
                    
                    $('.player').append("<audio preload='auto' src='"+midis_src+"'></audio>"); 
                }
                if(board_audio_info.length){  //넘어오는 합주자의 파일이 1개 이상일 경우
                   for(var i=0; i<board_audio_info.length; i++){
                    upload_src = public_upload_url + board_audio_info[0].file_name;
                          $('.player').append("<audio preload='auto' src='"+upload_src+"'></audio>");
                   }
                }else{ //한명만 합주한 경우
                    upload_src = public_upload_url + board_audio_info.file_name;
                    $('.player').append("<audio preload='auto' src='"+upload_src+"'></audio>");
                }
                setValue();
            
           $scope.Info = {
            'boardId'            :  boardId,
            'midi_info'          :  midi_info,
            'board_info'         :  board_info,
            'board_audio_info'   :  board_audio_info,
           }
/*
           var instrumentsSum = board_info['selected_instruments'];
           var instrumentsSum_lists = instrumentsSum.split(',');*/
         
           //board_info에 있는 , 로 나누어진 mp3파일을 쪼갠다음 view파일에 보내야 함.
/*
            $scope.InstrumentList = "{";
           $(instrumentsSum_lists).each(function(i){
                $scope.InstrumentList += "'instTitle"+i+"' : "+instrumentsSum_lists[i]+",";
           });
           $scope.InstrumentList += "}";
           console.log($scope.InstrumentList);
            
                $scope.InstrumentList ={
                  'instTitle0': instrumentsSum_lists[0],
                  'instTitle0': instrumentsSum_lists[1],
                  'instTitle0': instrumentsSum_lists[2],
                }*/
           
           


          },
          error: function () {
              alert('오류가 발생하였습니다.');
          }
      });  
        
      $scope.goods = function(id){
      $.ajax({
        url: "https://harmony-project-chonahoom.c9users.io/ionic/boardgoods/"+id,
        type: "GET",
        processData: false,
        contentType: false,
        //data: 0,
        dataType: 'json',
        success:function(data){
            console.log(data);

        },
        error: function (mes) {
        }
    });
    }
    $scope.doRefresh = function() {
        $scope.$broadcast('scroll.refreshComplete');
 
      };
}])
   
.controller('VideoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
 .controller('albumCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.album_id = $stateParams.album_id;
$.ajax({
          url: "http://harmony-project-chonahoom.c9users.io/ionic/album/record/list/nahoom/"+$scope.album_id,
          type: "GET",
          processData: false,
          contentType: false,
          data: '',
          dataType: 'json',
          success:function($data){
           
           $scope.data      = $data;
           $scope.musiclist = $data[0];
           $scope.partician = $data[4];
           $scope.midis     = $data[5];
           $scope.album_music = $data[6];
           
           console.log( $scope.musiclist);
           console.log( $scope.partician);
           console.log( $scope.midis);
           console.log( $scope.album_music);
          },
          error: function () {
              alert('오류가 발생하였습니다.');
          }
      }); 
      $scope.doRefresh = function() {
        $scope.$broadcast('scroll.refreshComplete');
 
      };
}])
   
.controller('album2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

   
.controller('playerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
     $scope.album_id = $stateParams.album_id;
     if($stateParams.music_id){
        $scope.now_play = parseInt($stateParams.music_id);
        
     }else{
        $scope.now_play = 0;
     }
$.ajax({
          url: "http://harmony-project-chonahoom.c9users.io/ionic/myPage/album/record/play/nahoom/"+$scope.album_id,
          type: "GET",
          processData: false,
          contentType: false,
          data: '',
          dataType: 'json',
          success:function($data){
          $('audio').remove();
          
           $scope.midi_music    = $data[0];
           $scope.partician     = $data[2];
           $scope.midi_path     = $data[3];
          
          console.log($scope.midi_music);
           $scope.midi_selected_instruments = [];
           $scope.upload_mp3 = [];

            for(var i=0; i<$scope.midi_music.length; i++){
        
                $scope.midi_selected_instruments[i] = $scope.midi_music[i]['selected_instruments'].split(',');
                $scope.upload_mp3[i]                = $scope.midi_music[i]['files'].split(',');
                
            
            }
            

            
            // midi파일 path / midi파일 명 저장 
            var public_midi_url = "https://harmony-project-chonahoom.c9users.io/midi/";
            var public_upload_url = "https://harmony-project-chonahoom.c9users.io/uploads/bandChallenge/audio/";
            var midis_src   = new Array();
            var uploads_src = new Array();

            for(var i=$scope.now_play; i<$scope.midi_selected_instruments.length - ($scope.midi_selected_instruments.length)+1+$scope.now_play; i++){
                midis_src[i]    = new Array($scope.midi_selected_instruments.length);
                uploads_src[i]  = new Array($scope.upload_mp3.length);
                for(var j=0; j<$scope.midi_selected_instruments[i].length; j++){
                    midis_src[i][j] = public_midi_url +$scope.midi_path[i].path+"/"+$scope.midi_selected_instruments[i][j];
                    //eval("audio" + j + " = " + "new Audio(midis_src[i][j]);");

                    //midis_src[i][j] 은 정확한 mp3의 경로값을 가리키고 있습니다.
                    
                    $('.player').append("<audio preload='auto' src='"+midis_src[i][j]+"'></audio>");
                  
                }
                for(var j=0; j<$scope.upload_mp3[i].length; j++){
                    uploads_src[i][j] = public_upload_url +$scope.upload_mp3[i][j];
                    //eval("audio" + j + " = " + "new Audio(midis_src[i][j]);");

                    //midis_src[i][j] 은 정확한 mp3의 경로값을 가리키고 있습니다.
                    console.log(uploads_src[i][j]);
                    $('.player').append("<audio preload='auto' src='"+uploads_src[i][j]+"'></audio>");
                  
                }
                setValue();
            }
        
          },
          error: function () {
              alert('오류가 발생하였습니다.');
          }
      }); 
     $scope.doRefresh = function() {
        $scope.$broadcast('scroll.refreshComplete');
 
$.ajax({
          url: "http://harmony-project-chonahoom.c9users.io/ionic/myPage/album/record/play/nahoom/"+$scope.album_id,
          type: "GET",
          processData: false,
          contentType: false,
          data: '',
          dataType: 'json',
          success:function($data){
          $('audio').remove();
          /*var player = $('.player');
           if(player.find('audio')){
                console.log(player.find('audio').prevObject[0].children);
                var audio_arr;
                        audio_arr = player.find('audio').prevObject[0].children;
                        console.log(typeof(audio_arr));
                        for(var i=0 ;i<audio_arr.length-3; i++ ){
                          audio_arr.pop();
                        }

                    }*/
           $scope.midi_music    = $data[0];
           $scope.partician     = $data[2];
           $scope.midi_path     = $data[3];
          
           console.log($scope.midi_music);
           $scope.midi_selected_instruments = [];
           $scope.upload_mp3 = [];

            for(var i=0; i<$scope.midi_music.length; i++){
        
                $scope.midi_selected_instruments[i] = $scope.midi_music[i]['selected_instruments'].split(',');
                $scope.upload_mp3[i]                = $scope.midi_music[i]['files'].split(',');
            
            }
            

            
            // midi파일 path / midi파일 명 저장 
            var public_midi_url = "https://harmony-project-chonahoom.c9users.io/midi/";
            var public_upload_url = "https://harmony-project-chonahoom.c9users.io/uploads/bandChallenge/audio/";
            var midis_src   = new Array();
            var uploads_src = new Array();

            for(var i=$scope.now_play; i<$scope.midi_selected_instruments.length - ($scope.midi_selected_instruments.length)+1+$scope.now_play; i++){
                midis_src[i]    = new Array($scope.midi_selected_instruments.length);
                uploads_src[i]  = new Array($scope.upload_mp3.length);
                for(var j=0; j<$scope.midi_selected_instruments[i].length; j++){
                    midis_src[i][j] = public_midi_url +$scope.midi_path[i].path+"/"+$scope.midi_selected_instruments[i][j];
                    //eval("audio" + j + " = " + "new Audio(midis_src[i][j]);");

                    //midis_src[i][j] 은 정확한 mp3의 경로값을 가리키고 있습니다.
                    
                    $('.player').append("<audio preload='auto' src='"+midis_src[i][j]+"'></audio>");
                  
                }
                for(var j=0; j<$scope.upload_mp3[i].length; j++){
                    uploads_src[i][j] = public_upload_url +$scope.upload_mp3[i][j];
                    //eval("audio" + j + " = " + "new Audio(midis_src[i][j]);");

                    //midis_src[i][j] 은 정확한 mp3의 경로값을 가리키고 있습니다.
                    
                    $('.player').append("<audio preload='auto' src='"+uploads_src[i][j]+"'></audio>");
                  
                }
                setValue();
            }
        
         
         
          },
          error: function () {
              alert('오류가 발생하였습니다.');
          }
      }); 

      
      };
}])


.controller('laravelCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
   $scope.pop = function() {
        alert('길드 가입 신청이 완료되었습니다.');
 
      };

}])
   
.controller('testCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page15Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page16Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('matchingResultCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('centerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])