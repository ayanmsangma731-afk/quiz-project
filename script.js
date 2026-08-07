// 🎵 Play Music
function playMusic() {
    const music = document.getElementById("music");

    if (music) {
        music.play().catch(() => {
            alert("🎵 Play Music button ko ek baar tap karo.");
        });
    }
}


// ⏳ Countdown to 9 January
function updateCountdown() {
    const timer = document.getElementById("timer");

    if (!timer) return;

    const now = new Date();
    let birthday = new Date(now.getFullYear(), 0, 9);

    if (now >= birthday) {
        birthday = new Date(now.getFullYear() + 1, 0, 9);
    }

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.innerHTML =
        `${days} Days<br>${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ❤️ Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 6s linear, opacity 6s linear";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-120vh)";
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 800);


// 🎁 Gift
function showGift() {
    const gift = document.getElementById("giftText");

    if (!gift) return;

    gift.innerHTML = `
        🎉 Happy Birthday Ayan! 🎂<br>
        ❤️ Dream Big<br>
        😊 Keep Smiling<br>
        💻 You Will Become A Great Coder 🚀
    `;

    gift.style.display = "block";
    gift.style.opacity = "1";

    fireworks();
    confettiRain();
}


// 🎆 Fireworks
function fireworks() {
    const box = document.getElementById("fireworks");

    if (!box) return;

    for (let i = 0; i < 80; i++) {
        const spark = document.createElement("div");

        spark.className = "spark";
        spark.style.left = "50%";
        spark.style.top = "50%";

        spark.style.setProperty(
            "--x",
            (Math.random() * 600 - 300) + "px"
        );

        spark.style.setProperty(
            "--y",
            (Math.random() * 600 - 300) + "px"
        );

        box.appendChild(spark);

        setTimeout(() => spark.remove(), 1200);
    }
}


// 🎊 Confetti
function confettiRain() {
    const box = document.getElementById("confetti");

    if (!box) return;

    const emoji = ["🎉", "🎊", "🎈", "✨", "🎂", "🎁", "💖"];

    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");

        confetti.className = "confetti";
        confetti.innerHTML =
            emoji[Math.floor(Math.random() * emoji.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        box.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}


// 👑 Welcome
window.addEventListener("load", function () {
    const title = document.getElementById("typing");

    if (title) {
        title.innerHTML = "👑 Welcome To AYANVERSE 👑";
    }
});
