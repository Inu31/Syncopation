function scroll()
{
    document.getElementById("particle-container").scrollIntoView({behaviour:"smooth"});
}
function answer()
{
    document.getElementById("answer").style.color = "white";
}
function visible() {
    document.getElementById("image_headings").style.visibility = "visible";
}

function invisible() {
    document.querySelector("#image_headings").style.visibility = "hidden";
}

function visible1() {
    document.querySelector("#image_headings1").style.visibility = "visible";
}

function invisible1() {
    document.querySelector("#image_headings1").style.visibility = "hidden";
}

function visible2() {
    document.querySelector("#image_headings2").style.visibility = "visible";
}

function invisible2() {
    document.querySelector("#image_headings2").style.visibility = "hidden";
}

function visible3() {
    document.querySelector("#image_headings3").style.visibility = "visible";
}

function invisible3() {
    document.querySelector("#image_headings3").style.visibility = "hidden";
}

function about() {
    document.getElementById("question1").scrollIntoView({ behavior: "smooth" });
    document.getElementById("answer").style.color = "white";
    document.getElementById("answer").style.visibility = "visible";
}

function contact() {
    document.getElementById("footer-content").scrollIntoView({ behavior: "smooth" });
}
const target = document.getElementById("answer");

document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("particle-container");
    const headerHeight = headerContainer.clientHeight;

    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        headerContainer.appendChild(particle);
        const symbols = ["&#9835;", "&#9837;", "&#119070;", "&#119072;", "&#119088;", "&#119188;"];
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        particle.innerHTML = randomSymbol;

        const startY = Math.random() * headerHeight;
        particle.style.left = `0px`;
        particle.style.top = `${startY}px`;

        const endX = window.innerWidth + Math.random() * 200;
        const duration = 10000 + Math.random() * 6000;

        particle.animate(
            [
                { transform: `translate(0px, 0px)` },
                { transform: `translate(${endX}px, 0px)` },
            ],
            {
                duration: duration,
                easing: "linear",
                fill: "forwards",
            }
        );

        particle.addEventListener("animationend", () => {
            headerContainer.removeChild(particle);
        });
    }

    setInterval(createParticle, 1000);

    const target = document.getElementById("answer");

})