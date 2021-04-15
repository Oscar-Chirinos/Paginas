/*FUNCION DE APERTURA*/
let nav = document.querySelector('.nav-fix');
let ham = document.querySelector('.icon-ham');
let head = document.querySelector('.header');
let containerwork = document.querySelector('.conwork');
let containerfoot = document.querySelector('.container-footer');
let gallery = document.querySelector('.gallery')
function apertura(){   
    nav.classList.toggle('nav-active');
    nav.style.transition= 'transform 0.5s ease-in-out';
    nav.style.boxShadow='1.5px 0px 5px rgb(8, 8, 8)';
    head.classList.toggle('header1');
    ham.classList.toggle('toggle')
    clickhide2.classList.toggle('header1');
    containerwork.classList.toggle('header1');
    gallery.classList.toggle('header1');
    containerfoot.classList.toggle('header1');
    
} 
/*FUNCION DE SCROLL*/
let container = document.querySelector('.navbar-container');
let yscroll = window.pageYOffset;
 function scrolling () {
    let ymoving = window.pageYOffset;
       if((screen.width <= 768),(yscroll >= ymoving)){
                    container.style.transform='translateY(0)';
                    nav.classList.remove('nav-active');
                    head.classList.remove('header1');
                    ham.classList.remove('toggle'); 
                    clickhide2.classList.remove('header1');
                    containerwork.classList.remove('header1');
                    gallery.classList.remove('header1');
                    containerfoot.classList.remove('header1');
                    container.classList.toggle('sticky',window.scrollY >0);
                      
                 }              
                 else {       
                     container.style.transform='translateY(-100%)';
                     nav.classList.remove('nav-active');
                     head.classList.remove('header1');
                     ham.classList.remove('toggle');  
                     clickhide2.classList.remove('header1');
                     containerwork.classList.remove('header1');
                     gallery.classList.remove('header1');
                     containerfoot.classList.remove('header1');       
                  }
                  

    yscroll=ymoving;  
}

/*FUNCION DE RESIZE */
function res(){
    if(screen.width > 0){
        nav.style.removeProperty('transition');
        nav.style.removeProperty('box-shadow')
        nav.classList.remove('nav-active');        
        container.style.transform='translateY(0)';
        head.classList.remove('header1');
        ham.classList.remove('toggle');
        clickhide2.classList.remove('header1'); 
        containerwork.classList.remove('header1');
        gallery.classList.remove('header1');
        containerfoot.classList.remove('header1');  
    }}
/* FUNCION ONCLICK TO HIDE */
let clickhide = document.getElementById('header2');
let clickhide2 = document.querySelector('.container-slider');
function displayDate () {
    nav.classList.remove('nav-active'); 
    head.classList.remove('header1');
    ham.classList.remove('toggle');
    clickhide2.classList.remove('header1');
    containerwork.classList.remove('header1');
    gallery.classList.remove('header1');
    containerfoot.classList.remove('header1');
        
}


/*EVENTOS */
ham.addEventListener('click',apertura);
window.addEventListener('resize',res);
clickhide.onclick = displayDate;
clickhide2.onclick = displayDate;
gallery.onclick= displayDate;
containerfoot.onclick =displayDate;
containerwork.onclick = displayDate;
window.onscroll = scrolling
/*SLIDER */
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

   /*JAVASCRIPT FOR IMAGE SLIDER MANUAL NAVIGATION*/
   var manualNav = function(manual){
    slides.forEach((slide) => {
      slide.classList.remove('active');

      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
  }

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      manualNav(i);
      currentSlide = i;
    });
  });

  // Javascript for image slider autoplay navigation
  var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
      setTimeout(function(){
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active');
        });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    }, 5000);
    }
    repeater()
  }
  repeat()
