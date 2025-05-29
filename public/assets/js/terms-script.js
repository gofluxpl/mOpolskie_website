document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector(".nav")
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")

      const icon = menuToggle.querySelector("i")
      if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })

    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active")
        const icon = menuToggle.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      })
    })

    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".terms-section, .terms-intro, .summary-box")
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (elementPosition < screenPosition) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }

    const elementsToAnimate = document.querySelectorAll(".terms-section, .terms-intro, .summary-box")
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    })

    window.addEventListener("load", animateOnScroll)
    window.addEventListener("scroll", animateOnScroll)

    const sectionHeaders = document.querySelectorAll(".terms-section h2")
    sectionHeaders.forEach((header) => {
      header.style.cursor = "pointer"
      header.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    })
  })
  