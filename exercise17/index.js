"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
const guestList = ["Marie Curie", "Galileo Galilei", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin", "Nikola Tesla"];
console.log("Good news: We can invite only two people for dinner.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Guests who are still invited
for (const person of guestList) {
    console.log(`Dear ${person}, you're still invited to dinner.`);
}
// Empty the list
guestList.length = 0;
console.log("Current guest list:", guestList);
