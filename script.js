/* ==================================================
   COMPLETE SCRIPT.JS
   BALLOON SURPRISE, PAGE TRANSITIONS, LETTER,
   FINAL CELEBRATION AND MEMORIES
================================================== */


/* =========================
   ELEMENTS
========================= */

const pages = document.querySelectorAll(".page");

const ambientHearts =
    document.getElementById("ambientHearts");

const ambientSparkles =
    document.getElementById("ambientSparkles");


/* Page 1 */

const page1Character =
    document.getElementById("page1Character");

const speechBubble =
    document.getElementById("speechBubble");

const balloonStage =
    document.getElementById("balloonStage");

const mainBalloon =
    document.getElementById("mainBalloon");

const birthdayReveal =
    document.getElementById("birthdayReveal");

const openBirthdayBtn =
    document.getElementById("openBirthdayBtn");


/* Page 2 */

const toLetterBtn =
    document.getElementById("toLetterBtn");


/* Page 3 */

const envelope =
    document.getElementById("envelope");

const tapLetterText =
    document.getElementById("tapLetterText");

const letterIntro =
    document.getElementById("letterIntro");

const openLetter =
    document.getElementById("openLetter");

const apologyLines =
    document.querySelectorAll(".apology-line");

const toFinalBtn =
    document.getElementById("toFinalBtn");


/* Page 4 */

const loveBtn =
    document.getElementById("loveBtn");

const alwaysMessage =
    document.getElementById("alwaysMessage");

const toMemoriesBtn =
    document.getElementById("toMemoriesBtn");


/* =========================
   GLOBAL STATE
========================= */

let balloonHasPopped = false;

let letterHasOpened = false;

let finalCelebrationDone = false;


/* =========================
   SAFE CONFETTI
========================= */

function launchConfetti(options) {

    if (typeof window.confetti === "function") {

        window.confetti(options);

    }

}


/* =========================
   PAGE SYSTEM
========================= */

function showPage(pageNumber) {

    const selectedPage =
        document.getElementById("page" + pageNumber);

    if (!selectedPage) {

        console.error(
            "Page not found: page" + pageNumber
        );

        return;

    }

    pages.forEach((page) => {

        page.classList.remove("active");

        page.scrollTop = 0;

    });

    selectedPage.classList.add("active");

    selectedPage.scrollTop = 0;


    /* Hide hearts on memories page */

    if (ambientHearts) {

        ambientHearts.style.display =
            pageNumber === 5
                ? "none"
                : "block";

    }


    /* Keep sparkles visible */

    if (ambientSparkles) {

        ambientSparkles.style.display =
            "block";

    }


    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });


    if (pageNumber === 2) {

        startBirthdayCelebration();

    }

    if (pageNumber === 3) {

        prepareLetterPage();

    }

    if (pageNumber === 5) {

        restartMemoriesAnimation();

    }

}

window.showPage = showPage;


/* =========================
   BACKGROUND HEARTS
========================= */

function createAmbientHeart() {

    if (
        !ambientHearts ||
        ambientHearts.style.display === "none"
    ) {

        return;

    }

    const heart =
        document.createElement("span");

    heart.className = "ambient-heart";

    const heartChoices = [
        "💕",
        "💗",
        "❤️"
    ];

    heart.textContent =
        heartChoices[
            Math.floor(
                Math.random() *
                heartChoices.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        14 + Math.random() * 16 + "px";

    heart.style.animationDuration =
        7 + Math.random() * 5 + "s";

    ambientHearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12500);

}

setInterval(
    createAmbientHeart,
    1000
);


/* =========================
   BACKGROUND SPARKLES
========================= */

function createSparkles() {

    if (!ambientSparkles) {

        return;

    }

    const sparkleCount = 18;

    for (
        let index = 0;
        index < sparkleCount;
        index++
    ) {

        const sparkle =
            document.createElement("span");

        sparkle.className =
            "sparkle-dot";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.animationDelay =
            Math.random() * 3 + "s";

        sparkle.style.animationDuration =
            2 + Math.random() * 2 + "s";

        ambientSparkles.appendChild(
            sparkle
        );

    }

}

createSparkles();


/* ==================================================
   PAGE 1
================================================== */


/* Change speech */

setTimeout(() => {

    if (speechBubble) {

        speechBubble.textContent =
            "I have a surprise for you...";

    }

}, 1800);


/* Switch to pointing image */

setTimeout(() => {

    if (page1Character) {

        page1Character.src =
            "assets/pointing.png";

        page1Character.alt =
            "Character pointing at the balloon";

    }

}, 3200);


/* Show balloon */

setTimeout(() => {

    if (balloonStage) {

        balloonStage.classList.remove(
            "hidden"
        );

    }

}, 3600);


/* Balloon click */

if (mainBalloon) {

    mainBalloon.addEventListener(
        "click",
        popMainBalloon
    );

}


/* Keyboard support */

if (mainBalloon) {

    mainBalloon.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                popMainBalloon();

            }

        }
    );

}


