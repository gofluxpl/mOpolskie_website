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

    const faqQuestions = document.querySelectorAll(".faq-question")
    faqQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        const faqItem = question.parentElement
        const isActive = faqItem.classList.contains("active")
  
        document.querySelectorAll(".faq-item").forEach((item) => {
          item.classList.remove("active")
        })
  
        if (!isActive) {
          faqItem.classList.add("active")
        }
      })
    })

    const reportForm = document.querySelector(".report-form")
    reportForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const formData = new FormData(reportForm)
      const issueType = formData.get("issue-type")
      const deviceInfo = formData.get("device-info")
      const description = formData.get("description")
      const email = formData.get("email")

      if (!issueType || !description) {
        alert("Proszę wypełnić wszystkie wymagane pola.")
        return
      }

      const submitButton = document.querySelector(".submit-button")
      const originalText = submitButton.innerHTML
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Wysyłanie...'
      submitButton.disabled = true
  
      setTimeout(() => {
        alert("Dziękujemy za zgłoszenie! Skontaktujemy się z Tobą w ciągu 24 godzin.")
        reportForm.reset()
        submitButton.innerHTML = originalText
        submitButton.disabled = false
      }, 2000)
    })

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const faqItem = targetElement.closest(".faq-item")
          if (faqItem) {
            document.querySelectorAll(".faq-item").forEach((item) => {
              item.classList.remove("active")
            })
            faqItem.classList.add("active")
          }
  
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          })
        }
      })
    })

    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".help-card, .faq-item, .contact-method, .status-item, .report-form-container",
      )
  
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (elementPosition < screenPosition) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    const elementsToAnimate = document.querySelectorAll(
      ".help-card, .faq-item, .contact-method, .status-item, .report-form-container",
    )
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    })
  
    window.addEventListener("load", animateOnScroll)
    window.addEventListener("scroll", animateOnScroll)

    const deviceInfoField = document.getElementById("device-info")
    if (deviceInfoField && navigator.userAgent) {
      const userAgent = navigator.userAgent
      let deviceInfo = ""
  
      if (/Android/i.test(userAgent)) {
        const androidMatch = userAgent.match(/Android ([0-9.]+)/)
        if (androidMatch) {
          deviceInfo = `Android ${androidMatch[1]}`
        }
      }
  
      if (deviceInfo) {
        deviceInfoField.placeholder = `np. ${deviceInfo}`
      }
    }
  })
  