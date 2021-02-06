
const ham=document.getElementById("ham");
ham.addEventListener('click',()=>{
    ham.style.zIndex="0";
    document.getElementById("ul").style.width="100%";
    document.getElementById("multi").style.display="initial";
    document.getElementById("logo").style.display="initial";
})
document.getElementById("multi").addEventListener('click',()=>{
    document.getElementById("multi").style.display="none";
    document.getElementById("ul").style.width="0%";
    document.getElementById("logo").style.display="none";
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/***************************************************/

/***********************Mode***********************/

const style = document.getElementById("sheet");
const modeIcon = document.getElementById("mode-icon"); 


var LD = undefined;
if(window.localStorage.getItem('LD')){
    LD = window.localStorage.getItem('LD');
}
else{
    LD = 0;
}

if(LD==0){
    style.href="./css/indexstyle.css";
    modeIcon.className="far fa-moon";
}
else{
    style.href="./css/Darkindex.css";
    modeIcon.className="far fa-sun";
}

modeIcon.addEventListener('click',()=>{

    if(style.href.includes('indexstyle')){
        style.href="./css/Darkindex.css";
        modeIcon.className="far fa-sun";
        LD=1;
        window.localStorage.setItem('LD',LD);
    }
    else if(style.href.includes('Darkindex')){
        style.href="./css/indexstyle.css";
        modeIcon.className="far fa-moon";
        LD=0;
        window.localStorage.setItem('LD',LD);
    }
    
})
/***************************************************/

const lang=document.getElementById('lang');

const n1=document.getElementById("n1");
const n2=document.getElementById("n2");
const n3=document.getElementById("n3");
const n4=document.getElementById("n4");
const n5=document.getElementById("n5");
const n6=document.getElementById("n6");
/*--------------*/

const s1=document.getElementById("s1");
const s2=document.getElementById("s2");
const s3=document.getElementById("s3");

const head1=document.getElementById("head1");
const para1=document.getElementById("para1");

var LL = undefined;
if(window.localStorage.getItem('LL')){
    LL = window.localStorage.getItem('LL');
}
else{
    LL = 0;
}

if(LL==0){
    lang.innerText="عربي";
    n1.innerText="Home";
    n1.style.fontFamily=`'Julius Sans One', cursive`;
    n2.innerText="Topics";
    n2.style.fontFamily=`'Julius Sans One', cursive`;
    n3.innerText="About US";
    n3.style.fontFamily=`'Julius Sans One', cursive`;
    n4.innerText="Home";
    n4.style.fontFamily=`'Julius Sans One', cursive`;
    n5.innerText="Topics";
    n5.style.fontFamily=`'Julius Sans One', cursive`;
    n6.innerText="About US";
    n6.style.fontFamily=`'Julius Sans One', cursive`;

    
    s1.innerText="Who Exactly Are We?";
    s1.style.fontFamily=`'Julius Sans One', cursive`;
    s2.innerText="What Is Stackoverflow?";
    s2.style.fontFamily=`'Julius Sans One', cursive`;
    s3.innerText="Discord .. The meat and bones";
    s3.style.fontFamily=`'Julius Sans One', cursive`;
    head1.innerText="ENTARTAINMENT WHILE LEARNING";
    head1.style.fontFamily=`'Julius Sans One', cursive`;
    para1.innerText=`read exciting topics about technology that will blow your mind with our very 
    own event "you know nothing about comuter science" which will direct you to 
    true way of computing and stuff 
    Here.`;
    para1.style.fontFamily=`'Julius Sans One', cursive`;
}
else{
    lang.innerText="English";
    n1.innerText="الرئيسيه";
    n1.style.fontFamily="Rakkas, sans-serif"
    n2.innerText="المواضيع";
    n2.style.fontFamily="Rakkas, sans-serif"
    n3.innerText="من نحن؟";
    n3.style.fontFamily="Rakkas, sans-serif"
    n4.innerText="الرئيسيه";
    n4.style.fontFamily="Rakkas, sans-serif"
    n5.innerText="المواضيع";
    n5.style.fontFamily="Rakkas, sans-serif"
    n6.innerText="من نحن؟";
    n6.style.fontFamily="Rakkas, sans-serif"

    
    s1.innerText="أحنا مين بالظبط؟";
        s1.style.fontFamily=`'Reem Kufi', sans-serif`;
        s2.innerText="هو أي الاستاك أوفرفلو دا؟";
        s2.style.fontFamily=`'Reem Kufi', sans-serif`;
        s3.innerText="الديسكورد و حواراته";
        s3.style.fontFamily=`'Reem Kufi', sans-serif`;

        head1.innerText="أنبسط و أنتا بتتعلم";
    head1.style.fontFamily=`'Reem Kufi', sans-serif`;
    para1.innerText=`أقري عن مواضيع شيقه جدا معانا اللي هتنزل من الأيفينت بتاعنا العظيم
    أنتا متعرفش حاجه عن حاسبات و اللي من خلاله هتتعلم 
    في مجال البرمجة و الحاسبات حاجات فعليا هتفيدك
    `;
    para1.style.fontFamily="Rakkas, sans-serif";

}
lang.addEventListener('click',()=>{

    if(lang.innerText.includes('عربي')){
        lang.innerText="English";
        n1.innerText="الرئيسيه";
        n1.style.fontFamily="Rakkas, sans-serif"
        n2.innerText="المواضيع";
        n2.style.fontFamily="Rakkas, sans-serif"
        n3.innerText="من نحن؟";
        n3.style.fontFamily="Rakkas, sans-serif"
        n4.innerText="الرئيسيه";
        n4.style.fontFamily="Rakkas, sans-serif"
        n5.innerText="المواضيع";
        n5.style.fontFamily="Rakkas, sans-serif"
        n6.innerText="من نحن؟";
        n6.style.fontFamily="Rakkas, sans-serif"
     /*--------------*/
        
        s1.innerText="أحنا مين بالظبط؟";
        s1.style.fontFamily=`'Reem Kufi', sans-serif`;
        s2.innerText="هو أي الاستاك أوفرفلو دا؟";
        s2.style.fontFamily=`'Reem Kufi', sans-serif`;
        s3.innerText="الديسكورد و حواراته";
        s3.style.fontFamily=`'Reem Kufi', sans-serif`;

        head1.innerText="أتعلم مننا";
        head1.style.fontFamily=`'Reem Kufi', sans-serif`;
        para1.innerText=`أقري عن مواضيع شيقه جدا معانا اللي هتنزل من الأيفينت بتاعنا العظيم
        أنتا متعرفش حاجه عن حاسبات و اللي هيكون وجهه ناحيه حاجات هتفيدك
        في مجال البرمجة و الحاسبات
        `;
        para1.style.fontFamily="Rakkas, sans-serif";


        LL=1;
        window.localStorage.setItem('LL',LL);
    }
    else if(lang.innerText.includes('English')){
        lang.innerText="عربي";
        n1.innerText="Home";
    n1.style.fontFamily=`'Julius Sans One', cursive`;
    n2.innerText="Topics";
    n2.style.fontFamily=`'Julius Sans One', cursive`;
    n3.innerText="About US";
    n3.style.fontFamily=`'Julius Sans One', cursive`;
    n4.innerText="Home";
    n4.style.fontFamily=`'Julius Sans One', cursive`;
    n5.innerText="Topics";
    n5.style.fontFamily=`'Julius Sans One', cursive`;
    n6.innerText="About US";
    n6.style.fontFamily=`'Julius Sans One', cursive`;


        s1.innerText="Who Exactly Are We?";
    s1.style.fontFamily=`'Julius Sans One', cursive`;
    s2.innerText="What Is Stackoverflow?";
    s2.style.fontFamily=`'Julius Sans One', cursive`;
    s3.innerText="Discord .. The meat and bones";
    s3.style.fontFamily=`'Julius Sans One', cursive`;
    
    head1.innerText="ENTARTAINMENT WHILE LEARNING";
    head1.style.fontFamily=`'Julius Sans One', cursive`;
    para1.innerText=`read exciting topics about technology that will blow your mind with our very 
    own event "you know nothing about comuter science" which will direct you to 
    true way of computing and stuff 
    Here.`;
    para1.style.fontFamily=`'Julius Sans One', cursive`;

        LL=0;
        window.localStorage.setItem('LL',LL);
    }
    
})