/* =========================
   POP BALLOON
========================= */

function popMainBalloon() {

    if (
        balloonHasPopped ||
        !mainBalloon
    ) {

        return;

    }

    balloonHasPopped = true;

    mainBalloon.classList.add(
        "popping"
    );


    launchConfetti({

        particleCount: 140,

        spread: 120,

        startVelocity: 32,

        origin: {
            x: 0.5,
            y: 0.55
        }

    });


    createMiniBalloons();


    setTimeout(() => {

        if (balloonStage) {

            balloonStage.classList.add(
                "hidden"
            );

        }

        if (page1Character) {

            page1Character.classList.add(
                "hidden"
            );

        }

        if (speechBubble) {

            speechBubble.classList.add(
                "hidden"
            );

        }

        if (birthdayReveal) {

            birthdayReveal.classList.remove(
                "hidden"
            );

        }

    }, 650);

}


/* =========================
   MINI BALLOONS
========================= */

function createMiniBalloons() {

    const colors = [
        "red",
        "pink",
        "red",
        "pink",
        "pink",
        "red",
        "pink",
        "red",
        "pink",
        "red"
    ];

    colors.forEach(
        (color, index) => {

            setTimeout(() => {

                createOneMiniBalloon(
                    color
                );

            }, index * 65);

        }
    );

}


function createOneMiniBalloon(color) {

    const miniBalloon =
        document.createElement("span");

    miniBalloon.className =
        "mini-balloon " + color;


    const center =
        window.innerWidth / 2;

    const randomOffset =
        Math.random() * 120 - 60;


    miniBalloon.style.left =
        center +
        randomOffset +
        "px";

    miniBalloon.style.top =
        window.innerHeight * 0.56 +
        Math.random() * 30 +
        "px";


    const drift =
        Math.random() * 180 - 90;

    miniBalloon.style.setProperty(
        "--drift",
        drift + "px"
    );


    miniBalloon.style.animationDuration =
        2.1 +
        Math.random() * 0.9 +
        "s";


    document.body.appendChild(
        miniBalloon
    );


    setTimeout(() => {

        miniBalloon.remove();

    }, 3300);

}


/* Page 1 to Page 2 */

if (openBirthdayBtn) {

    openBirthdayBtn.addEventListener(
        "click",
        () => {

            launchConfetti({

                particleCount: 180,

                spread: 140,

                origin: {
                    y: 0.65
                }

            });

            showPage(2);

        }
    );

}


/* ==================================================
   PAGE 2
================================================== */

function startBirthdayCelebration() {

    const endTime =
        Date.now() + 2200;


    function celebrationFrame() {

        launchConfetti({

            particleCount: 3,

            angle: 60,

            spread: 60,

            origin: {
                x: 0,
                y: 0.72
            }

        });


        launchConfetti({

            particleCount: 3,

            angle: 120,

            spread: 60,

            origin: {
                x: 1,
                y: 0.72
            }

        });


        if (Date.now() < endTime) {

            requestAnimationFrame(
                celebrationFrame
            );

        }

    }

    celebrationFrame();

}


/* Page 2 to Page 3 */

if (toLetterBtn) {

    toLetterBtn.addEventListener(
        "click",
        () => {

            showPage(3);

        }
    );

}


/* ==================================================
   PAGE 3
================================================== */

function prepareLetterPage() {

    if (!letterHasOpened) {

        if (envelope) {

            envelope.classList.remove(
                "hidden"
            );

            envelope.style.opacity = "1";

            envelope.style.transform =
                "scale(1)";

        }

        if (tapLetterText) {

            tapLetterText.classList.remove(
                "hidden"
            );

        }

        if (letterIntro) {

            letterIntro.classList.remove(
                "hidden"
            );

        }

        if (openLetter) {

            openLetter.classList.add(
                "hidden"
            );

        }

        if (toFinalBtn) {

            toFinalBtn.classList.add(
                "hidden"
            );

        }

    }

}


