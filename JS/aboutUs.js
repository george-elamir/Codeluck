
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
    style.href="./CSS/aboutUs.css";
    modeIcon.className="far fa-moon";
}
else{
    style.href="./CSS/Darkabout.css";
    modeIcon.className="far fa-sun";
}

modeIcon.addEventListener('click',()=>{

    if(style.href.includes('aboutUs')){
        style.href="./CSS/Darkabout.css";
        modeIcon.className="far fa-sun";
        LD=1;
        window.localStorage.setItem('LD',LD);
    }
    else {
        style.href="./CSS/aboutUs.css";
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

const head1=document.getElementById("head1");
const para1=document.getElementById("para1");
const head2=document.getElementById("head2");
const para2=document.getElementById("para2");

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

    
    
    head1.innerText="Who are we?";
    para1.innerText=`Codeluck is an orgnization that has a main focus of teaching
    copmuter science students about topics that may help them in their careers
    and education.
    `;
    head2.innerText="mawaraaElscreen?";
    para2.innerText=`They are the engine of the orgnaiztion, responible for managing
    the project and the team behind the project. they are computer science students
    helping computer science students.
    `;
    head1.style.fontFamily=`'Julius Sans One', cursive`;
    para1.style.fontFamily=`'Julius Sans One', cursive`;
    head2.style.fontFamily=`'Julius Sans One', cursive`;
    para2.style.fontFamily=`'Julius Sans One', cursive`;

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


    head1.innerText="أنبسط و أنتا بتتعلم";
        para1.innerText=`أقري عن مواضيع شيقه جدا معانا اللي هتنزل من الأيفينت بتاعنا العظيم
        "أنتا متعرفش حاجه عن حاسبات" و اللي هيكون وجهه ناحيه حاجات هتفيدك
        في مجال البرمجة و الحاسبات
        من هنا.`;
        head2.innerText="ماوراء الأسكرين؟";
        para2.innerText=`هما قلب و صلب المجموعة ، مسؤلين عن إداره و تنظيم 
        المشروع و الفريق المسؤال عن المشروع ، هم طلاب حاسبات و معلومات
        متوافرون لخدمة طلاب الحاسبات و المعلومات
        `;
        head1.style.fontFamily=`'Reem Kufi', sans-serif`;
        para1.style.fontFamily="Rakkas, sans-serif"
        head2.style.fontFamily=`'Reem Kufi', sans-serif`;
        para2.style.fontFamily="Rakkas, sans-serif"
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

        head1.innerText="أنبسط و أنتا بتتعلم";
        para1.innerText=`أقري عن مواضيع شيقه جدا معانا اللي هتنزل من الأيفينت بتاعنا العظيم
        "أنتا متعرفش حاجه عن حاسبات" و اللي هيكون وجهه ناحيه حاجات هتفيدك
        في مجال البرمجة و الحاسبات
        من هنا.`;
        head2.innerText="ماوراء الأسكرين؟";
        para2.innerText=`هما قلب و صلب المجموعة ، مسؤلين عن إداره و تنظيم 
        المشروع و الفريق المسؤال عن المشروع ، هم طلاب حاسبات و معلومات
        متوافرون لخدمة طلاب الحاسبات و المعلومات
        `;
        head1.style.fontFamily=`'Reem Kufi', sans-serif`;
        para1.style.fontFamily="Rakkas, sans-serif"
        head2.style.fontFamily=`'Reem Kufi', sans-serif`;
        para2.style.fontFamily="Rakkas, sans-serif"


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
    
        
    head1.innerText="Who are we?";
    para1.innerText=`Codeluck is an orgnization that has a main focus of teaching
    copmuter science students about topics that may help them in their careers
    and education.
    `;
    head2.innerText="mawaraaElscreen?";
    para2.innerText=`They are the engine of the orgnaiztion, responible for managing
    the project and the team behind the project. they are computer science students
    helping computer science students.
    `;
    head1.style.fontFamily=`'Julius Sans One', cursive`;
    para1.style.fontFamily=`'Julius Sans One', cursive`;
    head2.style.fontFamily=`'Julius Sans One', cursive`;
    para2.style.fontFamily=`'Julius Sans One', cursive`;
        LL=0;
        window.localStorage.setItem('LL',LL);
    }
    
})


