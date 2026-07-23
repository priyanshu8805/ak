// ==========================
// ELEMENTS
// ==========================

const speech = document.getElementById("speech");
const giftArea = document.getElementById("giftArea");
const gift = document.getElementById("gift");
const pages = document.querySelectorAll(".page");
const typewriter = document.getElementById("typewriter");
const ending = document.getElementById("endingMessage");
const loveButton = document.getElementById("loveButton");

// ==========================
// PAGE 1
// ==========================

// Change speech after 2 seconds
setTimeout(() => {

    speech.innerHTML = "I have something special for you...";

},2000);


// Show gift after 4 seconds
setTimeout(() => {

    giftArea.classList.remove("hidden");

},4000);


// ==========================
// OPEN GIFT
// ==========================

gift.addEventListener("click",()=>{

    gift.style.transform="scale(1.3) rotate(8deg)";
    gift.style.transition=".5s";

    confetti({
        particleCount:220,
        spread:120,
        origin:{y:.7}
    });

    setTimeout(()=>{

        showPage(2);

        birthdayFireworks();

    },900);

});


// ==========================
// PAGE CHANGE
// ==========================

function showPage(number){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document
    .getElementById("page"+number)
    .classList
    .add("active");

    if(number===3){

        startTypewriter();

    }

}


// ==========================
// TYPEWRITER
// ==========================

const apology=`I'm sorry for every moment I made you feel hurt.

I know a lot is going on, and I behaved very stupidly.

I'm really very sorry for everything I've done.

`;

let index=0;

function startTypewriter(){

    typewriter.innerHTML="";

    index=0;

    typing();

}

function typing(){

    if(index<apology.length){

        typewriter.innerHTML+=apology.charAt(index);

        index++;

        setTimeout(typing,35);

    }

}


// ==========================
// FLOATING HEARTS
// ==========================

setInterval(()=>{

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    document
    .getElementById("hearts")
    .appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

},500);


// ==========================
// FIREWORKS
// ==========================

function birthdayFireworks(){

    let duration=3500;

    let end=Date.now()+duration;

    (function frame(){

        confetti({

            particleCount:5,

            angle:60,

            spread:65,

            origin:{x:0}

        });

        confetti({

            particleCount:5,

            angle:120,

            spread:65,

            origin:{x:1}

        });

        if(Date.now()<end){

            requestAnimationFrame(frame);

        }

    })();

}


// ==========================
// FINAL BUTTON
// ==========================

loveButton.addEventListener("click",()=>{

    confetti({

        particleCount:350,

        spread:180,

        origin:{y:.6}

    });

    birthdayFireworks();

    ending.innerHTML="❤️ Always There For You ❤️";

    loveButton.innerHTML="💖";

});
