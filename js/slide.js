let slide= document.getElementById('slide');

var i = 0; 
let img = document.getElementById('slide').children;
let img_slide = document.getElementById('slide_matiere').children;

function slidejs()
{
    setInterval(function(){

            if(i == 0){
                img[0].classList.remove('hide');
                img[1].classList.add('hide');
                img[2].classList.add('hide');  

                img_slide[0].classList.remove('hide');
                img_slide[1].classList.add('hide');
                img_slide[2].classList.add('hide');  
            }
            if (i == 1) {
                img[1].classList.remove('hide');
                img[2].classList.add('hide');
                img[0].classList.add('hide');  

                img_slide[1].classList.remove('hide');
                img_slide[2].classList.add('hide');
                img_slide[0].classList.add('hide');  
            }
            if (i == 2) {
                img[2].classList.remove('hide');
                img[1].classList.add('hide');
                img[0].classList.add('hide');  

                img_slide[2].classList.remove('hide');
                img_slide[1].classList.add('hide');
                img_slide[0].classList.add('hide'); 
            }
            i++;
            if (i ==3) {
                i=0;
            }
        
    },2000);
};

//Récupère le btn
var mybutton = document.getElementById("bouton");

// Quand on scrll de X px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quan on click sur btn
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}