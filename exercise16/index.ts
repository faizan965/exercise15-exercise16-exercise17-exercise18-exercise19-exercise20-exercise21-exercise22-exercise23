//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// Add one new guest to the beginning of your array.

// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

const guestList: string[] = ["Marie Curie", "Leonardo da Vinci", "Isaac Newton"];

// Original guest list
for (const person of guestList) {
    console.log(`Dear ${person}, I would like to invite you to a dinner at my place. It would be an honor to have you as our guest.`);
}

console.log("Great news! We found a bigger dinner table.");

const newGuestBeginning = "Galileo Galilei"; // New guest to add to the beginning
const newGuestMiddle = "Charles Darwin"; // New guest to add to the middle
const newGuestEnd = "Nikola Tesla"; // New guest to add to the end

// Add a new guest to the beginning of the array
guestList.unshift(newGuestBeginning);

// Add a new guest to the middle of the array
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestMiddle);

// Use push() to add a new guest to the end of the list
guestList.push(newGuestEnd);

// New set of invitation messages
for (const person of guestList) {
    console.log(`Dear ${person}, I would like to invite you to a dinner at my place. It would be an honor to have you as our guest.`);
}