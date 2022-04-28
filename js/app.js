const navOpen = document.getElementById("menu-nav-cta")
navExit = document.getElementById('menu-exit-cta')
navDetails = document.querySelector('nav');

navOpen.addEventListener("click", () => {
    navDetails.classList.add('menu-btn');
})

navExit.addEventListener("click", () => {
    navDetails.classList.remove('menu-btn');
})

function mailConfirm() {
    document.getElementById('mail-message').innerHTML = "Confirmation request sent to your mail ! "
}