const loginLinks = document.querySelectorAll(".loginLink")
const signUpLinks = document.querySelectorAll(".signUpLink")

loginLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("login")
  })
})

signUpLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("sign up")
  })
})
