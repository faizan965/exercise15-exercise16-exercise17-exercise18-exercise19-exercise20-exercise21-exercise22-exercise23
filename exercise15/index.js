"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list
const guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Original guest list
for (const person of guestList) {
    console.log(`Dear ${person}, I would like to invite you to a dinner at my place. It would be an honor to have you as our guest.`);
}
const guestWhoCantMakeIt = "Albert Einstein"; // A guest who can't make it
// Print a message about the guest who can't make it
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the guest who can't make it with a new person
const newGuest = "Isaac Newton"; // New guest
// Find the index of the guest who can't make it and replace them with the new guest
const indexOfCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfCantMakeIt !== -1) {
    guestList[indexOfCantMakeIt] = newGuest;
}
