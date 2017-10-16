'use strict';
var isPlaying = false;
var music_arr = [];
var participant_arr = [];
var musics = document.getElementsByName("musics[]");        //악기 체크박스
var music_player_musics = document.getElementsByName("musics[][]"); // 뮤직플레이어용 악기 배열
var musics_test = document.getElementsByName("my_audio[]"); //악기 오디오 태그
var music_player_musics = document.getElementsByName("my_audio[][]"); // 뮤직플레이어 오디오 태그
var participants = document.getElementsByName("participants[]");        //합주자 체크박스
var participants_test = document.getElementsByName("my_participant[]"); //합주자 오디오 태그

var listen_btn = document.getElementsByName("listen_btn");  //재생버튼

function allCheck() {
    for(var i=0; i<musics.length; i++){
        if (musics[i].checked != true) {
            musics[i].checked = true;
        }
    }

}



function init(){
    var flag = false;   //재생중인 판단

    for(var i = 0; i<musics_test.length;i++){
            if(musics_test[i].readyState != 4){
                console.log(musics_test[0].readyState);
                return ;
            }
    }
    
    for(var i = 0; i<participants_test.length;i++){
            if(participants_test[i].readyState != 4){
                console.log("p fail");
                return ;
            }
    }

    for(var i=0; i<musics.length; i++){
        if ((musics[i].checked == true) && (!isPlaying)) {
            listen_btn[0].value = '||';
            musics_test[i].play();
        }else if(isPlaying){
            listen_btn[0].value = '▶';
            musics_test[i].pause();
            flag = true;
        }
    }   //악기 동시재생

    for(var i=0; i<participants.length; i++){
        if ((participants[i].checked == true) && (!isPlaying)) {
            participants_test[i].play();
        }else if(isPlaying){
            participants_test[i].pause();
            flag = true;
        }
    }   //합주자 동시재생

    isPlaying = (!flag)?true:false;

};

function recordPage() {
    var musics = document.getElementsByName("musics[]");
    var participants = document.getElementsByName("participants[]");
    
    if(musics.length != 0){
        for(var i=0; i<musics.length; i++) {
            if (musics[i].checked == true) {
                music_arr.push(musics[i].value);
            }
        }       //악기 리스트 배열
        document.recordForm.music_checked_list.value = music_arr;
    }

    if(participants.length != 0){

        for(var i=0; i<participants.length; i++) {
            if (participants[i].checked == true) {
                participant_arr.push(participants[i].value);
            }
        }
        document.recordForm.partici_checked_list.value = participant_arr;
    }
    
    document.recordForm.submit();
}   //녹음하기


function videoRecordPage() {
    var musics = document.getElementsByName("musics[]");
    var participants = document.getElementsByName("participants[]");
    var submitSetting = document.getElementById("recordForm");
    submitSetting.setAttribute('action','/video_recording_one/');
    console.log(submitSetting);
    for(var i=0; i<musics.length; i++) {
        if (musics[i].checked == true) {
            music_arr.push(musics[i].value);
        }
    }       //악기 리스트 배열

    if(participants.length != 0){

        for(var i=0; i<participants.length; i++) {
            if (participants[i].checked == true) {
                participant_arr.push(participants[i].value);
            }
        }
        document.recordForm.partici_checked_list.value = participant_arr;
    }



    document.recordForm.music_checked_list.value = music_arr;
    
    document.recordForm.submit();
}   //녹화하기