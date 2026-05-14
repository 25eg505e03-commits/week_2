//countdown timer demo for OTP resend behavior
console.log("OTP sent successfully")
let seconds = 5

// Run a function every second until the timer reaches zero
let intervalId = setInterval(() => {
  seconds--
  console.log(`otp can resend after ${seconds}secs`)

  if (seconds === 0) {
    console.log("resend otp")
    clearInterval(intervalId)
  }
}, 1000)
