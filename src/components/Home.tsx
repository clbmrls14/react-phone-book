import React, { useState } from "react";
import { AddContactForm } from "./Contacts/AddContactForm";
import { ContactList } from "./Contacts/ContactList";
import { SearchBar } from "./Contacts/SearchBar";

import "./Home.css";


let initalState: Contact[] = [
    {firstName: "Caleb", lastName: "Morales", phoneNumber: "385-535-6712"},
    {firstName: "Poison", lastName: "Control", phoneNumber: "800-222-1222"},
    {firstName: "Owlet", lastName: "Care", phoneNumber: "855-746-5781"},
];


export const Home = () => {
    const [contacts, setContacts] = useState(initalState);
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    const addContact = (contact: Contact) => {
        contacts.push(contact);
        setContacts([...contacts]);
        onSearch('');
    };

    const onSearch = (searchString: string) => {
        if (searchString === '') {
            setFilteredContacts(contacts);
        }
        setFilteredContacts(contacts.filter(contact => 
            contact.firstName.toLowerCase()
                .includes(searchString.toLowerCase()) ||
            contact.lastName.toLowerCase()
                .includes(searchString.toLowerCase()) ||
            contact.phoneNumber.toLowerCase()
                .includes(searchString.toLowerCase())
        ));
    };

    return (
        <div className="Home">
            <div className="Box Add-contact-panel">
                <h1>Add Contact</h1>
                <AddContactForm addContact={addContact}/>
            </div>
            <div className="Box Contact-list-panel">
                <h1>Phone Book</h1>
                <SearchBar onSearch={onSearch}/>
                <ContactList contacts={filteredContacts}/>
            </div>
        </div>
    );
};