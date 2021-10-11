// $('h1').css('color', 'red')
const allText = $(".text").toArray()
const navLinks = $(".nav-link").toArray()
const navContainer = $("#nav-links-container")
const navBtn = $("#nav-btn")
const profileImg = $("#self-portrait")
const aboutImg = $("#about-portrait")

// LIGHT/DARK THEME ==========================

window.onLoad = getStorageTheme

let theme = "light-theme"

function getStorageTheme() {
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

function toggleTheme() {
  if (theme === "light-theme") {
    theme = "dark-theme"
  } else {
    theme = "light-theme"
  }
  document.documentElement.className = theme
  localStorage.setItem("theme", theme)
}

$("#dark-light-btn").click(() => {
  toggleTheme()
})

// LIGHT/DARK THEME ============================

// Screen Width detection and Image replacements
let screenWidth
$(window).resize(readWidth)

function adjustImage() {
  screenWidth = window.innerWidth
  document.documentElement.clientWidth
  document.body.clientWidth
  if (screenWidth > 768) {
    changeProfileImageDesktop()
  } else {
    changeProfileImageMobile()
  }
  return
}

//Debounced image swapping
function readWidth() {
  clearTimeout(window.resizedFinished)
  window.resizedFinished = setTimeout(adjustImage, 250)
}

function changeProfileImageDesktop() {
  const regex = /mobile/
  const newSrc = profileImg[0].src.replace(regex, "desktop")
  profileImg[0].src = newSrc
}

function changeProfileImageMobile() {
  const regex = /desktop/
  const newSrc = profileImg[0].src.replace(regex, "mobile")
  profileImg[0].src = newSrc
}

navBtn.click(() => {
  navBtn.toggleClass("is-active")
  navContainer.toggleClass("active")
})

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navContainer.removeClass("active")
  })
})

const changeDate = () => {
  const currentDate = new Date().getFullYear()
  $("#currentDate").text(currentDate)
}

changeDate()
adjustImage()
