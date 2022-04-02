const taskSection = document.querySelector("#taskSection")
const loginSection = document.querySelector("#loginSection")
const signUpSection = document.querySelector("#signUpSection")
const loginLinks = document.querySelectorAll(".loginLink")
const signUpLinks = document.querySelectorAll(".signUpLink")
const taskLinks = document.querySelectorAll(".taskLink")

taskLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    showTaskPage()
  })
})

loginLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    showLoginPage()
  })
})

signUpLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    showSignUpPage()
  })
})

const initPages = () => {
  showTaskPage()
}

const showTaskPage = () => {
  taskSection.classList.remove("hidden")
  loginSection.classList.add("hidden")
  signUpSection.classList.add("hidden")
}

const showLoginPage = () => {
  taskSection.classList.add("hidden")
  loginSection.classList.remove("hidden")
  signUpSection.classList.add("hidden")
}

const showSignUpPage = () => {
  taskSection.classList.add("hidden")
  loginSection.classList.add("hidden")
  signUpSection.classList.remove("hidden")
}

export { initPages, showTaskPage, showLoginPage, showSignUpPage }
