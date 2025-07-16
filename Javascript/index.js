// Smoth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smoth" });
        }
    });
});

// Reveal elements on scroll
function RevealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const triggerPoint = window.innerHeight * 0.85;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerPoint) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", RevealOnScroll);
window.addEventListener("load", RevealOnScroll);

// NewsLetter form handLing
document. getElementById("newsletterForm").addEventListener("submit", function (e)
    {e.preventDefault();
    const message = document.getElementById("formMessage");
    message.textContent = "Thanks for subscribing";
    this.resizeTo();
});