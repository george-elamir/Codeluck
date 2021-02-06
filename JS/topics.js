
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
    style.href="./CSS/lighttopics.css";
    modeIcon.className="far fa-moon";
}
else{
    style.href="./CSS/darktopics.css";
    modeIcon.className="far fa-sun";
}

modeIcon.addEventListener('click',()=>{

    if(style.href.includes('lighttopics')){
        style.href="./css/darktopics.css";
        modeIcon.className="far fa-sun";
        LD=1;
        window.localStorage.setItem('LD',LD);
    }
    else {
        style.href="./css/lighttopics.css";
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

const mh=document.getElementById("main-header");
const mp=document.getElementById("main-para");
const google=document.getElementById("google");
const discord=document.getElementById("discord");
const stack=document.getElementById("stack");

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

    mh.innerText="OUR TOPICS";
    mh.style.fontFamily=`'Permanent Marker', cursive`;
    mp.innerText="From us .. to you";
    mp.style.fontFamily=`'Permanent Marker', cursive`;
    google.innerText="Google";
    google.style.fontFamily=`'Permanent Marker', cursive`;
    discord.innerText="Discord";
    discord.style.fontFamily=`'Permanent Marker', cursive`;
    stack.innerText="stack";
    stack.style.fontFamily=`'Permanent Marker', cursive`;
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

    mh.innerText="مواضيعنا";
    mh.style.fontFamily=`'Reem Kufi', sans-serif`;
    mp.innerText="مننا.. لك";
    mp.style.fontFamily=`'Reem Kufi', sans-serif`;
    google.innerText="جوجل";
        google.style.fontFamily="Rakkas, sans-serif";
        discord.innerText="ديسكورد";
        discord.style.fontFamily="Rakkas, sans-serif";
        stack.innerText="ستاك اوفرفلو";
        stack.style.fontFamily="Rakkas, sans-serif";
        
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

        mh.innerText="مواضيعنا";
        mh.style.fontFamily=`'Reem Kufi', sans-serif`;
        mp.innerText="مننا .. لك";
        mp.style.fontFamily=`'Reem Kufi', sans-serif`;
        google.innerText="جوجل";
        google.style.fontFamily="Rakkas, sans-serif";
        discord.innerText="ديسكورد";
        discord.style.fontFamily="Rakkas, sans-serif";
        stack.innerText="ستاك اوفرفلو";
        stack.style.fontFamily="Rakkas, sans-serif";
        

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
            /*--------------*/
        mh.innerText="OUR TOPICS";
        mh.style.fontFamily=`'Permanent Marker', cursive`;
        mp.innerText="From us .. to you";
        mp.style.fontFamily=`'Permanent Marker', cursive`;
        google.innerText="Google";
        google.style.fontFamily=`'Permanent Marker', cursive`;
        discord.innerText="Discord";
        discord.style.fontFamily=`'Permanent Marker', cursive`;
        stack.innerText="stack";
        stack.style.fontFamily=`'Permanent Marker', cursive`;
        

        LL=0;
        window.localStorage.setItem('LL',LL);
    }
    
})


