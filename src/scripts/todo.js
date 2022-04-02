const linkLogin = document.querySelector("#login")
const linkSignUp = document.querySelector("#sign_up")

linkLogin.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("login")
})

linkSignUp.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("sign up")
})