/* Envelope click */

if (envelope) {

    envelope.addEventListener(
        "click",
        openApologyLetter
    );

}


/* =========================
   OPEN LETTER
========================= */

function openApologyLetter() {

    if (
        letterHasOpened ||
        !envelope
    ) {

        return;

    }

    letterHasOpened = true;


    envelope.style.transition =
        "transform 0.45s ease, opacity 0.45s ease";

    envelope.style.transform =
        "scale(1.12) rotate(-3deg)";

    envelope.style.opacity =
        "0";


    if (tapLetterText) {

        tapLetterText.classList.add(
            "hidden"
        );

    }


    if (letterIntro) {

        letterIntro.style.transition =
            "opacity 0.4s ease";

        letterIntro.style.opacity =
            "0";

    }


    setTimeout(() => {

        envelope.classList.add(
            "hidden"
        );

        if (letterIntro) {

            letterIntro.classList.add(
                "hidden"
            );

        }

        if (openLetter) {

            openLetter.classList.remove(
                "hidden"
            );

        }

        showApologyLines();

    }, 450);

}


/* =========================
   APOLOGY LINE FADE
========================= */

function showApologyLines() {

    apologyLines.forEach(
        (line, index) => {

            line.classList.remove(
                "show"
            );

            setTimeout(() => {

                line.classList.add(
                    "show"
                );

            }, 450 + index * 1100);

        }
    );


    const totalDelay =
        450 +
        apologyLines.length * 1100;


    setTimeout(() => {

        if (toFinalBtn) {

            toFinalBtn.classList.remove(
                "hidden"
            );

            toFinalBtn.style.animation =
                "fadeLine 0.8s forwards";

        }

    }, totalDelay);

}


/* Page 3 to Page 4 */

if (toFinalBtn) {

    toFinalBtn.addEventListener(
        "click",
        () => {

            showPage(4);

        }
    );

}


/* ==================================================
   PAGE 4
================================================== */

if (loveBtn) {

    loveBtn.addEventListener(
        "click",
        runFinalCelebration
    );

}


/* =========================
   FINAL CELEBRATION
========================= */

function runFinalCelebration() {

    if (finalCelebrationDone) {

        return;

    }

    finalCelebrationDone = true;


    launchConfetti({

        particleCount: 260,

        spread: 180,

        startVelocity: 38,

        origin: {
            y: 0.62
        }

    });


    runFireworks();


    if (alwaysMessage) {

        alwaysMessage.classList.remove(
            "hidden"
        );

    }


    if (loveBtn) {

        loveBtn.textContent =
            "💖";

        loveBtn.style.pointerEvents =
            "none";

    }


    setTimeout(() => {

        if (toMemoriesBtn) {

            toMemoriesBtn.classList.remove(
                "hidden"
            );

            toMemoriesBtn.style.animation =
                "fadeUp 0.8s ease";

        }

    }, 900);

}


/* =========================
   FIREWORKS
========================= */

function runFireworks() {

    const endTime =
        Date.now() + 3000;


    function fireworkFrame() {

        launchConfetti({

            particleCount: 4,

            angle: 60,

            spread: 68,

            startVelocity: 38,

            origin: {
                x: 0,
                y: 0.72
            }

        });


        launchConfetti({

            particleCount: 4,

            angle: 120,

            spread: 68,

            startVelocity: 38,

            origin: {
                x: 1,
                y: 0.72
            }

        });


        if (Date.now() < endTime) {

            requestAnimationFrame(
                fireworkFrame
            );

        }

    }

    fireworkFrame();

}


/* Page 4 to Page 5 */

if (toMemoriesBtn) {

    toMemoriesBtn.addEventListener(
        "click",
        () => {

            showPage(5);

        }
    );

}


/* ==================================================
   PAGE 5
================================================== */

function restartMemoriesAnimation() {

    const memoryCards =
        document.querySelectorAll(
            ".memory-polaroid"
        );

    const endingText =
        document.querySelector(
            ".memories-ending"
        );


    memoryCards.forEach((card) => {

        card.style.animation = "none";

        void card.offsetWidth;

        card.style.animation = "";

    });


    if (endingText) {

        endingText.style.animation =
            "none";

        void endingText.offsetWidth;

        endingText.style.animation =
            "";

    }

}


/* =========================
   INITIAL PAGE
========================= */

showPage(1);
