let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

// Function to handle incrementing count
function increment() {
    count += 1
    countEl.textContent = count
}

// Function to handle saving count
function save() {
    let countStr =" "+ count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// Function to handle resetting count
function deleted() {
    countEl.textContent = 0
    saveEl.textContent = " " + "Previous entries:" 
}

