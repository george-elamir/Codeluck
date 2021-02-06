
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
    style.href="./CSS/lightdiscord.css";
    modeIcon.className="far fa-moon";
}
else{
    style.href="./CSS/darkdiscord.css";
    modeIcon.className="far fa-sun";
}

modeIcon.addEventListener('click',()=>{

    if(style.href.includes('lightdiscord')){
        style.href="./CSS/darkdiscord.css";
        modeIcon.className="far fa-sun";
        LD=1;
        window.localStorage.setItem('LD',LD);
    }
    else {
        style.href="./CSS/lightdiscord.css";
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

    hh.innerText="Chapter 2.. Discord";
    hh.style.fontFamily=`'Permanent Marker', cursive`;
    txt.dir="ltr";
    txt.innerHTML=`see our interests while we are sitting under the cover and the anise in our hands , "Oh, like what we do while writing this post now", almost everything is closed .. there is no  Universities, sessions, or anything offline, everything is currently working online💔.
    <pre></pre>
    The online is not bad .. but it has many defects to some extent, but some different platforms try to avoid these defects and the most famous of these platforms are Zoom and Google Meet and recently the Microsoft Team, but there is a platform, although it is very well known outside Egypt, but its right is lost in Egypt.  and is not capable of except with a specific category only, the platform that we will talk about is the Discord platform.
    Ok, What is Discord?  It is a program in which you can communicate with your friends by chat, voice and video .. It is a program that made specifically for gamers.
    <pre></pre>
    Nice words, but what distinguishes this site from others, like what we say?
    <pre></pre>
    What distinguishes it from others is that you are working on it on your server or by interfering with another server, the server you can consider it like the apartment like this, and as the apartment has rooms in it, so what server has (channels) and channels can keep text in which any media is followed (  Chat - pictures - links) or be a voice and that you and your friends talk in it and open the share screen or camera, except that you do not need to send an invitation every time you want to do a meeting, it is one time that you will enter the server and you can enter again after at any time, the program faced it so easy that you will not be lost.
    <pre></pre>
    Ok, ok .. me a person like a computer science student 💻 and strong hacker😂 what benefit did you like?
    In principle, this computer science means endless projects, so you are sure to communicate with your team in one way or another so that you finish your work, the subject of that zoom disables you as a regular user 40 minutes that is bad and separates, Discord will make it easier for you because it does not close, so let's assume that you are a  big programmer and you want to give courses to a large number, and the powers that the Discord give you as an admin of the server can consume your work very much, and among them is that you work a mute for certain people or for all who are sitting or that you transfer them from one channel to the next, and these powers are not necessarily one person is possible  You give another person the same permissions (for example, your assistant) 🤙🏻.
    <pre></pre>
    Each of this was a good basis to help you in the beginning of your dealings with the program .. Now we think that you can download, try it, and pray for us😉
    This was our topic,👀you can participate in the comments. Have you tried Discord before?  And if not, Are you thinking about trying it or not?👀👀
    https://fb.me/e/3Z0OUmbF3
    Our event link`;
    txt.style.fontFamily=`'Julius Sans One', cursive`;

    
}







else{
    
    lang.innerText="English";
    n1.innerText="الرئيسيه";
        n1.style.fontFamily="Rakkas, sans-serif";
        n2.innerText="المواضيع";
        n2.style.fontFamily="Rakkas, sans-serif";
        n3.innerText="من نحن؟";
        n3.style.fontFamily="Rakkas, sans-serif"
        n4.innerText="الرئيسيه";
        n4.style.fontFamily="Rakkas, sans-serif"
        n5.innerText="المواضيع";
        n5.style.fontFamily="Rakkas, sans-serif"
        n6.innerText="من نحن؟";
        n6.style.fontFamily="Rakkas, sans-serif"
        hh.innerText="الفصل الثاني .. ديسكورد";
    hh.style.fontFamily=`'Reem Kufi', sans-serif`
    
    txt.innerHTML=`
    
ازيك 👋👀في فتره زي اللي احنا فيها دي كل الناس قاعده في بيوتها .. بتنجز دنيتها و اللي وراها و هي قاعده تحت اللحاف في ايديها الينسون المتين "ايوه زي محنا بنعمل و احنا بنكتب البوست ناو" ، تقريبا كل حاجه مقفله .. مفيش جامعات ولا سيشنز ولا اي حاجه اوفلاين يعتبر ، كلو حاليا شغال اونلاين💔.
<pre></pre>
الاونلاين مش وحش .. بس العيوب اللي فيه رخمه شويه ، و اللي بتحاول تداري العيوب دي المنصات المختلفه الموجوده أشهرهم طبعا زووم و جوجل مييت و مؤخرا مايكروسوفت تيمز ، بس في منصه علي الرغم من أنها معروفه جدا برا مصر بس مش واخده حقها هنا بالشكل الكافي غير مع فئه معينه ، المنصه اللي هنتكلم عليها هي منصه ديسكورد Discord.
طيب اي هو ديسكورد؟ هو برنامج تقدر تتواصل فيها مع صحابك شات و صوت و فيديو .. كان اتعمل مخصوص للجيمرز.
<pre></pre>
طب كلام جميل بس اي اللي يميزه عن غيره😉؟
<pre></pre>
اللي يميزه عن غيره هو أنك بتعمل عليه سيرفر ليك او بتخش في سيرفر حد تاني ، السيرفر دا تقدر تعتبره زي الشقه كدا و زي ما الشقق بيبقي فيها اوض فاا اي سيرفر بيبقي فيه قنوات (channels) و القنوات دي ممكن تبقي text يتبعت فيها اي ميديا (كلام - صور - لينكات) أو تبقي صوت و دي بتخش فيها انتا و صحابك و بتتكلموا فيها و تفتحوا سكرين شير او الكاميرا ، غير انك مش محتاج تبعت انفيت في كل مره عاوز تعمل ميتينج ، هي مره واحده و خلاص هيخش السيرفر و يقدر يخش تاني بعد كدا ، و واجهه البرنامج سهله مش هتوه فيها😌.
<pre></pre>
طب تمام .. انا بقا ك واحد بتاع حاسبات 💻و هقرز جامد و كدا استفدت اي؟
مبدئيا كدا حاسبات يعني بروجيكتات مش بتخلص🙂 .. ف انتا اكيد بتتواصل مع التيم بتاعك بشكل أو بأخر علشان تخلصوا اللي وراكوا ، حوار أن زووم بيديلك ك مستخدم عادي 40 دقيقه دا رخم و بيفصل ، ديسكورد هيسهل عليك ال dنy🗡 دي علشان مش بيقفل ، و فلنفترض انك مبرمج قد الدنيا و انك عاوز تدي كورسات لعدد كبير ، والصلاحيات اللي ديسكورد بيديهالك ك أدمن للسيرفر تقدر تسهلك شغلك جدا و منها انك تعمل ميوت لأشخاص معينه او لكل اللي قاعدين أو انك تنقلهم من تشانل للتانيه ، و الصلاحيات دي مش لازم تبقي ل شخص واحد ممكن تدي شخص تاني نفس الصلاحيات دي (مساعد ليك مثلا) 🤙🏻.
<pre></pre>
كل دا كان اساس كويس يساعدك في بدايه تعاملك مع البرنامج .. دلوقتي فاضل يا معلم انك تنزله و تجربه و تدعلينا 😉⁦❤️⁩
دا كان موضوعنا انهارده❤️🔥.. بس شاركنا في الكومنتس هل جربت ديسكورد قبل كدا؟ و لو لأ هل 
بتفكر تجربه ولا لأ👀؟`;
    txt.style.fontFamily=`Rakkas, sans-serif`;
    txt.style.fontSize="19px";
    hh.style.fontSize="45px";
        
}
lang.addEventListener('click',()=>{

    if(lang.innerText.includes('عربي')){
        lang.innerText="English";
        n1.innerText="الرئيسيه";
        n1.style.fontFamily="Rakkas, sans-serif";
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
        hh.innerText="الفصل الثاني .. ديسكورد";
        hh.style.fontFamily=`'Reem Kufi', sans-serif`
        txt.dir="rtl";
        txt.innerHTML=`
        ازيك 👋👀في فتره زي اللي احنا فيها دي كل الناس قاعده في بيوتها .. بتنجز دنيتها و اللي وراها و هي قاعده تحت اللحاف في ايديها الينسون المتين "ايوه زي محنا بنعمل و احنا بنكتب البوست ناو" ، تقريبا كل حاجه مقفله .. مفيش جامعات ولا سيشنز ولا اي حاجه اوفلاين يعتبر ، كلو حاليا شغال اونلاين💔.
        <pre></pre>
        الاونلاين مش وحش .. بس العيوب اللي فيه رخمه شويه ، و اللي بتحاول تداري العيوب دي المنصات المختلفه الموجوده أشهرهم طبعا زووم و جوجل مييت و مؤخرا مايكروسوفت تيمز ، بس في منصه علي الرغم من أنها معروفه جدا برا مصر بس مش واخده حقها هنا بالشكل الكافي غير مع فئه معينه ، المنصه اللي هنتكلم عليها هي منصه ديسكورد Discord.
        طيب اي هو ديسكورد؟ هو برنامج تقدر تتواصل فيها مع صحابك شات و صوت و فيديو .. كان اتعمل مخصوص للجيمرز.
        <pre></pre>
        طب كلام جميل بس اي اللي يميزه عن غيره😉؟
        <pre></pre>
        اللي يميزه عن غيره هو أنك بتعمل عليه سيرفر ليك او بتخش في سيرفر حد تاني ، السيرفر دا تقدر تعتبره زي الشقه كدا و زي ما الشقق بيبقي فيها اوض فاا اي سيرفر بيبقي فيه قنوات (channels) و القنوات دي ممكن تبقي text يتبعت فيها اي ميديا (كلام - صور - لينكات) أو تبقي صوت و دي بتخش فيها انتا و صحابك و بتتكلموا فيها و تفتحوا سكرين شير او الكاميرا ، غير انك مش محتاج تبعت انفيت في كل مره عاوز تعمل ميتينج ، هي مره واحده و خلاص هيخش السيرفر و يقدر يخش تاني بعد كدا ، و واجهه البرنامج سهله مش هتوه فيها😌.
        <pre></pre>
        طب تمام .. انا بقا ك واحد بتاع حاسبات 💻و هقرز جامد و كدا استفدت اي؟
        مبدئيا كدا حاسبات يعني بروجيكتات مش بتخلص🙂 .. ف انتا اكيد بتتواصل مع التيم بتاعك بشكل أو بأخر علشان تخلصوا اللي وراكوا ، حوار أن زووم بيديلك ك مستخدم عادي 40 دقيقه دا رخم و بيفصل ، ديسكورد هيسهل عليك ال dنy🗡 دي علشان مش بيقفل ، و فلنفترض انك مبرمج قد الدنيا و انك عاوز تدي كورسات لعدد كبير ، والصلاحيات اللي ديسكورد بيديهالك ك أدمن للسيرفر تقدر تسهلك شغلك جدا و منها انك تعمل ميوت لأشخاص معينه او لكل اللي قاعدين أو انك تنقلهم من تشانل للتانيه ، و الصلاحيات دي مش لازم تبقي ل شخص واحد ممكن تدي شخص تاني نفس الصلاحيات دي (مساعد ليك مثلا) 🤙🏻.
        <pre></pre>
        كل دا كان اساس كويس يساعدك في بدايه تعاملك مع البرنامج .. دلوقتي فاضل يا معلم انك تنزله و تجربه و تدعلينا 😉⁦❤️⁩
        دا كان موضوعنا انهارده❤️🔥.. بس شاركنا في الكومنتس هل جربت ديسكورد قبل كدا؟ و لو لأ هل 
        بتفكر تجربه ولا لأ👀؟`;
        
        txt.style.fontFamily="Rakkas, sans-serif"
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
        hh.innerText="Chapter 2.. Discord";
        txt.dir="ltr";
        
        txt.innerHTML=`see our interests while we are sitting under the cover and the anise in our hands , "Oh, like what we do while writing this post now", almost everything is closed .. there is no  Universities, sessions, or anything offline, everything is currently working online💔.
        <pre></pre>
        The online is not bad .. but it has many defects to some extent, but some different platforms try to avoid these defects and the most famous of these platforms are Zoom and Google Meet and recently the Microsoft Team, but there is a platform, although it is very well known outside Egypt, but its right is lost in Egypt.  and is not capable of except with a specific category only, the platform that we will talk about is the Discord platform.
        Ok, What is Discord?  It is a program in which you can communicate with your friends by chat, voice and video .. It is a program that made specifically for gamers.
        <pre></pre>
        Nice words, but what distinguishes this site from others, like what we say?
        <pre></pre>
        What distinguishes it from others is that you are working on it on your server or by interfering with another server, the server you can consider it like the apartment like this, and as the apartment has rooms in it, so what server has (channels) and channels can keep text in which any media is followed (  Chat - pictures - links) or be a voice and that you and your friends talk in it and open the share screen or camera, except that you do not need to send an invitation every time you want to do a meeting, it is one time that you will enter the server and you can enter again after at any time, the program faced it so easy that you will not be lost.
        <pre></pre>
        Ok, ok .. me a person like a computer science student 💻 and strong hacker😂 what benefit did you like?
        In principle, this computer science means endless projects, so you are sure to communicate with your team in one way or another so that you finish your work, the subject of that zoom disables you as a regular user 40 minutes that is bad and separates, Discord will make it easier for you because it does not close, so let's assume that you are a  big programmer and you want to give courses to a large number, and the powers that the Discord give you as an admin of the server can consume your work very much, and among them is that you work a mute for certain people or for all who are sitting or that you transfer them from one channel to the next, and these powers are not necessarily one person is possible  You give another person the same permissions (for example, your assistant) 🤙🏻.
        <pre></pre>
        Each of this was a good basis to help you in the beginning of your dealings with the program .. Now we think that you can download, try it, and pray for us😉
        This was our topic,👀you can participate in the comments. Have you tried Discord before?  And if not, Are you thinking about trying it or not?👀👀
        https://fb.me/e/3Z0OUmbF3
        Our event link`;
    txt.style.fontFamily=`'Julius Sans One', cursive`;

        LL=0;
        window.localStorage.setItem('LL',LL);
    }
    
})


