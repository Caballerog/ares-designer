const burger = document.getElementById("hamburgerButton");
const aside = document.getElementById("aside");

burger.addEventListener("click", _changeMenu);

function _changeMenu(e) {
    if (aside.className === "aside-off") {
        aside.classList.remove("aside-off");
        aside.classList.add("aside-on");
    } else {
        aside.classList.remove("aside-on");
        aside.classList.add("aside-off");
    }
}