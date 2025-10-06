// ================================
// Step 2: If-Else Condition
// ================================
let number = 0; // Try changing this to -5, 0, or 10

if (number > 0) {
    console.log(`${number} is positive`);
} else if (number < 0) {
    console.log(`${number} is negative`);
} else {
    console.log(`The number is zero`);
}

// ================================
// Step 3: Switch Statement
// ================================
let day = 4; // Try changing this number from 1–7

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}

// ================================
// Step 4: Loops
// ================================
console.log("For loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("While loop:");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log("Do...while loop:");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// ================================
// Step 5: break and continue
// ================================
console.log("Break example:");
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        console.log("Breaking at 3");
        break;
    }
    console.log(k);
}

console.log("Continue example:");
for (let m = 1; m <= 5; m++) {
    if (m === 3) {
        console.log("Skipping 3");
        continue;
    }
    console.log(m);
}

// ================================
// Step 6: Scope and Context
// ================================
let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

scopeExample();

// Trying to access localVar outside the function
try {
    console.log(localVar); // This will cause an error
} catch (error) {
    console.log("Error: localVar is not accessible outside the function");
}
console.log(globalVar); // Accessible