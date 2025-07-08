/* TASK 1: Random Takeaway Order

Your task is to write a JavaScript function that creates a random takeaway order message.

Create a function called createOrder that takes two inputs:
- name (a string)
- deliveryStatus (a string: "on time" or "late")

Inside the function:
- Choose ONE random food item from an array of 10 possible options
- Capitalize the first letter of the name and the food
- If deliveryStatus is "on time", set delivery time to "30 minutes"
- If deliveryStatus is "late", set delivery time to "45 minutes"
- If it's anything else, set delivery time to "an unknown time"
- Return a message like: "Hi Luca! Your Pizza will arrive in 30 minutes!"

Example Outputs
createOrder("luca", "on time");      // "Hi Luca! Your Sushi will arrive in 30 minutes!"
createOrder("tina", "late");         // "Hi Tina! Your Burger will arrive in 45 minutes!"
createOrder("milo", "unknown");      // "Hi Milo! Your Pasta will arrive in an unknown time!"
*/

// possible random food options
const menuItems = [
  "burger",
  "pizza",
  "sushi",
  "ramen",
  "tacos",
  "fries",
  "burrito",
  "salad",
  "sandwich",
  "pasta",
];

function createOrder(name, deliveryStatus) {
  const randomNum = Math.floor(Math.random() * 10);
  const dish = menuItems[randomNum];
  const capitalizedDish = dish.charAt(0).toUpperCase() + dish.slice(1);
  const capitalizedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  let time;
  if (deliveryStatus === "on time") {
    time = "30 minutes";
  } else if (deliveryStatus === "late") {
    time = "45 minutes";
  } else {
    time = "an unknown time";
  }

  return `Hi ${capitalizedName}! Your ${capitalizedDish} will arrive in ${time}!`;
}

console.log(createOrder("ela", "on time"));
console.log(createOrder("michaEl", ""));
console.log(createOrder("GUSTAV", "late"));

/* TASK 2: Password Strength Checker Assignment

Your task is to write a JavaScript function that checks how strong a user's password is.

Create a function called checkPasswordStrength that takes one input: password (a string). It should return one of the following:

"This password has been used before. Please choose a new one." – if the password is in the usedPasswords array

"Too weak" – if the password is less than 6 characters OR doesn't include at least ONE of these symbols: &, %, !, ?

"Strong" – if the password is more than 8 characters AND includes at least TWO of these symbols: &, %, !, ?    (two unique symbols)

"Medium" – for any other case

// Example Outputs
checkPasswordStrength("abc");             // "Too weak"
checkPasswordStrength("password123!");    // "This password has been used before. Please choose a new one."
checkPasswordStrength("longpassword?");    // "Medium"
checkPasswordStrength("%myNewPass!");      // "Strong"
*/
const usedPasswords = ["password123!", "helloWorld!", "qwerty&"]; // previously used passwords

const checkPasswordStrength = (password) => {
  let message;
  if (usedPasswords.includes(password)) {
    message = "This password has been used before. Please choose a new one.";
  } else if (password.length > 8) {
    //if password is longer than 8 then we check if it has at leat TWO symbols
    let count = 0;
    password.includes("&") ? count++ : count;
    password.includes("%") ? count++ : count;
    password.includes("!") ? count++ : count;
    password.includes("?") ? count++ : count;
    // console.log(password.length);
    // console.log(count);
    if (count >= 2) {
      message = "Strong";
    } else {
      message = "Medium";
    }
  } else if (
    password.length < 6 ||
    password.includes("&") ||
    password.includes("%") ||
    password.includes("!") ||
    password.includes("?")
  ) {
    message = "Too weak";
  } else {
    message = "Medium";
  }
  return message;
};

console.log(checkPasswordStrength("abcdefg"));
console.log(checkPasswordStrength("password123!"));
console.log(checkPasswordStrength("abcghyrdsh%"));
console.log(checkPasswordStrength("%myNewPass!"));
console.log(checkPasswordStrength("%myNewPass"));
console.log(checkPasswordStrength("%myNewPass!&"));
