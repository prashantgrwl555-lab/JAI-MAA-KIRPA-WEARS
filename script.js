// ============================
// JAI MAA KIRPA WEARS
// script.js
// ============================

// Product Search
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toUpperCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let text = card.innerText.toUpperCase();

            if (text.indexOf(filter) > -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });
}


// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


// Scroll Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});


// Back to Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.left = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#FFD700";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// Floating WhatsApp Button

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/919109914593";
whatsapp.target = "_blank";
whatsapp.className = "float";

whatsapp.innerHTML = "<i class='fab fa-whatsapp'></i>";

document.body.appendChild(whatsapp);