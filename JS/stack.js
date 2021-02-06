
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
    style.href="./CSS/lightstack.css";
    modeIcon.className="far fa-moon";
}
else{
    style.href="./CSS/darkstack.css";
    modeIcon.className="far fa-sun";
}

modeIcon.addEventListener('click',()=>{

    if(style.href.includes('lightstack')){
        style.href="./CSS/darkstack.css";
        modeIcon.className="far fa-sun";
        LD=1;
        window.localStorage.setItem('LD',LD);
    }
    else {
        style.href="./CSS/lightstack.css";
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

const hh=document.getElementById("hh");
const txt=document.getElementById("txt");

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

    hh.innerText="Chapter 1.. StackOverflow";
    hh.style.fontFamily=`'Permanent Marker', cursive`;
    txt.dir="ltr";
    txt.innerHTML=`So .. what is the science of happiness?  We can summarize eight points on it ... - Help others more than help yourself ...
    (Jeff Atwood - Founder, Stack Overflow)
    <pre></pre>
    Who hasn't heard of stack overflow ???  Most of the time we did not encounter a problem unless a solution was presented to it We put the problem on google and the first search result is the post for the same problem on this site, and most of the time we find the answer in the post in which the problem exists, so we take the solution and put it here and roughly what happens with  Most of the people, we see that this is a great unfairness of the site and a missed opportunity for you because of our post work
    We chat with you a little ...
    <pre></pre>
    Firstly, if you don't know what stack overflow is, it is a site that makes its users ask questions, say programming problems they have, or respond to other people's questions, otherwise you can vote on a specific question or answer (it often means the correct answer related to the question has a higher vote  And so on ..) and it is a site made by programmers and was created to help programmers.
    <pre></pre>
    Stack Overflow was created in September 2008 by Jeff Atwood and Joel Spolsky, before their project Geoff was - as far as he described it - criticizing Joel's work, but he was impressed with what he was doing and that he was one of the first programmers to enter the blogging arena and Joel made him realize how  The positive impact that blogging has on programmers (especially in their time, when blogging was a new thing for them), but the idea of ​​this site, which for Joel had a dream, came to them in order to facilitate the idea of ​​blogging in relation to it and make it public for everyone.
    <pre></pre>
    ⚠️ How do we use stack overflow?  We can answer this question according to your experience in programming, in the experiences of several programmers who said that this site is not complete and this may be correct in the event that you are a beginner, because of the questions and problems that are published it is preferable to be very detailed, if we put a general question  Often the answers will remain an expression of your request that you clear the question more private (literally in some of them is very difficult in this point and enters you into a big topic because of it), and does that prevent you from using it?  No, of course ... But you will search for it for the same problem as yours in the old post, and often find a solution to your problem there (you will find that posts age ranges from 5 to 9 years, and it may increase or decrease depending on the type of problem. "You find, for example, problems related to the old C language  Very, which may reach 11 years "), but in the event that you are an expert programmer, you can publish your problem and some details about it, and you will find your own answer.
    <pre></pre>
    Tips to improve your stack overflow experience:
    <pre></pre>
    1- If you have more time in your day, try to go to the site and watch people's problems and see how these problems were solved with what is related to your interest (for example if you understand a language like Java, try to see the existing problems and their solutions), you can find a huge number of information  If you make this a habit you have.
    <pre></pre>
    2- Try to post your question first on google, when you are sure that there is no clear answer you should post it there.
    <pre></pre>
    3- Avoid questions that have opinions or may lead to discussions rather than solutions, such as the question, "What is the best frame work for the web?"  Or "What is the best language for Android development?"  If this is not one of the things that are against the site's policy in the first place, then this will open a door for your problems.
    <pre></pre>
    4- If you can take 20 reputation, you can participate in the chat site, and this is a very great place for its users to discuss a topic or talk with people around the world with your same interests.
    <pre></pre>
    5 - The site has a dedicated web job, many programmers have come to work for them through the site, but we are not sure that Egypt has the same, but we mentioned it for knowledge.
    <pre></pre>
    Before concluding ... you can see many stories of the oveflow stack users and how this site helped them in their work in the post was in effect on the occasion of the site’s arrival of 10 million questions that existed on it five years ago in the first comment available (and at least I keep a look in our sources)  ⚠️ ..
    <pre></pre>
    Finally ... this was our chat about stack overflow, want to hear your opinion in the comments below the post  .Did you know before this or not?
    And if you know, have you benefited before?  And if you could not know it, did you intend to experiment or not? !!!👀
    `;
    txt.style.fontFamily=`'Julius Sans One', cursive`;

    
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

    hh.innerText="الفصل الاول .. ستاك اوفرفلو";
    hh.style.fontFamily=`'Reem Kufi', sans-serif`

    txt.innerHTML=`
    إذاً.. ما هو عِلم السعادة؟ یمكننا تلخیص ثمان نقاط فیها ... -ساعد الآخرین أكثر من مساعدة نفسك...
    (جیف آتوود- مؤسس ستاك اوفر فلو)
    <pre></pre>
    مین فینا مسمعش عن موقع ستاك أوفر فلو ؟؟؟ تقریبا مفیش مشكلة قابلتنا و اتحطت علي جوجل الا و كانت أول نتیجة نلاقیها في البحث هي بوست لنفس المشكلة على الموقع دا ، و في معظم الأحیان بنلاقي الأجابة في البوست اللي فیه المشكلة دا ف بناخد الحل نحطه عندنا و تقریبا دا تمام الحكایة مع أغلب الناس ، أحنا شایفین أن دا فیة ظلم للموقع و فرصة ضایعة علیك علشان كدا خلینا
    ندردش فیها معاك شویة...
    <pre></pre>
    ⚠️ مبدئیا لو متعرفش أي هو ستاك اوفرفلو فهو موقع بیخلي مستخدمینة یطرحوا أسئلة أو مشاكل عندهم خاصه بالبرمجة أو أنهم یجاوبوا علي أسئلة غیرهم عملها ، غیر كمان انك ممكن تعمل تصویت علي سؤال أو أجابة معینة (یعني غالبا الأجابة الصح المرتبطة بالسؤال تلاقي علیها تصویت أعلي و هكذا..) و هو موقع من صنع مبرمجین و معمول علشان یساعد المبرمجین.
    <pre></pre>
    ⚠️موقع ستاك اوفرفلو أتعمل في سبتمبر سنه 2008 على أید جیف آتوود وجویل سبولسكي ، قبل مشروعهم جیف كان –على حد وصفه – بینتقد شویة شغل جویل ، لكنه كان معجب باللي بیعملة و أنه كان من أوائل المبرمجین اللي دخلوا ساحه كتابةالمدونات و جویل خلاه یدرك مدى التأثیر الأیجابي اللي كتابة المدونات بتأثرة علي المبرمجین (خصوصا في وقتهم ، وقت كتابة المدونات كانت لسا حاجه جدیده شویه) ، بس جتلهم فكره الموقع دا اللي كانت حلم بالنسبة لجویل علشان هتسهل فكره التدوین بالنسبالة و تخلیها عامه للكل.
    <pre></pre>
    ⚠️ أزاي ممكن تستخدم ستاك اوفرفلو ؟ نقدر نجاوب علي السؤال دا علي حسب تمكنك و خبرتك في البرمجة ، في تجارب مبرمجین كتیر قالوا أن الموقع دا مش هیبقي ودي معاك في حالة أنك مبتدئ ، علشان الأسئلة و المشاكل اللي بتتنشر بیفضل أنها تكون تفصیلیة بشكل كبیر ، لو حطیت سؤال عام شویة غالبا الأجابات هتبقي عباره عن مطالبتك بأنك تخصص السؤال أكتر (حرفیا في منهم مش بیرحم في النقطة دي و بیدخلك في دوامة بسببها) ، طیب هل دا یمنعك أن تستخدمة؟ لأ طبعا...بس أنتا هتدور فیه علي نفس مشكلتك في بوست قدیم و غالبا بتلاقي حل مشكلتك هناك (بتلاقي أعمار البوستات دي بیتراوح من 5 ل 9 سنین قد تزید أو تقل علي حسب نوع المشكلة "تلاقي مثلا المشاكل المتعلقة ب لغة ال C قدیمة جدا توصل ل 11 سنة") ، أما في حالة أنك مبرمجخبیر شویة یبقي أنشر مشكلتك و شویة تفاصیل عنها و هتلاقي اللي یخلصلك الدنیا و یجاوبك.
    <pre></pre>
    ⚠️نصایح قد تحسن من تجربتك مع موقع ستاك اوفرفلو :
    <pre></pre>
    1 -لو عندك وقت فاضي في الیوم جرب تقعد علیة شویة تشوف مشاكل الناس و اتحلت ازاى بما یرتبط مع أهتماماتك (یعني لو بتفهم لغة زي الجافا جرب تشوف المشاكل الموجوده و حلولها) ، ممكن تطلع ب كم معلومات غیر طبیعي لو خلیت دي عاده عندك.
    <pre></pre>
    2 -جرب تنشر سؤالك الأول علي جوجل ، لما تتاكد أن مفیش اجابة واضحة ساعتها أنشرها هناك.
    <pre></pre>
    3 -تجنب الأسئلة اللي فیها آراء أو ممكن تؤدي ل عمل مناقشات بدل ما تدیلك حلول ، زي مثلا سؤال "أي هي أحسن فریم وورك للویب؟" أو "أنهي أحسن لغة لتطویر الأندروید؟" ، لو مكنش دا من الحاجات ضد سیاسة الموقع اصلا ف هو هیفتح باب للمشاكل والصداع علیك.
    <pre></pre>
    4 -لو قدرت تجیب 20 reputation تقدر تشارك في الchat بتاع الموقع ، و دا مكان عظیم جدا في نظر مستخدمیها علشانتناقش موضوع أو تتكلم مع ناس حوالین العالم في نفس أهتماماتك.
    <pre></pre>
    5 -الموقع بینزل علیة شغل في تبویب مخصص لیة ، مبرمجین كتیر شغلهم كان من هناك بس مش متأكدین من توافر نفس الفرصدي ل مصر ، بس نوهنا علیها للمعرفة.
    <pre></pre>
    قبل ما نختم .. ممكن تشوف قصص مستخدمین ستاك اوفرفلو و ازاي الموقع ساعدهم في شغلهم في بوست كان معمولبمناسبه وصول الموقع ل 10 ملیون سؤال موجود علیه من خمس سنين في المصادر
    بس كدا ... دا كان دردشتنا عن ستاك اوفرفلو ، حابین نسمع رأيك عنه ، هل كنت تعرفة قبل كدا ولا لأ؟
    و لو كنت تعرفة هل فادك قبل كدا؟ و لو مكنتش تعرفة هل ناوي تجربة ولا لأ؟
    
    `;
    txt.style.fontFamily=`Rakkas, sans-serif`;
    txt.style.fontSize="19px";
    hh.style.fontSize="45px";
    
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
        hh.innerText="الفصل الاول .. ستاك اوفرفلو";
        hh.style.fontFamily=`'Reem Kufi', sans-serif`
        txt.dir="rtl";
        txt.innerHTML=`
    إذاً.. ما هو عِلم السعادة؟ یمكننا تلخیص ثمان نقاط فیها ... -ساعد الآخرین أكثر من مساعدة نفسك...
    (جیف آتوود- مؤسس ستاك اوفر فلو)
    <pre></pre>
    مین فینا مسمعش عن موقع ستاك أوفر فلو ؟؟؟ تقریبا مفیش مشكلة قابلتنا و اتحطت علي جوجل الا و كانت أول نتیجة نلاقیها في البحث هي بوست لنفس المشكلة على الموقع دا ، و في معظم الأحیان بنلاقي الأجابة في البوست اللي فیه المشكلة دا ف بناخد الحل نحطه عندنا و تقریبا دا تمام الحكایة مع أغلب الناس ، أحنا شایفین أن دا فیة ظلم للموقع و فرصة ضایعة علیك علشان كدا خلینا
    ندردش فیها معاك شویة...
    <pre></pre>
    ⚠️ مبدئیا لو متعرفش أي هو ستاك اوفرفلو فهو موقع بیخلي مستخدمینة یطرحوا أسئلة أو مشاكل عندهم خاصه بالبرمجة أو أنهم یجاوبوا علي أسئلة غیرهم عملها ، غیر كمان انك ممكن تعمل تصویت علي سؤال أو أجابة معینة (یعني غالبا الأجابة الصح المرتبطة بالسؤال تلاقي علیها تصویت أعلي و هكذا..) و هو موقع من صنع مبرمجین و معمول علشان یساعد المبرمجین.
    <pre></pre>
    ⚠️موقع ستاك اوفرفلو أتعمل في سبتمبر سنه 2008 على أید جیف آتوود وجویل سبولسكي ، قبل مشروعهم جیف كان –على حد وصفه – بینتقد شویة شغل جویل ، لكنه كان معجب باللي بیعملة و أنه كان من أوائل المبرمجین اللي دخلوا ساحه كتابةالمدونات و جویل خلاه یدرك مدى التأثیر الأیجابي اللي كتابة المدونات بتأثرة علي المبرمجین (خصوصا في وقتهم ، وقت كتابة المدونات كانت لسا حاجه جدیده شویه) ، بس جتلهم فكره الموقع دا اللي كانت حلم بالنسبة لجویل علشان هتسهل فكره التدوین بالنسبالة و تخلیها عامه للكل.
    <pre></pre>
    ⚠️ أزاي ممكن تستخدم ستاك اوفرفلو ؟ نقدر نجاوب علي السؤال دا علي حسب تمكنك و خبرتك في البرمجة ، في تجارب مبرمجین كتیر قالوا أن الموقع دا مش هیبقي ودي معاك في حالة أنك مبتدئ ، علشان الأسئلة و المشاكل اللي بتتنشر بیفضل أنها تكون تفصیلیة بشكل كبیر ، لو حطیت سؤال عام شویة غالبا الأجابات هتبقي عباره عن مطالبتك بأنك تخصص السؤال أكتر (حرفیا في منهم مش بیرحم في النقطة دي و بیدخلك في دوامة بسببها) ، طیب هل دا یمنعك أن تستخدمة؟ لأ طبعا...بس أنتا هتدور فیه علي نفس مشكلتك في بوست قدیم و غالبا بتلاقي حل مشكلتك هناك (بتلاقي أعمار البوستات دي بیتراوح من 5 ل 9 سنین قد تزید أو تقل علي حسب نوع المشكلة "تلاقي مثلا المشاكل المتعلقة ب لغة ال C قدیمة جدا توصل ل 11 سنة") ، أما في حالة أنك مبرمجخبیر شویة یبقي أنشر مشكلتك و شویة تفاصیل عنها و هتلاقي اللي یخلصلك الدنیا و یجاوبك.
    <pre></pre>
    ⚠️نصایح قد تحسن من تجربتك مع موقع ستاك اوفرفلو :
    <pre></pre>
    1 -لو عندك وقت فاضي في الیوم جرب تقعد علیة شویة تشوف مشاكل الناس و اتحلت ازاى بما یرتبط مع أهتماماتك (یعني لو بتفهم لغة زي الجافا جرب تشوف المشاكل الموجوده و حلولها) ، ممكن تطلع ب كم معلومات غیر طبیعي لو خلیت دي عاده عندك.
    <pre></pre>
    2 -جرب تنشر سؤالك الأول علي جوجل ، لما تتاكد أن مفیش اجابة واضحة ساعتها أنشرها هناك.
    <pre></pre>
    3 -تجنب الأسئلة اللي فیها آراء أو ممكن تؤدي ل عمل مناقشات بدل ما تدیلك حلول ، زي مثلا سؤال "أي هي أحسن فریم وورك للویب؟" أو "أنهي أحسن لغة لتطویر الأندروید؟" ، لو مكنش دا من الحاجات ضد سیاسة الموقع اصلا ف هو هیفتح باب للمشاكل والصداع علیك.
    <pre></pre>
    4 -لو قدرت تجیب 20 reputation تقدر تشارك في الchat بتاع الموقع ، و دا مكان عظیم جدا في نظر مستخدمیها علشانتناقش موضوع أو تتكلم مع ناس حوالین العالم في نفس أهتماماتك.
    <pre></pre>
    5 -الموقع بینزل علیة شغل في تبویب مخصص لیة ، مبرمجین كتیر شغلهم كان من هناك بس مش متأكدین من توافر نفس الفرصدي ل مصر ، بس نوهنا علیها للمعرفة.
    <pre></pre>
    قبل ما نختم .. ممكن تشوف قصص مستخدمین ستاك اوفرفلو و ازاي الموقع ساعدهم في شغلهم في بوست كان معمولبمناسبه وصول الموقع ل 10 ملیون سؤال موجود علیه من خمس سنين في المصادر
    بس كدا ... دا كان دردشتنا عن ستاك اوفرفلو ، حابین نسمع رأيك عنه ، هل كنت تعرفة قبل كدا ولا لأ؟
    و لو كنت تعرفة هل فادك قبل كدا؟ و لو مكنتش تعرفة هل ناوي تجربة ولا لأ؟
    `;
    txt.style.fontFamily=`Rakkas, sans-serif`;
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
        hh.innerText="Chapter 1.. Stackoverflow";
        txt.dir="ltr";
        txt.innerHTML=`So .. what is the science of happiness?  We can summarize eight points on it ... - Help others more than help yourself ...
    (Jeff Atwood - Founder, Stack Overflow)
    <pre></pre>
    Who hasn't heard of stack overflow ???  Most of the time we did not encounter a problem unless a solution was presented to it We put the problem on google and the first search result is the post for the same problem on this site, and most of the time we find the answer in the post in which the problem exists, so we take the solution and put it here and roughly what happens with  Most of the people, we see that this is a great unfairness of the site and a missed opportunity for you because of our post work
    We chat with you a little ...
    <pre></pre>
    Firstly, if you don't know what stack overflow is, it is a site that makes its users ask questions, say programming problems they have, or respond to other people's questions, otherwise you can vote on a specific question or answer (it often means the correct answer related to the question has a higher vote  And so on ..) and it is a site made by programmers and was created to help programmers.
    <pre></pre>
    Stack Overflow was created in September 2008 by Jeff Atwood and Joel Spolsky, before their project Geoff was - as far as he described it - criticizing Joel's work, but he was impressed with what he was doing and that he was one of the first programmers to enter the blogging arena and Joel made him realize how  The positive impact that blogging has on programmers (especially in their time, when blogging was a new thing for them), but the idea of ​​this site, which for Joel had a dream, came to them in order to facilitate the idea of ​​blogging in relation to it and make it public for everyone.
    <pre></pre>
    ⚠️ How do we use stack overflow?  We can answer this question according to your experience in programming, in the experiences of several programmers who said that this site is not complete and this may be correct in the event that you are a beginner, because of the questions and problems that are published it is preferable to be very detailed, if we put a general question  Often the answers will remain an expression of your request that you clear the question more private (literally in some of them is very difficult in this point and enters you into a big topic because of it), and does that prevent you from using it?  No, of course ... But you will search for it for the same problem as yours in the old post, and often find a solution to your problem there (you will find that posts age ranges from 5 to 9 years, and it may increase or decrease depending on the type of problem. "You find, for example, problems related to the old C language  Very, which may reach 11 years "), but in the event that you are an expert programmer, you can publish your problem and some details about it, and you will find your own answer.
    <pre></pre>
    Tips to improve your stack overflow experience:
    <pre></pre>
    1- If you have more time in your day, try to go to the site and watch people's problems and see how these problems were solved with what is related to your interest (for example if you understand a language like Java, try to see the existing problems and their solutions), you can find a huge number of information  If you make this a habit you have.
    <pre></pre>
    2- Try to post your question first on google, when you are sure that there is no clear answer you should post it there.
    <pre></pre>
    3- Avoid questions that have opinions or may lead to discussions rather than solutions, such as the question, "What is the best frame work for the web?"  Or "What is the best language for Android development?"  If this is not one of the things that are against the site's policy in the first place, then this will open a door for your problems.
    <pre></pre>
    4- If you can take 20 reputation, you can participate in the chat site, and this is a very great place for its users to discuss a topic or talk with people around the world with your same interests.
    <pre></pre>
    5 - The site has a dedicated web job, many programmers have come to work for them through the site, but we are not sure that Egypt has the same, but we mentioned it for knowledge.
    <pre></pre>
    Before concluding ... you can see many stories of the oveflow stack users and how this site helped them in their work in the post was in effect on the occasion of the site’s arrival of 10 million questions that existed on it five years ago in the first comment available (and at least I keep a look in our sources)  ⚠️ ..
    <pre></pre>
    Finally ... this was our chat about stack overflow, want to hear your opinion in the comments below the post  .Did you know before this or not?
    And if you know, have you benefited before?  And if you could not know it, did you intend to experiment or not? !!!👀
    `;
    txt.style.fontFamily=`'Julius Sans One', cursive`;
    txt.style.fontSize="14px";
    hh.style.fontSize="29px";

        LL=0;
        window.localStorage.setItem('LL',LL);
    }
    
})


