let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let links = document.querySelectorAll("#nav-links a");

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

for(let ele of inputs)
ele.addEventListener("click", () => {
    ele.classList.add("in-act");
    setInterval(() => {
        if(ele.value === "") {
            ele.classList.remove("in-act");
        }
    }, 3000)
});

for(let li of links) {
    li.addEventListener("click", () => {
        for(let ele of links) {
            ele.classList.remove("active");
        }
        li.classList.add("active");
    });
}
