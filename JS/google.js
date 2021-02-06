
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
    style.href="./CSS/lightgoogle.css";
    modeIcon.className="far fa-moon";
}
else{
    style.href="./CSS/darkgoogle.css";
    modeIcon.className="far fa-sun";
}

modeIcon.addEventListener('click',()=>{

    if(style.href.includes('lightgoogle')){
        style.href="./CSS/darkgoogle.css";
        modeIcon.className="far fa-sun";
        LD=1;
        window.localStorage.setItem('LD',LD);
    }
    else {
        style.href="./CSS/lightgoogle.css";
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

    hh.innerText="Chapter 3.. Google";
    hh.style.fontFamily=`'Permanent Marker', cursive`;
    txt.dir="ltr";
    txt.innerHTML=`In the evening, when you are sitting, you check Facebook and follow the comments on a very important topic between account, the kitchen is my game and account Om Farouk😂😂😂 the clock strikes at 12 to announce the beginning of over thinking, existential questions, self-punishment and these things🙄🙄
    And among the existential questions that a computer science student or any person who uses a normal net asks 👀how Google searches in an index in which there are all web pages and links (if you need to view the page for a chapter in a book, you will see it in the index in an easier way than you search in The whole book ) Other than that😲 The index is stored in random memory, not on the hard, and (this is logical, so that the hard will take longer ... you when you want)
    Doing research on an item in the hard drive takes no time.  🧑🏻‍💻
    <pre></pre>
    The index is estimated to have an area of ​​about 100 thousand gigabytes. This is an imaginary number, of course, in need of a device farmer in order to use it (and on Google devices, it has a very large number on this topic, the strong number helps rigidly in the whole search process).  🤹🏻‍♀️
    <pre></pre>
    The index is renewed every period by means of Google sending its crawlers to search the entire internet for every new page that is added or old.  🕵🏻‍♂️🕵🏻‍♀️
    <pre></pre>
    The second thing is that Google uses very strong search algorithms ... a little strong word on what is happening, and this is the least possible thing that is done by the team of engineers who work for them who are considered the elite in the world (may God honor us and keep them, Lord).  🤗
    <pre></pre>
    The next thing is that Google does not need to give you the outputs up to date with what you want .. You can take results from them years old and this will save them time.  😎
    <pre></pre>
    Based on that, you may have developed a quick idea of ​​the way in which the research process is carried out on whatever you are writing To have a basic understanding of the method itself will help you in the second part of the post that will come down tomorrow, God willing, which will talk  About the methods that can help you to quickly access exactly what you want from Google .. 🤔
    Wait for us in the next post 😌❤️ And don't forget to see the first comment in which the event link is for us, and the second comment that contains the sources
    <pre></pre>
    How do I, as a student in computer science (does not hear from the engineers  Except the word google it, engineer) to find more accurate results that are related to the thing I'm looking for? 🎭👾
    <pre></pre>
    In several ways, they can help you in your long journey with Google . You will gain good experience in dealing with your business, but we will give you an important motivation ..
    <pre></pre>
    1- Try to use some special words specific to your search more, meaning if you forgot how to write the switch code, try writing switch case syntax in c ++ instead of how to write switch, for example.
    <pre></pre>
    2- If you want to talk about a specific sentence or word, put it between "" ".  Google will know you want to search for that exact phrase 😎
    <pre></pre>
    3- Do not use some words like the and is because Google scans them 😏
    <pre></pre>
    4- If you are searching for something in a specific website, use the word site: because the search is in the domain of this site only, for example if you go to the javascript course on the w3schools site, you would write in the search javascript site: www.w3schools.com🖲️
    <pre></pre>
    5- If you want to calculate something but do not have a machine, you can use Google because it will answer you on the questions that you write in the search, but it is possible for Google to do conversions from different units of measure for each other.
    <pre></pre>
    6- If you want to search in a specific range of numbers, write ... in the limits we search in, for example: How computers looked in 1960 ... 1975🧟‍♀️
    <pre></pre>
    Finally .. the post was divided into two parts. This was so long post, but it was necessary 👀 Don't forget to see the event's link in the first comment below and see the sources quickly in the comment that follows it. InshaaAllah, you benefited from the post and we will see you soon inshaaAllah  with another post and another topic .. Bye Bye🤙🏻♥️
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
        
    hh.innerText="الفصل الثالث .. جوجل";
    hh.style.fontFamily=`'Reem Kufi', sans-serif`
    
    
    txt.innerHTML=`
            
    و أنتا قاعد بليل بتسكرول علي الفيس بتتابع سلسله كومنتات عن موضوع في غايه الاهمية بين أكونت المطبخ دا لعبتي و أم فاروق 😲 تدق الساعة 12 لتعلن بدأ مرحلة الأوفر ثينكنج و الأسألة الوجودية و جلد الذات و الحاجات دي 🤯😂
    <pre></pre>
    و من ضمن الأسئلة الوجودية و اللي تلاقي طالب حاسبات بيسألها أو حتي لو واحد بيستخدم نت عادي (هو ازاي جوجل بتجيب كل النتايج دي علي معظم الحاجات اللي بدور عليها في وقت صغير خالص ميكملش دقيقة؟) 😲🤷🏻‍♀️
    <pre></pre>
    هو سؤال حلو الصراحة .. و أجابتة معقدة سيكا ، بس في حاجات بديهيات كدا لابد منها نحكيلك عليها 👾
    <pre></pre>
    مبدأيا .. عملية البحث بتاعتك دي بتبتدي قبل ما تدوس علي زرار السيرش و قبل حتي ما تفكر أنتا عاوز تدور علي أي ، جوجل عندها في نظامها نسخة من النت زي الفهرس كدا متخزن علية ال keywords و البيانات اللي أصحاب المواقع بيقدموها. 🎭
    <pre></pre>
    تمام .. و أي كمان؟ جوجل مش بتدور في النت نفسه علي اللي أنتا طلبته 😱 .. لو دا حصل ف ربنا معاك عقبال ما يجيلك نتيجة ، اللي بيحصل هو أن جوجل بيدور عنده في فهرس index فيه كل صفحات و لينكات الويب (أنتا مثلا لو أحتجت تشوف الصفحه بتاعت شابتر معين في كتاب هتشوفه في الفهرس أسهل من أنك تقلب في الكتاب كله .. نفس الفكره) 👀 غير كدا .. الفهرس بيبقي mت🐍2 في ذاكره عشوائية RAM مش علي الهارد و (دا منطقي علشان الهارد هياخد وقت أطول .. شوف انتا لما تحب تعمل سيرش علي حاجه في الهارد عندك بياخد وقت أد أي). 🧑🏻‍💻
    <pre></pre>
    الفهرس دا بيتقدر مساحته ب حوالي 100 ألف جيجابايت .. دا رقم خيالي طبعا محتاج ل مزارع أجهزه علشان تستحملة (و في الأجهزه جوجل معندهاش ياما أرحميني مفهاش كلام دي ، العدد القوي بيساعد جامد في عملية البحث كلها). 🤹🏻‍♀️
    <pre></pre>
    الفهرس دا بالمناسبة بيتجدد كل فتره عن طريق أن جوجل بتبعت ال crawlers بتوعها يفتشوا في النت كله علي كل صفحه جديده أتضافت أو قديمة أتشالت. 🕵🏻‍♂️🕵🏻‍♀️
    <pre></pre>
    تاني حاجه هي أن جوجل بتستخدم search algorithms قوية جدا .. كلمه قوية مش بتوفي مقدارها ، و دا أقل حاجه ممكن تتعمل من طقم المهندسين اللي شغالين عندهم اللي بيعتبروا الصفوه علي العالم (ربنا يكرمنا و نبقي منهم كدا يارب). 🤗
    <pre></pre>
    تالت حاجه هي أن جوجل مش بتحتاج أنها تجبلك نواتج up to date مع اللي أنتا طالبه .. ممكن تاخد نتيجه منهم قديمة من سنين و دا بيوفر عليهم وقت برضو. 😎
    <pre></pre>
    و بكدا انت ممكن يكون بقا عندك فكره سريعه ازاى بتتم عملية البحث علي اي حاجه انتا بتكتبها 😉✌️أن يكون معاك الفهم الأساسي للطريقه نفسها دا هيساعدك في الجزء التاني من البوست اللي هينزل بكرا ان شاء الله و اللي هيتكلم عن الطرق اللي تساعدك توصل للي انتا عاوزه بالظبط بسرعه من جوجل .. 🤔
    استننا فى البوست الجاى 😌❤️ و متنساش تشوف اول كومنت اللي فيه لينك الايفينت بتاعنا و تاني كومنت اللي فيه المصادر.
    <pre></pre>
    في كام حركة كدا ممكن تعملهم يساعدوك في مشوارك الطويل مع جوجل🖥️ أنت مع التعامل الكتير في شغلك هتاخد خبره كويسة بس هنديك زقة كويسة 🧑🏻‍💻🤭..
    1- حاول تستخدم كلمات مميزه شوية خاصة ب بحثك أكتر ، يعني لو نسيت ازاي تعمل كود ال switch جرب تكتب switch case syntax in c++ بدل من how to write switch مثلا.🤷🏻‍♀️
    2- لو عاوز تدور علي جملة أو كلمة معينة حطها بين " " .. جوجل كدا هتعرف أنك هعاوز تدور علي الجملة دي بعينها.😎
    3- بلاش تستخدم الكلمات اللي زي the و is علشان كدا كدا جوجل بتشيلهم أساسا.😏
    4- لو بتدور علي حاجه في ويبسايت معين أستخدم كلمه site: علشان البحث يبقي في نطاق ال mو🦗3 دا بس ، مثلا لو بتقلب علي كورس ال javascript علي موقع w3schools تكتب في البحث javascript site:www.w3schools.com🖲️
    5- لو محتاج بس معندكش آله ممكن تستعمل جوجل عادي هيجاوبلك علي المسائل اللي تكتبها في البحث عادي ، غير أنك ممكن من عليه تعمل التحويلات من وحدات القياس المختلفة لبعضها.👀😲
    6- لو عاوز تدور في range أرقام معين بتكتب ... بين حدودك اللي بتدور فيها ، علي سبيل المثال How computers looked in 1960…1975🧟‍♀️
    <pre></pre>
    بس كدا .. دا كان بوست متقسم علي جزءين كدا طولنا عليكو فيه شوية بس كان لازم ياخد حقة كامل و مكمل ، متنسوش تشوفوا لينك الايفينت بتاعنا في أول كومنت تحت و تحته علطول أبقي شوف المصادر علسريع ، أن شاء اللة تكونوا أستفدتوا من اللي أتقال و نشوفكوا علي خير أن شاء الله مع بوست تاني و موضوع تاني .. سلااام.🤭👋🏻
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
        hh.innerText="الفصل الثالث .. جوجل";
        hh.style.fontFamily=`'Reem Kufi', sans-serif`
        txt.dir="rtl";
        txt.innerHTML=`
            
        و أنتا قاعد بليل بتسكرول علي الفيس بتتابع سلسله كومنتات عن موضوع في غايه الاهمية بين أكونت المطبخ دا لعبتي و أم فاروق 😲 تدق الساعة 12 لتعلن بدأ مرحلة الأوفر ثينكنج و الأسألة الوجودية و جلد الذات و الحاجات دي 🤯😂
        <pre></pre>
        و من ضمن الأسئلة الوجودية و اللي تلاقي طالب حاسبات بيسألها أو حتي لو واحد بيستخدم نت عادي (هو ازاي جوجل بتجيب كل النتايج دي علي معظم الحاجات اللي بدور عليها في وقت صغير خالص ميكملش دقيقة؟) 😲🤷🏻‍♀️
        <pre></pre>
        هو سؤال حلو الصراحة .. و أجابتة معقدة سيكا ، بس في حاجات بديهيات كدا لابد منها نحكيلك عليها 👾
        <pre></pre>
        مبدأيا .. عملية البحث بتاعتك دي بتبتدي قبل ما تدوس علي زرار السيرش و قبل حتي ما تفكر أنتا عاوز تدور علي أي ، جوجل عندها في نظامها نسخة من النت زي الفهرس كدا متخزن علية ال keywords و البيانات اللي أصحاب المواقع بيقدموها. 🎭
        <pre></pre>
        تمام .. و أي كمان؟ جوجل مش بتدور في النت نفسه علي اللي أنتا طلبته 😱 .. لو دا حصل ف ربنا معاك عقبال ما يجيلك نتيجة ، اللي بيحصل هو أن جوجل بيدور عنده في فهرس index فيه كل صفحات و لينكات الويب (أنتا مثلا لو أحتجت تشوف الصفحه بتاعت شابتر معين في كتاب هتشوفه في الفهرس أسهل من أنك تقلب في الكتاب كله .. نفس الفكره) 👀 غير كدا .. الفهرس بيبقي mت🐍2 في ذاكره عشوائية RAM مش علي الهارد و (دا منطقي علشان الهارد هياخد وقت أطول .. شوف انتا لما تحب تعمل سيرش علي حاجه في الهارد عندك بياخد وقت أد أي). 🧑🏻‍💻
        <pre></pre>
        الفهرس دا بيتقدر مساحته ب حوالي 100 ألف جيجابايت .. دا رقم خيالي طبعا محتاج ل مزارع أجهزه علشان تستحملة (و في الأجهزه جوجل معندهاش ياما أرحميني مفهاش كلام دي ، العدد القوي بيساعد جامد في عملية البحث كلها). 🤹🏻‍♀️
        <pre></pre>
        الفهرس دا بالمناسبة بيتجدد كل فتره عن طريق أن جوجل بتبعت ال crawlers بتوعها يفتشوا في النت كله علي كل صفحه جديده أتضافت أو قديمة أتشالت. 🕵🏻‍♂️🕵🏻‍♀️
        <pre></pre>
        تاني حاجه هي أن جوجل بتستخدم search algorithms قوية جدا .. كلمه قوية مش بتوفي مقدارها ، و دا أقل حاجه ممكن تتعمل من طقم المهندسين اللي شغالين عندهم اللي بيعتبروا الصفوه علي العالم (ربنا يكرمنا و نبقي منهم كدا يارب). 🤗
        <pre></pre>
        تالت حاجه هي أن جوجل مش بتحتاج أنها تجبلك نواتج up to date مع اللي أنتا طالبه .. ممكن تاخد نتيجه منهم قديمة من سنين و دا بيوفر عليهم وقت برضو. 😎
        <pre></pre>
        و بكدا انت ممكن يكون بقا عندك فكره سريعه ازاى بتتم عملية البحث علي اي حاجه انتا بتكتبها 😉✌️أن يكون معاك الفهم الأساسي للطريقه نفسها دا هيساعدك في الجزء التاني من البوست اللي هينزل بكرا ان شاء الله و اللي هيتكلم عن الطرق اللي تساعدك توصل للي انتا عاوزه بالظبط بسرعه من جوجل .. 🤔
        استننا فى البوست الجاى 😌❤️ و متنساش تشوف اول كومنت اللي فيه لينك الايفينت بتاعنا و تاني كومنت اللي فيه المصادر.
        <pre></pre>
        في كام حركة كدا ممكن تعملهم يساعدوك في مشوارك الطويل مع جوجل🖥️ أنت مع التعامل الكتير في شغلك هتاخد خبره كويسة بس هنديك زقة كويسة 🧑🏻‍💻🤭..
        1- حاول تستخدم كلمات مميزه شوية خاصة ب بحثك أكتر ، يعني لو نسيت ازاي تعمل كود ال switch جرب تكتب switch case syntax in c++ بدل من how to write switch مثلا.🤷🏻‍♀️
        2- لو عاوز تدور علي جملة أو كلمة معينة حطها بين " " .. جوجل كدا هتعرف أنك هعاوز تدور علي الجملة دي بعينها.😎
        3- بلاش تستخدم الكلمات اللي زي the و is علشان كدا كدا جوجل بتشيلهم أساسا.😏
        4- لو بتدور علي حاجه في ويبسايت معين أستخدم كلمه site: علشان البحث يبقي في نطاق ال mو🦗3 دا بس ، مثلا لو بتقلب علي كورس ال javascript علي موقع w3schools تكتب في البحث javascript site:www.w3schools.com🖲️
        5- لو محتاج بس معندكش آله ممكن تستعمل جوجل عادي هيجاوبلك علي المسائل اللي تكتبها في البحث عادي ، غير أنك ممكن من عليه تعمل التحويلات من وحدات القياس المختلفة لبعضها.👀😲
        6- لو عاوز تدور في range أرقام معين بتكتب ... بين حدودك اللي بتدور فيها ، علي سبيل المثال How computers looked in 1960…1975🧟‍♀️
        <pre></pre>
        بس كدا .. دا كان بوست متقسم علي جزءين كدا طولنا عليكو فيه شوية بس كان لازم ياخد حقة كامل و مكمل ، متنسوش تشوفوا لينك الايفينت بتاعنا في أول كومنت تحت و تحته علطول أبقي شوف المصادر علسريع ، أن شاء اللة تكونوا أستفدتوا من اللي أتقال و نشوفكوا علي خير أن شاء الله مع بوست تاني و موضوع تاني .. سلااام.🤭👋🏻
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
        hh.innerText="Chapter 3.. Google";
        txt.dir="ltr";
        txt.innerHTML=`In the evening, when you are sitting, you check Facebook and follow the comments on a very important topic between account, the kitchen is my game and account Om Farouk😂😂😂 the clock strikes at 12 to announce the beginning of over thinking, existential questions, self-punishment and these things🙄🙄
    And among the existential questions that a computer science student or any person who uses a normal net asks 👀how Google searches in an index in which there are all web pages and links (if you need to view the page for a chapter in a book, you will see it in the index in an easier way than you search in The whole book ) Other than that😲 The index is stored in random memory, not on the hard, and (this is logical, so that the hard will take longer ... you when you want)
    Doing research on an item in the hard drive takes no time.  🧑🏻‍💻
    <pre></pre>
    The index is estimated to have an area of ​​about 100 thousand gigabytes. This is an imaginary number, of course, in need of a device farmer in order to use it (and on Google devices, it has a very large number on this topic, the strong number helps rigidly in the whole search process).  🤹🏻‍♀️
    <pre></pre>
    The index is renewed every period by means of Google sending its crawlers to search the entire internet for every new page that is added or old.  🕵🏻‍♂️🕵🏻‍♀️
    <pre></pre>
    The second thing is that Google uses very strong search algorithms ... a little strong word on what is happening, and this is the least possible thing that is done by the team of engineers who work for them who are considered the elite in the world (may God honor us and keep them, Lord).  🤗
    <pre></pre>
    The next thing is that Google does not need to give you the outputs up to date with what you want .. You can take results from them years old and this will save them time.  😎
    <pre></pre>
    Based on that, you may have developed a quick idea of ​​the way in which the research process is carried out on whatever you are writing To have a basic understanding of the method itself will help you in the second part of the post that will come down tomorrow, God willing, which will talk  About the methods that can help you to quickly access exactly what you want from Google .. 🤔
    Wait for us in the next post 😌❤️ And don't forget to see the first comment in which the event link is for us, and the second comment that contains the sources
    <pre></pre>
    How do I, as a student in computer science (does not hear from the engineers  Except the word google it, engineer) to find more accurate results that are related to the thing I'm looking for? 🎭👾
    <pre></pre>
    In several ways, they can help you in your long journey with Google . You will gain good experience in dealing with your business, but we will give you an important motivation ..
    <pre></pre>
    1- Try to use some special words specific to your search more, meaning if you forgot how to write the switch code, try writing switch case syntax in c ++ instead of how to write switch, for example.
    <pre></pre>
    2- If you want to talk about a specific sentence or word, put it between "" ".  Google will know you want to search for that exact phrase 😎
    <pre></pre>
    3- Do not use some words like the and is because Google scans them 😏
    <pre></pre>
    4- If you are searching for something in a specific website, use the word site: because the search is in the domain of this site only, for example if you go to the javascript course on the w3schools site, you would write in the search javascript site: www.w3schools.com🖲️
    <pre></pre>
    5- If you want to calculate something but do not have a machine, you can use Google because it will answer you on the questions that you write in the search, but it is possible for Google to do conversions from different units of measure for each other.
    <pre></pre>
    6- If you want to search in a specific range of numbers, write ... in the limits we search in, for example: How computers looked in 1960 ... 1975🧟‍♀️
    <pre></pre>
    Finally .. the post was divided into two parts. This was so long post, but it was necessary 👀 Don't forget to see the event's link in the first comment below and see the sources quickly in the comment that follows it. InshaaAllah, you benefited from the post and we will see you soon inshaaAllah  with another post and another topic .. Bye Bye🤙🏻♥️
    `;
    txt.style.fontFamily=`'Julius Sans One', cursive`;
        LL=0;
        window.localStorage.setItem('LL',LL);
    }
})


