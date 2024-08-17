var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});

let links = document.querySelectorAll(".nav-links a");
for(let link of links) {
    link.addEventListener("click", () => {
        for(let li of links) {
            li.classList.remove("active");
        }
        link.classList.add("active");
    });
}

let names = document.querySelectorAll(".project ul li");
let photos = document.querySelectorAll(".card");
let id = 0;

for(let name of names) {
    name.addEventListener("click", () => {
        names[id].classList.remove("curr");
        name.classList.add("curr");
        id = name.getAttribute("data-id");
        for(let photo of photos) {
            photo.classList.add("hide");
            photo.classList.remove("show");
            if(photo.getAttribute("data-content") == id) {
                photo.classList.remove("hide");
                photo.classList.add("show");
            }
        }
    })
}