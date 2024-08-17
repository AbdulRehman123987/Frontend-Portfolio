function setActive(clickedButton){
    let navbtn = document.getElementsByClassName('navbtn');
    for (let i = 0; i < navbtn.length; i++) {
      navbtn[i].classList.remove('active');
    }
    clickedButton.classList.add('active');
  }
//===============Code For Slider==============
let flag=0;
function controller(x){
    flag=flag+x;
    slideShow(flag);
}
slideShow(flag);
function slideShow(num){
    let slides=document.getElementsByClassName("sv");
    if(num == slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    for(let y of slides){
        y.style.display="none";
    }
    slides[num].style.display="block";
}

