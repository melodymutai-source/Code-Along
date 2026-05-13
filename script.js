function Contact(firstName,lastName,phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}
function AddressBook(){
    this.Contacts ={};
    this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
    this.currentId += 1;
    contact.id = this.currentId;
    this.Contacts[contact.id] = contact;
};

AddressBook.prototype.findContact = function(id) {
    if (this.Contacts[id] !==undefined) {
        return this.Contacts[id];
    }
    return false;
};

AddressBook.prototype.deleteContact =function(id) {
    if (this.Contact[id] === undefined) {
        return false;
    }
    delete this.Contacts[id];
    return true;
};

let addressBook = new AddressBook();

window.addEventListener("load",function() {
    document.querySelector("form#new-contact").addEventListener("submit",function(event) {
        event.preventDefault();
        const inputtedFirstName = document.querySelector("input#new-first-name").value;
        const inputtedLastName = document.querySelector("input#new-last-name").value;
        const inputtedphoneNumber = document.querySelector("input#new-phone-number").value;

        let newContact = new Contact(inputtedFirstName,inputtedLastName,inputtedphoneNumber);
        addressBook.addContact(newContact);

        console.log(addressBook.Contacts);
    });
});