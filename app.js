(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "PCB Designer", "Embedded Engineer", "UX Designer"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelat: 1000,
    loop: true

})
