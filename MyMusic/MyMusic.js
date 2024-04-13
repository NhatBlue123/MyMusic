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
    url: '',
    time: '3:00',
    img: 'imgMusic/MGMT_-_Little_Dark_Age.png',
},{
    nameMusic: 'Nang am xa dan',
    author: 'Son Tung MTP',
    url: 'C:/',
    time: '3:00',
    img: ''
},{
    nameMusic: 'Marry on a cross',
    author: 'Ghost',
    url: 'C:/',
    time: '3:00',
    img: ''
},{
    nameMusic: 'Rolling in the Deep',
    author: 'Adele',
    url: 'C:/',
    time: '3:00',
    img: ''
}

];
let isPlay = false;
let imgCenter = document.getElementById('img-center');
let nameMusic = document.getElementById('name-music');
let authorMusic = document.getElementById('author-music');
function clickPlay(id)
{
    let buttonID = document.getElementById(`play-button${id}`);
    if(isPlay === false)
    {
        buttonID.innerHTML = '<img id="play-icon1" src="img/pause-icon.svg" alt="">';
        isPlay = true;
    }
    else{
        buttonID.innerHTML = '<img id="play-icon" src="img/PLAY-ICON1.png" alt="">';   
        isPlay = false;
    }

    if(id === '1')
    {
        imgCenter.src = `${songs[0].img}`;
        nameMusic.innerHTML = `${songs[0].nameMusic}`;
        authorMusic.innerHTML = `${songs[0].author}`;
    }
}