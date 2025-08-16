const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")
const items = document.querySelectorAll(".item")
const dots = document.querySelectorAll(".dot")
const numberIndicator = document.querySelector(".numbers")

let active = 0

const update = (direction) => {
    document.querySelector(".item.active").classList.remove("active")
    document.querySelector(".dot.active").classList.remove("active")

    if (direction > 0) {
        active = active + 1

        if (active === items.length) {
            active = 0
        }
    } else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = items.length - 1
        }
    }

    items[active].classList.add("active")
    dots[active].classList.add("active")
    numberIndicator.innerHTML = `0${active + 1}`
}

setInterval(() => {
    update(1)
}, 4000);

nextButton.addEventListener("click", () => {
    update(1)
})
prevButton.addEventListener("click", () => {
    update(-1)
})