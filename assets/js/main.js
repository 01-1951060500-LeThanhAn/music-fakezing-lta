var swiper = new Swiper(".list", {
  slidesPerView: 3,
  loop: true,

  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".playlist", {
  slidesPerView: 5,
  loop: true,

  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1024: {
    slidesPerView: 3
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".mv_singer", {
  slidesPerView: 5,
  loop: true,

  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3
      },
    1200: {
      slidesPerView: 5,
    },
  },
});

const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
const heading = $("header h2");
const cdThumb = $(".cd-thumb img");
const audio = $("#audio");
const cd = $(".cd");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progressBar = $("#progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random i");
const repeatBtn = $(".btn-repeat i");
const musicList = $(".list__music");
const progress2 = $(".progress2");
const endTime = $(".end__time")
const startTime = $(".start__time")
const songList = $(".list__song")
const volumeIcon = $(".speaker__icon")

const STORAGE_SONGS = "THANHAN"
const apps = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isMute: false,
  timesong: 0,
  config: JSON.parse(localStorage.getItem(STORAGE_SONGS)) || {},
  songs: [
    {
      name: "Chạy về nơi phía anh",
      singer: "Khắc Việt",
      path: "./assets/music/Chay-Ve-Noi-Phia-Anh-Khac-Viet.mp3",
      image: "https://i.ytimg.com/vi/RaoBKCKIDAI/maxresdefault.jpg",
    },
    {
      name: "Anh đã lạc vào",
      singer: "Green",
      path: "./assets/music/anhdalacvao.mp3",
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/1/a/a/b1aa55127e859a60291163b791000052.jpg",
    },
    {
      name: "Gieo quẻ",
      singer: "Hoàng T.Linh",
      path: "./assets/music/GieoQue.mp3",
      image: "https://i.ytimg.com/vi/Q6ZNsHvspEg/maxresdefault.jpg",
    },
    {
      name: "Lưu số em đi",
      singer: "Huỳnh Văn, Vũ Phụng Tiên",
      path: "./assets/music/LuuSoEmDi.m4a",
      image: "https://meta.vn/Data/image/2021/12/21/loi-bai-hat-luu-so-em-di-4.jpg",
    },
    {
      name: "Chạy về khóc với anh",
      singer: "Erik, Duzme Remix",
      path: "./assets/music/ChayVeKhocVoiAnh.mp3",
      image: "https://meta.vn/Data/image/2022/02/07/loi-bai-hat-chay-ve-khoc-voi-anh-1.jpg",
    },
    {
      name: "Váy cưới",
      singer: "HuyLee, Trung Tự",
      path: "./assets/music/vaycuoi.m4a",
      image: "https://i.ytimg.com/vi/f6pOpUZ1K90/maxresdefault.jpg",
    },
    {
      name: "Aí Nộ",
      singer: "Masew, Khoi Vu",
      path: "./assets/music/AiNo1-MasewKhoiVu-7078913.mp3",
      image: "https://i.scdn.co/image/ab67616d0000b273267981c751490ccaf01d7c5b",
    },
    {
      name: "Anh thanh niên",
      singer: "HuyR",
      path: "./assets/music/Anh-Thanh-Nien-HuyR.mp3",
      image: "https://i.ytimg.com/vi/HPL74s4VPdk/maxresdefault.jpg",
    },
    {
      name: "Chỉ anh hiểu em",
      singer: "Khắc Việt",
      path: "./assets/music/Chi-Anh-Hieu-Em-Khac-Viet.mp3",
      image: "https://i.ytimg.com/vi/sRJTzgGGfDc/maxresdefault.jpg",
    },
    {
      name: "Chúng ta của hiện tại",
      singer: "Sơn Tùng MTP",
      path: "./assets/music/ChungTaCuaHienTaiThienHiXHighFrequencyRemix-SonTungMTP-6893159.mp3",
      image: "https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d",
    },
    {
      name: "Có chắc yêu là đây",
      singer: "Sơn Tùng MTP",
      path: "./assets/music/CoChacYeuLaDayOnionnRemix-SonTungMTPOnionn-7022615.mp3",
      image:
        "https://vtv1.mediacdn.vn/thumb_w/650/2020/7/3/1061332173675372452476431818456362453126714o-1593780823287457624164-crop-1593780866985947628599.jpg",
    },
    {
      name: "Có hẹn với thanh xuân",
      singer: "MONSTAR",
      path: "./assets/music/cohenvoithanhxuan.m4a",
      image: "https://i.ytimg.com/vi/vpRi8S6uXAg/maxresdefault.jpg",
    },
    {
      name: "Gác lại âu lo",
      singer: "Da LAB, Miu Lê",
      path: "./assets/music/GacLaiAuLoZangRemix-DaLABMiuLemZang-7128522.mp3",
      image: "https://i.ytimg.com/vi/ECxVfrwwTp0/maxresdefault.jpg",
    },
    {
      name: "Hôm nay em cưới rồi",
      singer: "Khải Đăng",
      path: "./assets/music/HomNayEmCuoiRoiLive-KhaiDang-6847347.mp3",
      image: "https://i.ytimg.com/vi/NuWAl7-Vkwk/maxresdefault.jpg",
    },
    {
      name: "Nơi này có anh",
      singer: "Sơn Tùng MTP",
      path: "./assets/music/NoiNayCoAnhMasewRemix-SonTungMTP-4816830.mp3",
      image: "https://i.ytimg.com/vi/FN7ALfpGxiI/maxresdefault.jpg",
    },
    {
      name: "Muộn rồi mà sao còn",
      singer: "Sơn Tùng MTP",
      path: "./assets/music/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3",
      image: "https://i.scdn.co/image/ab67616d0000b27329f906fe7a60df7777b02ee1",
    },
    {
      name: "Tháng tư là lời nói...",
      singer: "Hà Anh Tuấn",
      path: "./assets/music/Thang-Tu-La-Loi-Noi-Doi-Cua-Em-Ha-Anh-Tuan.mp3",
      image: "https://i.ytimg.com/vi/UCXao7aTDQM/maxresdefault.jpg",
    },
  ],
  setConfig: function(key,value) {
     this.config[key] = value
     localStorage.setItem(STORAGE_SONGS, JSON.stringify(this.config))
  },
 
  loadConfig: function() {
     this.isRandom = this.config.isRandom
     this.isRepeat = this.config.isRepeat
  },

  render: function() {
    const htmls = this.songs.map((song, index) => {
      return `
            <div data-index=${index} class="song ${
        index === this.currentIndex ? "active" : ""
      }">
            <div class="thumb">
              <span>${index + 1}</span>
              <img
                src=${song.image}
              />
              <div class="thumb__info">
                <h4>${song.name}</h4>
                <p>${song.singer}</p>
              </div>
            </div>
            <div class="body">
              <h4 class="title">${song.name}</h4>
             
            </div>
            <div class="time__song">
              <span>4:00</span>
            </div>
            <div class="heart">
              <i class="fa fa-heart"></i>
            </div>
            <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
          </div>
            `;
    });

    musicList.innerHTML = htmls.join("");
  },

  renderList: function() {
  const htmlList = this.songs.slice(0,8).map((song, index) => {
    return `
    <div class="song">
            <div class="thumb">
              <img src=${song.image} />
              <div class="thumb__info">
                <h4>${song.name}</h4>
                <p>${song.singer}</p>
              </div>
            </div>
            <div class="option">
            <i class="bi bi-three-dots-vertical"></i>
            </div>
          </div>
    `
  })

  songList.innerHTML = htmlList.join("")
  },
  defineProperties: function() {
    Object.defineProperty(this, "currentsong", {
      get: function() {
        return this.songs[this.currentIndex];
      },
    });
  },

  loadSong: function() {
    heading.textContent = this.currentsong.name;
    cdThumb.src = this.currentsong.image;
    audio.src = this.currentsong.path;
    console.log(heading, cdThumb, audio);
  },

  handleEvent: function() {
    const _this = this;

    const cdAnimate = cdThumb.animate(
      [
        {
          transform: `rotate(360deg)`,
        },
      ],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );

    cdAnimate.pause();

    //xu li khi play click
    playBtn.onclick = function() {
      if (_this.isPlaying) {
        audio.pause();
        cdAnimate.pause();
      } else {
        audio.play();
        cdAnimate.play();
      }
    };

    //xu li khi song play
    audio.onplay = function() {
      _this.isPlaying = true;
      player.classList.add("playing");
    };

    //xu li khi song bi pause
    audio.onpause = function() {
      _this.isPlaying = false;
      player.classList.remove("playing");
    };

    //xu li seek

    audio.ontimeupdate = function (e) {
      // console.log(audio.currentTime / audio.duration* 100);
      if (audio.duration) {
        const currentMinute = Math.floor(audio.currentTime/60);
        const currentSecond =Math.floor(audio.currentTime%60)
        const progressCurrent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        startTime.innerHTML =`0${currentMinute}:${currentSecond>9?currentSecond:'0'+currentSecond}`;
        progressBar.value = progressCurrent;
      }
    };

    //xu li tua songs

    progressBar.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;

      audio.currentTime = seekTime;
    };

    //xu li next songs
    nextBtn.onclick = function() {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.nextSong();
      }
      _this.render();
     
      _this.scrollActiveSong();
      audio.play();
    };

    //xu li prev songs

    prevBtn.onclick = function() {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.prevSong();
      }
      _this.render();
   
      _this.scrollActiveSong();
      audio.play();
    };

    //xu li random song

    randomBtn.onclick = function() {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom)
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    //xuli khi ended songs

    audio.onended = function() {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    //xu li repeat songs

    repeatBtn.onclick = function() {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat)
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    //xu li click songs

    musicList.onclick = function (e) {
      console.log(e.target);
      const nodeSong = e.target.closest(".song:not(.active)");
      if (nodeSong || e.target.closest(".song .heart i")) {
        console.log(nodeSong.dataset.index);
        _this.currentIndex = Number(nodeSong.dataset.index)
        
        _this.loadSong();
      
        _this.render();
       
        audio.play();
      }
    };

   

    // xu li dieu chinh am Thanh

    progress2.onchange = function(e) {
      audio.volume = (e.target.value / 100)
    } 

    //xu li bat tat am thanh

    volumeIcon.onclick = function() {
      _this.isMute = !_this.isMute
      if(_this.isMute) {
        audio.volume = 0
        progress2.value = 0
      } else {
        audio.volume = _this.volume / 100
        progress2.value = _this.volume
      }
    }


    //xu li load duration song

    audio.onloadeddata = function() {
      _this.timesong = audio.duration.toFixed()

      var seconds = _this.timesong%60
      endTime.innerHTML =`0${Math.floor(_this.timesong/60)}:${seconds>9?seconds:'0'+seconds}`;
    }
  },
  nextSong: function() {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadSong();
  },
  prevSong: function() {
    this.currentIndex--;
    if (this.currentIndex <= 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadSong();
  },

  randomSong: function() {
    let newSongIndex;
    do {
      newSongIndex = Math.floor(Math.random() * this.songs.length);
    } while (newSongIndex === this.currentIndex);

    this.currentIndex = newSongIndex;
    this.loadSong();
  },

 

  scrollActiveSong: function() {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 500);
  },

  start: function() {
   
    this.defineProperties();
    this.loadConfig();
   
    this.render();
    this.renderList()
    this.loadSong();
    this.handleEvent();

    repeatBtn.classList.toggle('active', _this.isRepeat)
    randomBtn.classList.toggle('active', _this.isRandom)
  },
};

apps.start();
