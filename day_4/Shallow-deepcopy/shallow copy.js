// shallow copy demo: spread copy retains nested object references
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
}

// Modify a nested property directly on the original object
user.preferences.language = 'hindi'
console.log(user)

// Create a shallow copy using spread syntax
let copyUser = { ...user }
copyUser.name = 'nigama'
copyUser.preferences.theme = 'white'
copyUser.preferences.language = 'tel'
console.log(copyUser)
