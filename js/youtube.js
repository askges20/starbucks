var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //유튜브 영상 url에 나온 id
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8' //loop true일 때 반복 재생할 영상 id를 적어야 함
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}