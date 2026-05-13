function contact(firstName,lastName,phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}
function AdressBook(){
    this.contacts ={};
    thid.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
    this.currentId += 1;
    contact.id = this.currentId;
    this.contacts[contact.id] = contact;
};

AdressBook.prototype.findContact = function(id) {
    if (this.contacts[id] !==undefined) {
        return this.contacts[id];
    }
    return false;
};

AdressBook.prototype.deleteContact =function(id) {
    if (this.contact[id] === undefined) {
        return false;
    }
    delete this.contacts[id];
    return true;
};

let addressBook = new AddressBook();

window.addEventListener("load",function(){
    document.querySelector("form#new-contact").addEventListener("submit",function(event) {
        event.preventDefault();
        const inputFirstName = document.querySelector("input#new-first-name").value;
        const inputLastName = document.querySelector("input#new-last-name").value;
        const inputphoneNumber = document.querySelector("inpu#new-phone-number").value;

        let newContact = newContact(inputFirstName,inputLastName,inputphoneNumber);
        addressBook.addContact(newContact);
    }
}