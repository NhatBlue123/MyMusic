let count = 0;
const img = document.getElementById('img-center');
function xoayAnh()
{
    setInterval(
        function()
        {
            img.style.transform = `rotate(${count}deg)`;
            count++;
        },50
    );
}
xoayAnh();
//Stop music
let isPause = true;
function clickPause()
{
    let imgId = document.getElementById('center-button');
    if(isPause)
    {
        imgId.style.transform = "2s";
        imgId.innerHTML = '<img id="img-p1" src="img/PLAY-ICON1.png" alt="">';
        isPause = false;
    }
    else{
        imgId.style.transform = "2s";
        imgId.innerHTML = '<img id="img-p" src="img/pause-icon.svg" alt="">';
        isPause = true;
    }
}


const songs = [{
    nameMusic: 'Little dark age',
    author: 'MGMT',
    url: 'music/LittleDarkAge-MGMT-9034898.mp3',
    time: '3:00',
    img: 'imgMusic/MGMT_-_Little_Dark_Age.png',
},{
    nameMusic: 'Nang am xa dan',
    author: 'Son Tung MTP',
    url: 'music/NangAmXaDan-SonTungMTP-2697291.mp3',
    time: '3:00',
    img: 'imgMusic/SonTug.jpg'
},{
    nameMusic: 'Marry on a cross',
    author: 'Ghost',
    url: 'music/MaryOnACross-Ghost-6080370.mp3',
    time: '3:00',
    img: 'imgMusic/MarryOnACross.jpg'
},{
    nameMusic: 'Rolling in the Deep',
    author: 'Adele',
    url: 'music/Adele - Rolling In The Deep (Grammy 2012 - Live).mp3',
    time: '3:00',
    img: 'imgMusic/Adele.jpg'
}

];
//
const imgCenter = document.getElementById('img-center');
const nameMusic = document.getElementById('name-music');
const authorMusic = document.getElementById('author-music');
const playMusic = document.getElementById('myAudio');

function clickPlay(id)
{
    const song = songs[id - 1]; 
    imgCenter.src = song.img;
    nameMusic.textContent = song.nameMusic;
    authorMusic.textContent = song.author;
    playMusic.innerHTML = `<source src="${song.url}" type="audio/mpeg">`;
    playMusic.play();
}
function pauseMusic() {
    
}
const playMid = document.getElementById('center-button');
function handlePlayClick(id) {
    const buttonID = document.getElementById(`play-button${id}`);
    const isPlaying = buttonID.dataset.playing === 'true';
    
    if (isPlaying) {
        buttonID.innerHTML = '<img id="play-icon" src="img/PLAY-ICON1.png" alt="">';
        playMid.innerHTML = '<img id="play-icon" src="img/PLAY-ICON1.png" alt="">';
        buttonID.dataset.playing = 'false';
        playMusic.pause();
    } else {
        buttonID.innerHTML = '<img id="play-icon1" src="img/pause-icon.svg" alt="">';
        playMid.innerHTML = '<img id="play-icon1" src="img/pause-icon.svg" alt="">';
        buttonID.dataset.playing = 'true';
        playMusic.play();
    }
    
    //playSong(id); // Phát nhạc
}
document.querySelectorAll('.play-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        handlePlayClick(index + 1);
    });
});
