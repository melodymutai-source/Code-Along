# Code-Along
let myBook = new AdressBook();
Expect: myBook.contacts to be {};

let myContact = new Contact("Jenna" "Addams", "0123453789");
Expect : myContact.firstName to be "Jenna";

let myBook = new AdressBook();
let myContact = new Contact("Jenna","Addams", "0123453789");
myBook.addContact(myContact);
Expect: myBook.contacts[1].id to be 1;