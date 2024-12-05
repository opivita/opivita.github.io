function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5a34twOEz29":
        Script1();
        break;
      case "6lOpLyAc9hn":
        Script2();
        break;
      case "5pwqkm2Rq9Z":
        Script3();
        break;
      case "6NIFfHHk5ou":
        Script4();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.volume=30
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.volume=0

}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.volume=30
audio.load();
audio.play();
}

