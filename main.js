
let btnToggleNav = document.querySelector('.btn-check');
let navSideBar = document.querySelectorAll('.deroule');

console.log(navSideBar)
btnToggleNav.addEventListener("click", function () {
  navSideBar.forEach(function(li){li.classList.toggle("transf")});
});


// Apparition des paragraphes

const ratio = .01
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
    //  observer.unobserve(entry.target)
    } else {
      console.log('invisible');
    }
    })
}

const observerOne = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r){
observerOne.observe(r);
})



// Premier test pour faire le lien avec les menus et section

/*
var bigMenu = function () {
    detect = document.querySelector('.detect');
    menu = document.querySelector('.liensmenu');
  if (detect.getBoundingClientRect().top < 0){
   menu.classList.add('active')}
        else {
  menu.classList.remove('active')
}}

window.addEventListener('scroll', bigMenu )
*/






// SI on arrive sur une section, le titre de celui-ci grossi dans le MENU

const threshold = .6

const activate = function (elem) {
  const id = elem.getAttribute('id')
  console.log(id)
  const anchor = document.querySelector(`a[href="#${id}"]`)
  if (anchor === null) {
    return null
  }
  anchor.parentElement.parentElement
    .querySelectorAll('.active')
    .forEach(node => node.classList.remove('active'))
    anchor.classList.add('active')
}

const callback = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      activate(entry.target)
    }
  })
}

const spies =  document.querySelectorAll('.apparition');

  const observer = new IntersectionObserver(callback, {threshold
  })
  spies.forEach(function (spy) {
  observer.observe(spy)
})





//PLAYER AUDIO

  var audio = document.querySelector('#audioCafeMeo');
  var player = document.querySelector('.section3 > div');
  var playLogo = document.querySelector('.section3 > div div');


  var jouerPlayer = function(){
    if (audio.paused) {
        audio.play()
        playLogo.classList.remove('cercle_play')
        playLogo.classList.add('cercle_pause')
      } else {
        audio.pause()
        playLogo.classList.remove('cercle_pause')
        playLogo.classList.add('cercle_play')
      }
  };

player.addEventListener("click", jouerPlayer);








// HOVER VIDEO

var allVideo = document.querySelectorAll('video');

allVideo.forEach(function (videoItem){
  videoItem.addEventListener('mouseenter', function(){
      videoItem.play()
    });
    videoItem.addEventListener('mouseleave', function(){
        videoItem.pause()
      });
});


// VIDEO QUI SOUVRE MRKAT

var videoMrKat = document.querySelector('.section2 img');
var section2 = document.querySelector('.section2');


var pageMrkat = function(){

      var newDiv = document.createElement("div");
      section2.prepend(newDiv)
      document.querySelector('.section2 div').classList.add('video_jeux')

      var newDiv2 = document.createElement("div");
      document.querySelector('.section2 div').prepend(newDiv2)
      document.querySelector('.section2 div > div').setAttribute('id', 'videoKaat')

      document.querySelector('.section2 div')

 var videoKaat = document.getElementById('videoKaat');

 var options01 = {
      id: 365525208,
      autoplay: true,
    };


    var video01Player = new Vimeo.Player('videoKaat', options01);


    // VIDEO QUI SE FERME

    var pageFond = document.querySelector('.section2 div')

    pageFond.addEventListener("click", function(){
      this.style.animationName = "slideout";
      setTimeout(function(){pageFond.remove()}, 2000);
        //pageFond.remove()
    });

};

videoMrKat.addEventListener("click", pageMrkat);




// VIDEO QUI SOUVRE FENDI

var videoFendi = document.querySelectorAll('.section2 img')[1];

var pageFrendi = function(){

      var newDiv = document.createElement("div");
      section2.prepend(newDiv)
      document.querySelector('.section2 div').classList.add('video_jeux')

      var newDiv2 = document.createElement("div");
      document.querySelector('.section2 div').prepend(newDiv2)
      document.querySelector('.section2 div > div').setAttribute('id', 'videoKaat')

      document.querySelector('.section2 div')

 var videoKaat = document.getElementById('videoKaat');

 var options04 = {
      id: 442737591,
      autoplay: true,
    };


    var video01Player = new Vimeo.Player('videoKaat', options04);


    // VIDEO QUI SE FERME

    var pageFond = document.querySelector('.section2 div')

    pageFond.addEventListener("click", function(){
      this.style.animationName = "slideout";
      setTimeout(function(){pageFond.remove()}, 2000);
        //pageFond.remove()
    });

};

videoFendi.addEventListener("click", pageFrendi);



// VIDEO QUI SOUVRE RAYBAN


var videoRayban = document.querySelectorAll('.section2 img')[2];

var pageRayban = function(){

      var newDiv = document.createElement("div");
      section2.prepend(newDiv)
      document.querySelector('.section2 div').classList.add('video_jeux')

      var newDiv2 = document.createElement("div");
      document.querySelector('.section2 div').prepend(newDiv2)
      document.querySelector('.section2 div > div').setAttribute('id', 'videoKaat')

      document.querySelector('.section2 div')

 var videoKaat = document.getElementById('videoKaat');

 var options02 = {
      id: 365523520,
      autoplay: true,
    };


    var video01Player = new Vimeo.Player('videoKaat', options02);


    // VIDEO QUI SE FERME

    var pageFond = document.querySelector('.section2 div')

    pageFond.addEventListener("click", function(){
      this.style.animationName = "slideout";
      setTimeout(function(){pageFond.remove()}, 2000);
        //pageFond.remove()
    });

};

videoRayban.addEventListener("click", pageRayban);




// VIDEO QUI SOUVRE JEUXVIDEO


var videoJeuxInteractif = document.querySelector('.section1 img');


var pageSurvival = function (){

      var newDiv = document.createElement("div");
      section2.prepend(newDiv)
      document.querySelector('.section2 div').classList.add('video_jeux')

      var newDiv2 = document.createElement("div");
      document.querySelector('.section2 div').prepend(newDiv2)
      document.querySelector('.section2 div > div').setAttribute('id', 'videoKaat')

      document.querySelector('.section2 div')

 var videoKaat = document.getElementById('videoKaat');

 var options03 = {
      id: 365525989,
      autoplay: true,
    };

    var video01Player = new Vimeo.Player('videoKaat', options03);


    // VIDEO QUI SE FERME

    var pageFond = document.querySelector('.section2 div')

    pageFond.addEventListener("click", function(){
      this.style.animationName = "slideout";
      setTimeout(function(){pageFond.remove()}, 2000);
        //pageFond.remove()
    });
};

videoJeuxInteractif.addEventListener("click", pageSurvival);



// Progess scroll bar

let progress = document.getElementById('progressbar');
let progress2 = document.getElementById('progressbar2');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
  progress2.style.height = progressHeight + "%";

}


// Flêches retirées au scroll

window.addEventListener('scroll', function() {

  if (window.pageYOffset > 2) {
    document.querySelector('.arrow').style.display = "none";
  } else {
    document.querySelector('.arrow').style.display = "block";
  }
})

//scroll des petites barres
document.addEventListener('scroll', function(e) {
  console.log(window.pageYOffset)
  document.querySelector('.barre').style.transform = "rotateY("+ window.pageYOffset +"deg)";
  console.log(document.querySelector('.barre').style.transform = "rotateY("+ window.pageYOffset +"deg)")
});
